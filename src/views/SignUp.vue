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
          @click="goTo('signIn')"
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
        <p class="text-sm font-normal text-gray-600 mb-7">Ravi de vous revoir !</p>
        <!-- error message -->
        <div class="bg-red-600 mx-4 text-white p-5" v-if="errorMsg">
          <p>{{ errorMsg }}</p>
        </div>
        <!-- avatar -->
        <label for="" class="block mb-1 text-gray-600 text-start font-semibold">Avatar <span>(selectionnez)</span></label>
        <div class="overflow-x-auto">
            <div class="grid w-[20rem] grid-cols-6 space-x-2 rounded-xl  p-2" x-data="app">
                <!--Img 1-->
                <div>
                    <input 
                    type="radio" 
                    name="option" 
                    value="/img/blue_uMarker.png" 
                    id="1" 
                    v-model="iconUrl"
                    class="peer hidden" 
                    checked />
                    <label
                        for="1"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                        <img src="../assets/img/blue_uMarker.png" class="m-auto w-12" alt="User Avatar"/>
                        </label
                    >
                </div>
                <!--Img 2-->
                <div>
                    <input 
                    type="radio" 
                    name="option" 
                    value="/img/gray_uMarker.png" 
                    id="2" 
                    v-model="iconUrl"
                    class="peer hidden" />
                    <label
                        for="2"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                        <img src="../assets/img/gray_uMarker.png" class="m-auto w-12" alt="User Avatar"/>
                        </label
                    >
                </div>
                <!--Img 3-->
                <div>
                    <input 
                    type="radio" 
                    name="option" 
                    value="/img/green_uMarker.png" 
                    id="3" 
                    v-model="iconUrl"
                    class="peer hidden" />
                    <label
                        for="3"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                        <img src="../assets/img/green_uMarker.png" class="m-auto w-12" alt="User Avatar"/>
                        </label
                    >
                </div>
                <!--Img 4-->
                <div>
                    <input 
                    type="radio" 
                    name="option" 
                    value="/img/pink_uMarker.png" 
                    id="4" 
                    v-model="iconUrl"
                    class="peer hidden" />
                    <label
                        for="4"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                        <img src="../assets/img/pink_uMarker.png" class="m-auto w-12" alt="User Avatar"/>
                        </label
                    >
                </div>
                <!--Img 5 -->
                <div>
                    <input 
                    type="radio" 
                    name="option" 
                    value="/img/purple_uMarker.png" 
                    v-model="iconUrl"
                    id="5" class="peer hidden" />
                    <label
                        for="5"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                    <img src="../assets/img/purple_uMarker.png" class="m-auto w-12" alt="User Avatar"/>
                        </label
                    >
                </div>
                <!--Img 6-->
                <div>
                    <input 
                    type="radio" 
                    name="option" 
                    value="/img/yellow_uMarker.png" 
                    id="6" 
                    v-model="iconUrl"
                    class="peer hidden" />
                    <label
                        for="6"
                        class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                        >
                    <img src="../assets/img/yellow_uMarker.png" class="m-auto w-12" alt="User Avatar"/>
                        </label
                    >
                </div>
            </div>
        </div>
        <!-- First Name -->
        <div class="flex items-center border-2 py-2 px-3 mb-4">
          <input
            class="pl-2 outline-none border-none"
            type="text"
            name="first_name"
            required
            id="first_name"
            v-model="first_name"
            placeholder="First Name"
          />
        </div>
        <!-- First Name -->
        <div class="flex items-center border-2 py-2 px-3 mb-4">
          <input
            class="pl-2 outline-none border-none"
            type="text"
            name="last_name"
            required
            id="last_name"
            v-model="last_name"
            placeholder="Last Name"
          />
        </div>
        <!-- Email -->
        <div class="flex items-center border-2 py-2 px-3 mb-4">
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
        <!--  select password -->
        <div class="py-2 mt-4">
          <select
            v-model="role"
            class="w-full bg-gray-100 py-2 pl-2"
            name="role"
            id="role"
          >
            <option class="" value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <!--  select password -->
        <div class="py-2 mt-4">
          <label for="restaurants"> Restaurant </label>
          <select 
          v-model="restaurant_id"
          id="restaurants" 
          class="bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option 
              :key="'restaurant-' + restaurant.id"
              v-for="restaurant in restaurants"  
              v-bind:value="restaurant.id">{{ restaurant.name }}</option>
          </select>
        </div>
        <!-- btn submit -->
        <button
          @click="signUp()"
          class="block w-full bg-indigo-600 mt-4 py-2 text-white font-semibold mb-2"
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
import user_data from '../store';
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';
export default {
  name: 'SignUp',
  components: {
    Snack,
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      role: '',
      restaurant_id: '',
      iconUrl: '',
      email: '',
      password: '',
      errorMsg: '',
      restaurants: [],
    };
  },
  mounted() {
      this.getAllRestaurants();
  },
  methods: {
    async getAllRestaurants() {
        const { data, error } = await this.$supabase.from('restaurants').select();
        if (data) {
        this.restaurants = data;
        } else {
        console.log(error);
        }
    },
    ...mapActions({
      snack: 'snack/snack',
    }),
    goTo(name) {
      this.$router.push({ name: name });
    },
    async signUp() {
      const { user, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      const { data } = await this.$supabase.from('users').insert({
        first_name: this.first_name,
        last_name: this.last_name,
        role: this.role,
        auth_id: user.id,
        restaurant_id: this.restaurant_id,
        iconUrl : this.iconUrl,

      });
      if (user) {
        this.snack('connected successfully with : ' + user.email);
        this.goTo('home');
      } else {
        this.snack(error);
      }
    },
  },
};
</script>
