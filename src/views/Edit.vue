<template>
  <div class="body-wrapper">
    <div class="top-row">
      <div class="btn-wrap back-btn" @click="back()">
        <span class="icon-cheveron-left"></span>
        Back
      </div>
      <div class="btn-wrap logout-box" @click="logout()">
        Logout
      </div>
    </div>
    <div class="container">
      <div class="form-edit-block">
        <div class="form-row-edit">
          <h3 class="form-row-edit-heading">
            Adresse Header
          </h3>
          <input
            type="text"
            class="edit-input"
            v-model="addrHeader"
            @input="editForm"
          />
        </div>
        <div class="form-row-edit">
          <h3 class="form-row-edit-heading">
            Logo Hochladen
          </h3>
          <div class="upload-btn">
            <span>Choose File</span>
            <input
              type="file"
              accept="image/*"
              title=""
              class="file-input"
              @change="uploadFile($event)"
            />
          </div>
          <img :src="imagePreview" alt="logo" v-if="imagePreview" />
          <img :src="pathImg" alt="logo" v-if="imagePreview == ''" />
        </div>
        <div class="form-row-edit">
          <h3 class="form-row-edit-heading">
            IHR ( Restaurant / Geschäft name)
          </h3>
          <input
            type="text"
            class="edit-input"
            v-model="ihr"
            @input="editForm"
          />
        </div>
        <div class="form-row-edit">
          <h3 class="form-row-edit-heading">
            Datenschutz text:
          </h3>
          <div class="form-row-edit">
            <p>
              - Restaurant name
            </p>
            <input
              type="text"
              class="edit-input"
              v-model="name"
              @input="editForm"
            />
          </div>
          <div class="form-row-edit">
            <p>
              - Adresse
            </p>
            <input
              type="text"
              class="edit-input"
              v-model="address"
              @input="editForm"
            />
          </div>
          <div class="form-row-edit">
            <p>
              - Zusatz
            </p>
            <input
              type="text"
              class="edit-input"
              v-model="zusatz"
              @input="editForm"
            />
          </div>
          <div class="form-row-edit">
            <p>
              - Telefonnummer
            </p>
            <input
              type="text"
              class="edit-input"
              v-model="phone"
              @input="editForm"
            />
          </div>
          <div class="form-row-edit">
            <p>
              - Geschäftsführer
            </p>
            <input
              type="text"
              class="edit-input"
              v-model="director"
              @input="editForm"
            />
          </div>
          <div class="form-row-edit">
            <p>
              - Steuer Nr.
            </p>
            <input
              type="text"
              class="edit-input"
              v-model="tax"
              @input="editForm"
            />
          </div>
        </div>
      </div>
      <div class="save-noti" v-if="saveSuccess">
        Save Successful
      </div>
      <div class="save-btn" @click="saveData()">
        Save
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import firebase from "firebase";
import Company from "@/services/Company";

export default {
  components: {},

  computed: {
    ...mapState({
      companyInfo: (state) => state.company.companyInfo,
    }),
  },

  data() {
    return {
      imagePreview: "",

      addrHeader: "",
      pathImg: null,
      ihr: "",
      name: "",
      zusatz: "",
      address: "",
      phone: "",
      director: "",
      tax: "",

      saveSuccess: false,
    };
  },

  methods: {
    getCompanyInfo() {
      this.$store.commit("form/showLoading", true);

      Company.getCompany().then((res) => {
        this.$store.commit("company/setCompanyInfo", res);
        this.setPreviewInfo();
        this.$store.commit("form/showLoading", false);
      });
    },

    setPreviewInfo() {
      this.addrHeader = this.companyInfo.address_header;
      this.pathImg = this.companyInfo.logo_path;
      this.ihr = this.companyInfo.company_name;
      this.name = this.companyInfo.restaurant_name;
      this.zusatz = this.companyInfo.restaurant_name_extend;
      this.address = this.companyInfo.restaurant_address;
      this.phone = this.companyInfo.restaurant_phone;
      this.director = this.companyInfo.restaurant_director;
      this.tax = this.companyInfo.restaurant_tax_number;
    },

    editForm() {
      this.saveSuccess = false;
    },

    logout() {
      this.$router.push({ path: "/login" });
    },

    back() {
      this.$router.push({ path: "/customer" });
    },

    uploadFile(e) {
      let files = e.target.files[0];
      // preview image , customer can see what happend with the logo
      this.createImage(files);
      const storageRef = firebase
        .storage()
        .ref(`logo/${files.name}`)
        .put(files);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          let uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.pathImg = url;
          });
        }
      );
    },

    /***
     * Create a Preview to see image
     * @param file
     */
    createImage(file) {
      let imagePreview = new Image();
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    saveData() {
      this.$store.commit("form/showLoading", true);

      let data = {
        address_header: this.addrHeader,
        logo_path: this.pathImg,
        company_name: this.ihr,
        restaurant_name: this.name,
        restaurant_name_extend: this.zusatz,
        restaurant_address: this.address,
        restaurant_phone: this.phone,
        restaurant_director: this.director,
        restaurant_tax_number: this.tax,
      };

      data = JSON.stringify(data);
      Company.addCompany(data).then((response) => {
        this.$store.commit("form/showLoading", false);
        this.saveSuccess = true;
      });
    },
  },

  created() {
    this.getCompanyInfo();
  },
};
</script>

<style lang="scss"></style>
