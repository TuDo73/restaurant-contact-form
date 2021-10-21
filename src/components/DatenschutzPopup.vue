<template>
  <div class="popup-common" v-if="isActiveDatenschutzPopup">
    <div class="popup-overlay"></div>
    <div class="popup-content">
      <div class="popup-content-wrap">
        <div class="popup-heading">
          Datenschutzbestimmungen und Nutzungsbedingungen
        </div>
        <div class="popup-text">
          Diese Webseite ist durch reCAPTCHA geschützt, es gelten die
          <a href="https://policies.google.com/privacy"
            >Datenschutzbestimmungen</a
          >
          und
          <a href="https://policies.google.com/terms">Nutzungsbedingungen</a>
          von Google
        </div>
        <div class="popup-heading">
           Hinweise zum Datenschutz
           gemäß Art. 13 Datenschutz-Grundverordnung (DSGVO) 
           zur verpflichtenden Kontaktnachverfolgung im Sinne der
           SARS-CoV-2-Infektionsschutzverordnung.
        </div>
        <div class="popup-text">
          <p>
            Zum Zweck der Kontaktnachverfolgung und der Nachvollzieh-barkeit von Infektionsketten für den Fall, dass im zeitlichen oder örtlichen Zusammenhang Ihres Besuchs ein Fall einer SARS-CoV-2-Infektion auftreten sollte, erheben wir die folgenden personen¬bezogenen Daten von Ihnen: Vor- und Familienname, vollständige Anschrift oder E-Mail-Adresse, Telefonnummer, Bezirk oder Gemeinde des Wohnortes oder des Ortes des ständigen Aufenthalts, Anwesenheitszeit, Platz – und Tischnummer (sofern vorhanden).
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO i.V.m. § 5 SARS-CoV-2-Infektionsschutzmaßnahmenverordnung. Die verfolgten berechtigten Interessen sind der Schutz unserer Kundinnen und Kunden, der Schutz von deren Kontaktpersonen und der Schutz der Allgemeinheit. Ihre Daten werden ausschließlich zum oben genannten Zweck und nicht für andere Zwecke wie beispielsweise Werbung verarbeitet. Ihre Daten werden ausschließlich im Falle einer SARS-CoV-2-Infektion im zeitlichen oder örtlichen Zusammenhang mit Ihrem Besuch bei uns zum Zweck der Kontaktnachverfolgung an das zuständige Gesundheitsamt übermittelt.
          </p>
          <p>
            Die Kontaktdaten sind auf Verlangen der zuständigen Behörde (Gesundheitsamt) zu übermitteln, sofern dies zur Nachverfolgung von möglichen Infektionswegen erforderlich ist.
          </p>
          <p>
            Die Kontaktdaten werden für einen Zeitraum von 4 Wochen aufbewahrt und dann vernichtet.
          </p>
          <p>
            Wir sind gehalten, Ihre Anwesenheit im oben genannten Umfang zu dokumentieren. Vor diesem Hintergrund erhalten Sie nur dann Zutritt zu unseren Räumen, wenn Sie an der Dokumentation mitwirken. Als von dieser Datenverarbeitung betroffene Person stehen Ihnen die Betroffenenrechte der DSGVO zu, insbesondere haben Sie ein Recht auf Auskunft über Ihre Daten sowie auf deren Berichtigung, Löschung oder eine Einschränkung der Verarbeitung. Außerdem können Sie sich bei einer Aufsichtsbehörde, zum Beispiel der Berliner Beauftragten für Datenschutz und Informationsfreiheit (datenschutz-berlin.de), beschweren. Sie haben zudem das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.
          </p>
          <p>
            Verantwortlicher ist
          </p>
          <p>
            {{ companyInfo.restaurant_name }}
            <br />
            {{ companyInfo.restaurant_address }}
            <br />
            {{ companyInfo.restaurant_name_extend }}
            <br />
            Telefon: {{ companyInfo.restaurant_phone }}
          </p>
          <p>
            Vertretungsberechtigte Geschäftsführer
            <br />
            {{ companyInfo.restaurant_director }}
            <br />
            St.-Nr.: {{ companyInfo.restaurant_tax_number }}
          </p>
        </div>
      </div>

      <div class="popup-btn" @click="hidePopup()">
        Zurück zum Formular
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
      isActiveDatenschutzPopup: (state) => state.form.isActiveDatenschutzPopup,
      companyInfo: (state) => state.company.companyInfo,
    }),
  },

  data() {
    return {};
  },

  methods: {
    hidePopup() {
      this.$store.dispatch("form/updatePopupDatenschutz", false);
    },
  },

  created() {},
};
</script>

<style lang="scss"></style>
