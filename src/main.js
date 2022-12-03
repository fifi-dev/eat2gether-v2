import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';
import 'leaflet/dist/leaflet.css';
import './assets/css/style.css'


// bdd supabase

import { supabase } from './supabase';

Vue.config.productionTip = false;
Vue.prototype.$supabase = supabase;
//moment formatDate
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm a');
  }
});

//only hour

Vue.filter('onlyHour', function (value) {
  if (value) {
    return moment(String(value)).format("HH:mm");
  }
});

//test
const shared = {
  message: "my global message"
}

//console.log (shared);

shared.install = function(){
  Object.defineProperty(Vue.prototype, '$myGlobalStuff', {
    get () { return shared }
  })
}

Vue.use(shared);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
