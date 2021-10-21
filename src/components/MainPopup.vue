<template>
  <div class="popup-common" v-if="activeMainPopup">
    <div class="popup-overlay"></div>
    <div class="popup-content">
      <div class="popup-text">
        <p>Lieber Gast,</p>
        <p>
          aufgrund der aktuellen Bestimmungen im Zusammenhang mit der
          Corona-Pandemie besteht die Verpflichtung, alle Gäste mit Kontaktdaten
          zu erfassen.
        </p>
        <p>
          Dies geschieht, damit Sie ggf. später im Fall eines
          Infektionsgeschehens von der Gesundheitsbehörde kontaktiert werden
          können. Sollten Sie hiermit nicht einverstanden sein, ist eine
          Bewirtung bzw. ein Verzehr vor Ort leider nicht gestattet. In diesem
          Fall empfehlen wir Ihnen, unseren Außerhausverkauf zu nutzen.
        </p>
        <p>
          In dieser für uns alle besonderen Situation bitten wir Sie um
          Verständnis und Unterstützung bei der Einhaltung dieser staatlichen
          Vorgaben. Wir freuen uns über Ihren Besuch und wünschen Ihnen einen
          angenehmen Aufenthalt in unserem Restaurant.
        </p>
        <p>Ihr {{ companyInfo.company_name }}</p>
      </div>
      <div class="popup-btn" @click="hidePopup()">
        Kontaktdatenerfassung starten
      </div>
    </div>
  </div>
</template>
<script>
// import { globalFunction } from "@/global/global.js";
import { mapState } from "vuex";

export default {
  components: {},

  computed: {
    ...mapState({
      companyInfo: (state) => state.company.companyInfo,
    }),
  },

  data() {
    return {
      activeMainPopup: true,
    };
  },

  methods: {
    hidePopup() {
      this.activeMainPopup = false;
      this.$store.dispatch("form/updatePopup", false);
    },
  },

  created() {},
};
</script>

<style lang="scss"></style>
