import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyD8jp_oRzrGCcFwqCDrdhT8vpStrkxNpf0",
  authDomain: "portoflio-4d671.firebaseapp.com",
  projectId: "portoflio-4d671",
  storageBucket: "portoflio-4d671.appspot.com",
  messagingSenderId: "1079108386270",
  appId: "1:1079108386270:web:fc35ee0fd9ac72b6d2b14f",
  measurementId: "G-RDJYE77FDR"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
