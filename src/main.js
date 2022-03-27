import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';

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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
