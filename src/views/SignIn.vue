<template>
  <div class="h-screen flex">
    <div
      class="flex w-1/2 bg-gradient-to-tr from-blue-900 to-gray-900 i justify-around items-center"
    >
      <div>
        <a
          class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center ml-4 mb-4 md:mb-0"
        >
        <img
          class="w-40 mb-6"
          src="../assets/img/logo_white.png"
          alt="logo"
        />
        </a>

        <p class="text-white text-left mt-1">
          The best school portal for students and teachers. <br />If you don't
          have an account you can :
        </p>
        <button
          @click="goTo('signUp')"
          type="submit"
          class="block w-28 bg-white text-indigo-800 mt-4 py-2 font-bold mb-2"
        >
          Sign up
        </button>
      </div>
    </div>
    <div class="flex w-1/2 justify-center items-center bg-white">
      <div class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Login</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back !</p>
        <!-- Email -->
        <div class="flex items-center border-2 py-2 px-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            class="pl-2 outline-none border-none"
            type="email"
            name="email"
            required
            id="email"
            v-model="email"
            placeholder="Email Address"
          />
        </div>
        <!-- password -->
        <div class="flex items-center border-2 py-2 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="pl-2 outline-none border-none"
            type="password"
            name="password"
            id="password"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <!-- btn submit -->
        <button
          @click="signIn()"
          class="block w-full bg-indigo-600 mt-4 py-2 text-white font-semibold mb-2"
        >
          Sign In
        </button>
        <router-link to="/sign-up">
          Don't have an account ?
          <span class="text-green text-bold"> Sign Up</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';
export default {
  name: 'SignIn',
  components: {
    Snack,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    ...mapActions({
      snack: 'snack/snack',
    }),
    goTo(name) {
      this.$router.push({ name: name });
    },

    async signIn() {
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (user) {
        this.snack('connected successfully with : ' + user.email);
        this.goTo('rooms');
      } else {
        this.snack(error);
      }
    },
  },
};
</script>
