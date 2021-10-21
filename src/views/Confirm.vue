<template>
  <div class="body-wrapper">
    <Header />
    <main>
      <div class="container">
        <div class="notify">
          <div class="notify-icon">
            <span class="icon-checkmark"></span>
          </div>
          <div class="notify-text">
            <p>Vielen Dank, die Daten wurden erfolgreich übermittelt.</p>
            <p>Wir wünschen einen schönen Aufenthalt und guten Appetit!</p>
          </div>
        </div>
        <div class="confirm-info">
          <div class="timestamp">
            <p>Daten übermittelt am</p>
            <p>{{ date }} um {{ time }} Uhr</p>
          </div>
          <div class="information">
            <p>Übermittelte Daten:</p>
            <p>Aufenthaltsdauer: {{ formData.timeStay || 0 }} Minuten</p>
            <p>Kontaktdaten:</p>
            <p>{{ formData.name }}</p>
            <p>{{ formData.address }}</p>
            <p>Tel. {{ formData.phone }}</p>
            <p>{{ formData.email }}</p>
            <p>Nachweis: {{ formData.nachweis }}</p>
            <p v-if="formData.extend_infor !== ''">
              Weitere Person: {{ formData.extend_infor }}
            </p>
          </div>
        </div>
      </div>
      <div class="text-bottom">
        Bitte schließen Sie diese Seite für die Zeit Ihres Aufenthalts in
        unserem Restaurant nicht, damit Sie nachweisen können, dass Sie Ihre
        Daten angegeben haben.
      </div>
    </main>
  </div>
</template>
<script>
// import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },

  computed: {
    ...mapState({
      formData: (state) => state.form.formData,
    }),
  },

  data() {
    return {
      date: "",
      time: "",
    };
  },

  methods: {},

  created() {
    this.date = this.$moment(new Date()).format("DD.MM.YYYY");
    this.time = this.$moment().format("HH:mm");
    if (!this.formData.name) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style lang="scss"></style>
