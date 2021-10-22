<template>
  <main>
    <div class="container">
      <div class="wrapper">
        <div class="form-row">
          <div class="form-heading">
            {{ $t("Please enter your contact data") }}
          </div>
          <div class="form-subheading">
            {{
              $t(
                "If you enter the restaurant as a group, please use the Possibility of adding additional first and last names for To register members of the same household"
              )
            }}
          </div>
          <div class="wrap-input">
            <input
              type="text"
              maxlength="100"
              v-model="name"
              class="form-input"
              data-field-input="fieldName"
              :class="[name !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': formName.invalid }"
            >
              <span>{{ $t("First and last name") }}</span>
            </div>
          </div>
          <div
            class="validate-notify"
            v-if="formName.invalid && formName.invalidType == 'special'"
          >
            <span>{{ $t("Name cannot contain any special characters") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formName.invalid && formName.invalidType == 'number'"
          >
            <span>{{ $t("Name cannot contain numbers") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formName.invalid && formName.invalidType == ''"
          >
            <span>{{ $t("Must not be empty") }}</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-heading">{{ $t("Contact data") }}:</div>
          <div class="wrap-input">
            <input
              type="number"
              inputmode="numeric"
              pattern="[0-9]*"
              maxlength="100"
              v-model="phone"
              class="form-input"
              data-field-input="fieldPhone"
              :class="[phone !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': formPhone.invalid }"
            >
              <span>{{ $t("E.g. 0170123456789") }}</span>
            </div>
          </div>
          <div
            class="validate-notify"
            v-if="formPhone.invalid && formPhone.invalidType == 'number'"
          >
            <span>{{ $t("Telephone number must start with a 0") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formPhone.invalid && formPhone.invalidType == ''"
          >
            <span>{{ $t("Must not be empty") }}</span>
          </div>
          <div class="wrap-input">
            <input
              type="text"
              maxlength="100"
              v-model="place"
              class="form-input"
              data-field-input="fieldPlace"
              :class="[place !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': formPlace.invalid }"
            >
              <span>{{ $t("District or place of permanent residence") }}</span>
            </div>
          </div>
          <div
            class="validate-notify"
            v-if="formPlace.invalid && formPlace.invalidType == 'special'"
          >
            <span>{{ $t("Cannot contain any special characters") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formPlace.invalid && formPlace.invalidType == 'number'"
          >
            <span>{{ $t("Cannot contain numbers") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formPlace.invalid && formPlace.invalidType == ''"
          >
            <span>{{ $t("Must not be empty") }}</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-heading">
            {{ $t("Other possibility for contacting") }}:
          </div>
          <div class="wrap-input">
            <input
              type="text"
              maxlength="100"
              v-model="address"
              class="form-input"
              data-field-input="fieldAddress"
              :class="[address !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': invalidAddress }"
            >
              <span>{{ $t("Full address") }}</span>
            </div>
          </div>
          <div class="validate-notify" v-if="invalidAddress">
            <span>{{ $t("Must not be empty") }}</span>
          </div>
          <div class="wrap-input">
            <input
              type="text"
              v-model="email"
              maxlength="100"
              class="form-input"
              data-field-input="fieldEmail"
              :class="[email !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': formEmail.invalid }"
            >
              <span>E-Mail</span>
            </div>
          </div>
          <div
            class="validate-notify"
            v-if="formEmail.invalid && formEmail.invalidType == 'format'"
          >
            <span>{{
              $t("Email is not in the correct format for an email address")
            }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formEmail.invalid && formEmail.invalidType == ''"
          >
            <span>{{ $t("Must not be empty") }}</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-heading">
            {{ $t("Verification") }}
          </div>
          <div class="form-subheading">
            {{
              $t(
                "A visit to the outdoor catering is only possible if you present current evidence of a negative test, a complete vaccination or a recovery. We ask you to truthfully choose whether you have either been tested, fully vaccinated, or recovered for the coronavirus."
              )
            }}
          </div>
          <div
            class="wrap-input covid-verify"
            :class="{ 'invalid-value': invalidCovidVerify }"
          >
            <select class="covid-verify-select" v-model="covidVerify">
              <option disabled value="">{{ $t("None") }}</option>
              <option>{{ $t("Negative Covid test") }}</option>
              <option>{{ $t("Fully vaccinated") }}</option>
              <option>{{ $t("Recovered") }}</option>
            </select>
          </div>
          <div class="validate-notify" v-if="invalidCovidVerify">
            <span>{{ $t("Please select one") }}</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-heading">
            {{ $t("Information about your visit") }}:
          </div>
          <div class="wrap-input">
            <input
              type="number"
              inputmode="numeric"
              pattern="[0-9]*"
              v-model="timeStay"
              class="form-input"
              data-field-input="fieldTimeStay"
              :class="[timeStay !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': formTimeStay.invalid }"
            >
              <span>{{ $t("Stay duration in minutes") }}</span>
            </div>
          </div>
          <div
            class="validate-notify"
            v-if="formTimeStay.invalid && formTimeStay.invalidType == 'number'"
          >
            <span>{{ $t("Please enter only numbers") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="formTimeStay.invalid && formTimeStay.invalidType == 'max'"
          >
            <span>{{ $t("Number must be less than") }} 300</span>
          </div>
          <div class="wrap-input">
            <input
              type="number"
              inputmode="numeric"
              pattern="[0-9]*"
              v-model="tableNumber"
              class="form-input"
              data-field-input="fieldTableNumber"
              :class="[tableNumber !== '' ? 'has-value' : '']"
              @input="changeFormInput"
            />
            <div
              class="focus-input"
              :class="{ 'invalid-value': formTableNumber.invalid }"
            >
              <span>{{ $t("Tisch-Number") }}</span>
            </div>
          </div>
          <div
            class="validate-notify"
            v-if="formTableNumber.invalid && formTableNumber.invalidType == ''"
          >
            <span>{{ $t("Must not be empty") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="
              formTableNumber.invalid && formTableNumber.invalidType == 'number'
            "
          >
            <span>{{ $t("Please enter only numbers") }}</span>
          </div>
          <div
            class="validate-notify"
            v-if="
              formTableNumber.invalid && formTableNumber.invalidType == 'max'
            "
          >
            <span>{{ $t("Number must be less than") }} 150</span>
          </div>
        </div>

        <div class="add-more-form" v-if="!disableAddForm">
          <div class="add-more-btn" @click="hideAddMoreForm()">
            <span></span>
            <span></span>
          </div>
          <span class="text-btn">{{ $t("Record other persons") }}</span>
        </div>

        <div class="new-form-row-wrap" v-if="disableAddForm">
          <div class="form-row">
            <div class="form-heading">{{ $t("Record other persons") }}</div>
            <div class="wrap-input">
              <input
                type="text"
                maxlength="100"
                v-model="anotherPerson1"
                class="form-input"
                data-field-input="fieldPerson1"
                :class="[anotherPerson1 !== '' ? 'has-value' : '']"
                @input="changeFormInput"
              />
              <div
                class="focus-input"
                :class="{ 'invalid-value': formAnotherPersonName1.invalid }"
              >
                <span>{{ $t("Other persons first and last name") }}</span>
              </div>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName1.invalid &&
                  formAnotherPersonName1.invalidType == 'special'
              "
            >
              <span>{{
                $t("Name cannot contain any special characters")
              }}</span>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName1.invalid &&
                  formAnotherPersonName1.invalidType == 'number'
              "
            >
              <span>{{ $t("Name cannot contain numbers") }}</span>
            </div>
            <div class="wrap-input">
              <input
                type="text"
                maxlength="100"
                v-model="anotherPerson2"
                class="form-input"
                data-field-input="fieldPerson2"
                :class="[anotherPerson2 !== '' ? 'has-value' : '']"
                @input="changeFormInput"
              />
              <div
                class="focus-input"
                :class="{ 'invalid-value': formAnotherPersonName2.invalid }"
              >
                <span>{{ $t("Other persons first and last name") }}</span>
              </div>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName2.invalid &&
                  formAnotherPersonName2.invalidType == 'special'
              "
            >
              <span>{{
                $t("Name cannot contain any special characters")
              }}</span>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName2.invalid &&
                  formAnotherPersonName2.invalidType == 'number'
              "
            >
              <span>{{ $t("Name cannot contain numbers") }}</span>
            </div>
            <div class="wrap-input">
              <input
                type="text"
                maxlength="100"
                v-model="anotherPerson3"
                class="form-input"
                data-field-input="fieldPerson3"
                :class="[anotherPerson3 !== '' ? 'has-value' : '']"
                @input="changeFormInput"
              />
              <div
                class="focus-input"
                :class="{ 'invalid-value': formAnotherPersonName3.invalid }"
              >
                <span>{{ $t("Other persons first and last name") }}</span>
              </div>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName3.invalid &&
                  formAnotherPersonName3.invalidType == 'special'
              "
            >
              <span>{{
                $t("Name cannot contain any special characters")
              }}</span>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName3.invalid &&
                  formAnotherPersonName3.invalidType == 'number'
              "
            >
              <span>{{ $t("Name cannot contain numbers") }}</span>
            </div>
            <div class="wrap-input">
              <input
                type="text"
                maxlength="100"
                v-model="anotherPerson4"
                class="form-input"
                data-field-input="fieldPerson4"
                :class="[anotherPerson4 !== '' ? 'has-value' : '']"
                @input="changeFormInput"
              />
              <div
                class="focus-input"
                :class="{ 'invalid-value': formAnotherPersonName4.invalid }"
              >
                <span>{{ $t("Other persons first and last name") }}</span>
              </div>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName4.invalid &&
                  formAnotherPersonName4.invalidType == 'special'
              "
            >
              <span>{{
                $t("Name cannot contain any special characters")
              }}</span>
            </div>
            <div
              class="validate-notify"
              v-if="
                formAnotherPersonName4.invalid &&
                  formAnotherPersonName4.invalidType == 'number'
              "
            >
              <span>{{ $t("Name cannot contain numbers") }}</span>
            </div>
          </div>
        </div>

        <div class="confirm-block">
          <vue-recaptcha
            sitekey="6Lf4zeIZAAAAALHDaEaXiGdfS4OTixAiTtajSqmA"
            :loadRecaptchaScript="true"
            language="de"
            @verify="checkReCaptcha"
          >
          </vue-recaptcha>
          <div class="reCaptcha-error" v-if="reCaptchaError">
            {{ $t("Verify reCAPTCHA!") }}
          </div>
          <div class="submit-btn" @click="saveInfo()">
            {{ $t("Enter contact data") }}
          </div>
          <div class="confirm-text">
            Mit Bestätigung der Kontaktdaten Erfassung, bin ich mit den unten
            genannten Datenschutzrichtlinien einverstanden.
          </div>
        </div>
      </div>
    </div>
    <div class="datenschutz-btn" @click="showDatenschutzPopup()">
      {{ $t("Data protection") }}
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import Customer from "@/services/Customer";
import { Constants } from "@/global/constants.js";
import VueRecaptcha from "vue-recaptcha";

export default {
  components: {
    VueRecaptcha,
  },

  computed: {
    ...mapState({}),
  },

  data() {
    return {
      covidVerify: "",
      name: "",
      phone: "",
      place: "",
      address: "",
      timeStay: "",
      tableNumber: "",
      email: "",
      anotherPerson1: "",
      anotherPerson2: "",
      anotherPerson3: "",
      anotherPerson4: "",

      disableAddForm: false,

      invalidCovidVerify: false,
      invalidAddress: false,

      formName: {
        invalid: false,
        invalidType: "",
      },
      formPhone: {
        invalid: false,
        invalidType: "",
      },
      formPlace: {
        invalid: false,
        invalidType: "",
      },
      formEmail: {
        invalid: false,
        invalidType: "",
      },
      formTimeStay: {
        invalid: false,
        invalidType: "",
      },
      formTableNumber: {
        invalid: false,
        invalidType: "",
      },
      formAnotherPersonName1: {
        invalid: false,
        invalidType: "",
      },
      formAnotherPersonName2: {
        invalid: false,
        invalidType: "",
      },
      formAnotherPersonName3: {
        invalid: false,
        invalidType: "",
      },
      formAnotherPersonName4: {
        invalid: false,
        invalidType: "",
      },

      reCaptcha: false,
      reCaptchaError: false,
    };
  },

  methods: {
    checkReCaptcha(response) {
      if (response) {
        this.reCaptcha = true;
        this.reCaptchaError = false;
      }
    },

    saveInfo() {
      if (this.covidVerify == "") {
        this.invalidCovidVerify = true;
        this.scrollToErrorField();
        return;
      } else {
        this.invalidCovidVerify = false;
      }
      if (this.name == "") {
        this.formName.invalid = true;
        this.formName.invalidType = "";
        this.scrollToErrorField();
        return;
      }
      if (this.phone == "") {
        this.formPhone.invalid = true;
        this.formPhone.invalidType = "";
        this.scrollToErrorField();
        return;
      }
      if (this.place == "") {
        this.formPlace.invalid = true;
        this.formPlace.invalidType = "";
        this.scrollToErrorField();
        return;
      }
      if (this.address == "") {
        this.invalidAddress = true;
        this.scrollToErrorField();
        return;
      }
      if (this.email == "") {
        this.formEmail.invalid = true;
        this.formEmail.invalidType = "";
        this.scrollToErrorField();
        return;
      }
      if (this.tableNumber == "") {
        this.formTableNumber.invalid = true;
        this.formTableNumber.invalidType = "";
        this.scrollToErrorField();
        return;
      }
      if (
        this.formName.invalid ||
        this.formPhone.invalid ||
        this.formPlace.invalid ||
        this.invalidAddress ||
        this.formEmail.invalid ||
        this.formTimeStay.invalid ||
        this.formTableNumber.invalid ||
        this.formAnotherPersonName1.invalid ||
        this.formAnotherPersonName2.invalid ||
        this.formAnotherPersonName3.invalid ||
        this.formAnotherPersonName4.invalid
      ) {
        this.scrollToErrorField();
        return;
      }
      this.submitForm();
    },

    scrollToErrorField() {
      setTimeout(() => {
        let errorField = document
          .querySelector(".invalid-value")
          .closest(".form-row");
        window.scroll({
          top: errorField.offsetTop,
          behavior: "smooth",
        });
      }, 200);
    },

    hideAddMoreForm() {
      this.disableAddForm = true;
    },

    showDatenschutzPopup() {
      this.$store.dispatch("form/updatePopupDatenschutz", true);
    },

    changeFormInput(e) {
      setTimeout(() => {
        if (e.target.getAttribute("data-field-input") === "fieldName") {
          this.name = e.target.value;
          this.validateName(this.name);
        }
        if (e.target.getAttribute("data-field-input") === "fieldPhone") {
          this.phone = e.target.value;
          this.validatePhone(this.phone);
        }
        if (e.target.getAttribute("data-field-input") === "fieldPlace") {
          this.place = e.target.value;

          this.validatePlace(this.place);
        }
        if (e.target.getAttribute("data-field-input") === "fieldAddress") {
          this.address = e.target.value;

          if (this.address != "") {
            this.invalidAddress = false;
          }
        }
        if (e.target.getAttribute("data-field-input") === "fieldEmail") {
          this.email = e.target.value;
          this.validateEmail(this.email);
        }
        if (e.target.getAttribute("data-field-input") === "fieldTimeStay") {
          this.timeStay = e.target.value;
          this.validateTimeStay(this.timeStay);
        }
        if (e.target.getAttribute("data-field-input") === "fieldTableNumber") {
          this.tableNumber = e.target.value;
          this.validateTableNumber(this.tableNumber);
        }
        if (e.target.getAttribute("data-field-input") === "fieldPerson1") {
          this.anotherPerson1 = e.target.value;
          this.validateNamePerson1(this.anotherPerson1);
        }
        if (e.target.getAttribute("data-field-input") === "fieldPerson2") {
          this.anotherPerson2 = e.target.value;
          this.validateNamePerson2(this.anotherPerson2);
        }
        if (e.target.getAttribute("data-field-input") === "fieldPerson3") {
          this.anotherPerson3 = e.target.value;
          this.validateNamePerson3(this.anotherPerson3);
        }
        if (e.target.getAttribute("data-field-input") === "fieldPerson4") {
          this.anotherPerson4 = e.target.value;
          this.validateNamePerson4(this.anotherPerson4);
        }
      }, 200);
    },

    validateName(value) {
      let nameFormat = Constants.REGEX.NAME_FORMAT;
      let numberFormat = /[0-9]/;
      let specialCharactersFormat = /[!@#\$%\^\&*\)\(+=_-]/;

      if (nameFormat.test(value.toLowerCase()) || value == "") {
        this.formName.invalid = false;
      } else {
        this.formName.invalid = true;

        if (numberFormat.test(value)) {
          this.formName.invalidType = "number";
        }

        if (specialCharactersFormat.test(value)) {
          this.formName.invalidType = "special";
        }
      }
    },

    validateNamePerson1(value) {
      let nameFormat = Constants.REGEX.NAME_FORMAT;
      let numberFormat = /[0-9]/;
      let specialCharactersFormat = /[!@#\$%\^\&*\)\(+=_-]/;

      if (nameFormat.test(value.toLowerCase()) || value == "") {
        this.formAnotherPersonName1.invalid = false;
      } else {
        this.formAnotherPersonName1.invalid = true;

        if (numberFormat.test(value)) {
          this.formAnotherPersonName1.invalidType = "number";
        }

        if (specialCharactersFormat.test(value)) {
          this.formAnotherPersonName1.invalidType = "special";
        }
      }
    },

    validateNamePerson2(value) {
      let nameFormat = Constants.REGEX.NAME_FORMAT;
      let numberFormat = /[0-9]/;
      let specialCharactersFormat = /[!@#\$%\^\&*\)\(+=_-]/;

      if (nameFormat.test(value.toLowerCase()) || value == "") {
        this.formAnotherPersonName2.invalid = false;
      } else {
        this.formAnotherPersonName2.invalid = true;

        if (numberFormat.test(value)) {
          this.formAnotherPersonName2.invalidType = "number";
        }

        if (specialCharactersFormat.test(value)) {
          this.formAnotherPersonName2.invalidType = "special";
        }
      }
    },

    validateNamePerson3(value) {
      let nameFormat = Constants.REGEX.NAME_FORMAT;
      let numberFormat = /[0-9]/;
      let specialCharactersFormat = /[!@#\$%\^\&*\)\(+=_-]/;

      if (nameFormat.test(value.toLowerCase()) || value == "") {
        this.formAnotherPersonName3.invalid = false;
      } else {
        this.formAnotherPersonName3.invalid = true;

        if (numberFormat.test(value)) {
          this.formAnotherPersonName3.invalidType = "number";
        }

        if (specialCharactersFormat.test(value)) {
          this.formAnotherPersonName3.invalidType = "special";
        }
      }
    },

    validateNamePerson4(value) {
      let nameFormat = Constants.REGEX.NAME_FORMAT;
      let numberFormat = /[0-9]/;
      let specialCharactersFormat = /[!@#\$%\^\&*\)\(+=_-]/;

      if (nameFormat.test(value.toLowerCase()) || value == "") {
        this.formAnotherPersonName4.invalid = false;
      } else {
        this.formAnotherPersonName4.invalid = true;

        if (numberFormat.test(value)) {
          this.formAnotherPersonName4.invalidType = "number";
        }

        if (specialCharactersFormat.test(value)) {
          this.formAnotherPersonName4.invalidType = "special";
        }
      }
    },

    validateEmail(value) {
      let emailFormat = Constants.REGEX.EMAIL_FORMAT;

      if (value.match(emailFormat) || value == "") {
        this.formEmail.invalid = false;
      } else {
        this.formEmail.invalid = true;
        this.formEmail.invalidType = "format";
      }
    },

    validatePhone(value) {
      let numberFormat = /^0[0-9]+$/; // must start with 0

      if (value.match(numberFormat) || value == "") {
        this.formPhone.invalid = false;
      } else {
        this.formPhone.invalid = true;
        this.formPhone.invalidType = "number";
      }
    },

    validatePlace(value) {
      let placeFormat = Constants.REGEX.NAME_FORMAT;
      let numberFormat = /[0-9]/;
      let specialCharactersFormat = /[!@#\$%\^\&*\)\(+=_-]/;

      if (placeFormat.test(value.toLowerCase()) || value == "") {
        this.formPlace.invalid = false;
      } else {
        this.formPlace.invalid = true;

        if (numberFormat.test(value)) {
          this.formPlace.invalidType = "number";
        }

        if (specialCharactersFormat.test(value)) {
          this.formPlace.invalidType = "special";
        }
      }
    },

    validateTimeStay(value) {
      let numberFormat = Constants.REGEX.NUMBER_FORMAT;

      if (value.match(numberFormat) || value == "") {
        this.formTimeStay.invalid = false;

        if (value > 300) {
          this.formTimeStay.invalid = true;
          this.formTimeStay.invalidType = "max";
          return;
        }
      } else {
        this.formTimeStay.invalid = true;
        this.formTimeStay.invalidType = "number";
      }
    },

    validateTableNumber(value) {
      let numberFormat = Constants.REGEX.NUMBER_FORMAT;

      if (value.match(numberFormat) || value == "") {
        this.formTableNumber.invalid = false;

        if (value > 150) {
          this.formTableNumber.invalid = true;
          this.formTableNumber.invalidType = "max";
          return;
        }
      } else {
        this.formTableNumber.invalid = true;
        this.formTableNumber.invalidType = "number";
      }
    },

    submitForm() {
      if (this.reCaptcha) {
        this.$store.commit("form/showLoading", true);

        let extendInfo = [];
        if (this.anotherPerson1 !== "") {
          extendInfo.push(this.anotherPerson1);
        }
        if (this.anotherPerson2 !== "") {
          extendInfo.push(this.anotherPerson2);
        }
        if (this.anotherPerson3 !== "") {
          extendInfo.push(this.anotherPerson3);
        }
        if (this.anotherPerson4 !== "") {
          extendInfo.push(this.anotherPerson4);
        }
        extendInfo = extendInfo.join(", ");

        let data = {
          name: this.name,
          phone: this.phone,
          place: this.place,
          address: this.address,
          timeStay: this.timeStay,
          tableNumber: this.tableNumber,
          email: this.email,
          extend_infor: extendInfo,
          nachweis: this.covidVerify,
        };

        this.$store.commit("form/setFormData", data);
        data = JSON.stringify(data);
        Customer.createCustomer(data).then((response) => {
          if (response.status === 200) {
            this.$store.commit("form/showLoading", false);
            this.$router.push({ path: "/confirm" });
          }
        });
      } else {
        this.reCaptchaError = true;
      }
    },
  },

  created() {},
};
</script>

<style lang="scss"></style>
