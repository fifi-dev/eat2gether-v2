<template>
  <div id="app">
    <Header v-if="!$route.meta.hideNavbar" /> 
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!--  <button class="p-4 fixed left-0 top-20" @click.prevent="doSomething">
      Trigger Snack
    </button>-->
    <Snack />
    <router-view />
    <div class="absolute z-10 text-sm bottom-4 right-4">
      <p class="text-indigo-50 bg-gradient-to-br from-blue-600 to-indigo-600 p-2">Tous droits réservés © 2022 - Fideline BAZANA NTOMO </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    Header,
    Snack,
  },
  methods: {
    ...mapActions({
      snack: 'snack/snack',
    }),
    doSomething() {
      this.snack('This is a snack');
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: #0d1720;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
