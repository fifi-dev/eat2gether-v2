<template>
  <div class="h-screen flex">
    <div
      class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center"
    >
      <div>
        <a
          class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center ml-4 mb-4 md:mb-0"
        >
          <img
            src="https://pazly.dev/logo.png"
            style="height: 40px; margin-top: 10px; margin-bottom: 10px"
            alt="logo"
          />

          <span class="ml-3 text-white text-xl">Portal</span>
        </a>

        <p class="text-white text-left mt-1">
          The best school portal for students and teachers. <br />if you already
          have an account:
        </p>
        <button
          type="submit"
          class="block w-28 bg-white text-indigo-800 mt-4 py-2 font-bold mb-2"
        >
          Sign In
        </button>
      </div>
    </div>
    <div class="flex w-1/2 justify-center items-center bg-white">
      <div class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Register</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Good to see you !</p>
        <!-- error message -->
        <div class="bg-red-600 mx-4 text-white p-5" v-if="errorMsg">
          <p>{{ errorMsg }}</p>
        </div>
        <!-- Email -->
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
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
            type="text"
            name="email"
            required
            id="email"
            v-model="email"
            placeholder="Email Address"
          />
        </div>
        <!-- password -->
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
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
        <!--  confirm password -->
        <!--  <div class="flex items-center border-2 py-2 px-3 mt-4 rounded-2xl">
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
            name="confirmPassword"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="confirm password"
          />
        </div> -->
        <!-- btn submit -->
        <button
          @click="signUp()"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          Sign Up
        </button>
        <router-link to="/sign-in">
          You already have an account ?
          <span class="text-green text-bold"> Sign In</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMsg: '',
    };
  },
  methods: {
    async signUp() {
      const { user, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (user) {
        console.log(user);
      } else {
        console.log(error);
      }
    },
  },
};
</script>
