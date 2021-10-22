<template>
  <div class="body-wrapper">
    <div class="top-row">
      <datepicker
        :format="formatDate"
        :disabledDates="disabledDates"
        placeholder="Datum auswählen"
        v-model="date"
        class="datepicker-common"
      ></datepicker>
      <div class="top-row-btn">
        <div class="btn-wrap edit-btn" @click="goToEdit()">
          Edit
        </div>
        <div class="btn-wrap logout-box" @click="logout()">
          Logout
        </div>
      </div>
    </div>
    <div class="customer-data">
      <div class="row-heading">
        <ul class="row-data">
          <li class="col-data">Datum & Uhrzeit</li>
          <li class="col-data">Name</li>
          <li class="col-data">Telefonnummer</li>
          <li class="col-data">Ort</li>
          <li class="col-data">Adresse</li>
          <li class="col-data">E-Mail</li>
          <li class="col-data">Nachweis</li>
          <li class="col-data">Aufenthaltszeit</li>
          <li class="col-data">Tisch-Nummer</li>
          <li class="col-data">Weitere Personen</li>
        </ul>
      </div>
      <div class="row-body">
        <ul
          class="row-data"
          v-for="(customer, index) in customers"
          :key="index"
        >
          <li class="col-data">
            {{ customer.created_at }}
          </li>
          <li class="col-data">
            {{ customer.name_customer }}
          </li>
          <li class="col-data">
            {{ customer.phone }}
          </li>
          <li class="col-data">
            {{ customer.place }}
          </li>
          <li class="col-data">
            {{ customer.address }}
          </li>
          <li class="col-data">
            {{ customer.email }}
          </li>
          <li class="col-data">
            {{ customer.nachweis }}
          </li>
          <li class="col-data">
            {{ customer.timeStay }}
          </li>
          <li class="col-data">
            {{ customer.tableNumber }}
          </li>
          <li class="col-data">
            {{ customer.extend_infor }}
          </li>
        </ul>
      </div>
    </div>
    <div class="action-row">
      <button
        class="action-btn"
        :disabled="date == null"
        @click="downloadExcel('day')"
      >
        Download Excel (Tag)
      </button>
      <button class="action-btn" @click="downloadExcel('all')">
        Download Excel (Gesamt)
      </button>
      <a
        class="link-download"
        :href="linkUrl"
        :download="downloadValue"
        ref="link"
      >
        Download File
      </a>
    </div>
  </div>
</template>
<script>
import { Constants } from "@/global/constants.js";
import { mapState } from "vuex";
import Datepicker from "vuejs-datepicker";
import Customer from "@/services/Customer";
import Excel from "@/services/Excel";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      date: new Date(),
      formatDate: "",
      disabledDates: {
        from: new Date(),
      },
      customers: [],

      // download file
      linkUrl: "",
      downloadValue: "",
    };
  },

  computed: {
    ...mapState({}),
  },

  watch: {
    date() {
      this.getCustomerByDate();
    },
  },

  methods: {
    getCustomers() {
      this.$store.commit("form/showLoading", true);
      Customer.getCustomers().then((resp) => {
        this.$store.commit("form/showLoading", false);
        this.customers = resp.data;
      });
    },

    getCustomerByDate() {
      if (this.date == null) return;
      this.$store.commit("form/showLoading", true);
      this.date = this.$moment(this.date).format("YYYY-MM-DD");
      Customer.getCustomerByDate(this.date).then((resp) => {
        this.$store.commit("form/showLoading", false);
        this.customers = resp.data;
      });
    },

    logout() {
      this.$router.push({ path: "/login" });
    },

    downloadExcel(type) {
      switch (type) {
        case "all":
          Excel.getExcel().then((resp) => {
            this.downloadFile(resp, "Kundenliste-Gesamt");
          });
          break;

        case "day":
          this.date = this.$moment(this.date).format("YYYY-MM-DD");
          Excel.getExcelByDate(this.date).then((resp) => {
            this.downloadFile(resp, "Kundenliste");
          });
          break;
      }
    },

    downloadFile(data, filename = "cs") {
      this.linkUrl = window.URL.createObjectURL(new Blob([data]));
      this.downloadValue = `${filename}.xls`;
      setTimeout(() => {
        this.$refs.link.click();
      }, 100);
    },

    goToEdit() {
      this.$router.push({ path: "/edit" });
    },
  },

  created() {
    this.date = null;
    this.formatDate = Constants.DATE_FORMAT;
    this.getCustomers();
  },
};
</script>

<style lang="scss"></style>
