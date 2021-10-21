import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import smoothscroll from "smoothscroll-polyfill";
import firebase from 'firebase';

smoothscroll.polyfill();
Vue.config.productionTip = false;

Vue.use(require("vue-moment"));

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),

  created (){
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyAiTL2PLLyoENtF4eHYzk6RwFpEC7CeheQ",
      authDomain: "vietpho-ef78e.firebaseapp.com",
      databaseURL: "https://vietpho-ef78e.firebaseio.com",
      projectId: "vietpho-ef78e",
      storageBucket: "vietpho-ef78e.appspot.com",
      messagingSenderId: "559470275080",
      appId: "1:559470275080:web:76bf76d7a7bf0245e93fbd",
      measurementId: "G-3HKJ54SLF0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}).$mount("#app");
