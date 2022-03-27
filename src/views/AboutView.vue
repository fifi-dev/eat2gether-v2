<template>
  <div class="h-screen flex flex-wrap items-center justify-center">
    <div
      class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white shadow-lg transform duration-200 easy-in-out"
    >
      <div class="h-32 overflow-hidden">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1636145173408-cdca414270f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHduenBMeHMwblFZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="header Img"
        />
      </div>
      <div class="flex justify-center px-5 -mt-12">
        <img
          class="h-32 w-32 bg-white p-2 rounded-full"
          v-bind:src="userInfo.img_url"
          alt="profile image"
        />
      </div>
      <div class=" ">
        <div class="text-center px-14">
          <h2 class="text-gray-800 text-3xl font-bold">
            {{ userInfo.first_name }} {{ userInfo.last_name }}
          </h2>
          <p class="text-gray-400 mt-2">you are a {{ userInfo.role }}</p>
        </div>
        <hr class="mt-6" />
        <div class="flex bg-gray-50">
          <div
            class="text-center w-1/2 bg-red-100 p-4 hover:bg-red-300 cursor-pointer"
          >
            <button>Sign out</button>
          </div>
          <div class="border"></div>
          <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
            <button>Edit profile</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '../supabase';

export default {
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    this.UserInfo();
  },
  methods: {
    async UserInfo() {
      let user = await supabase.auth.user();

      const { data, error } = await this.$supabase
        .from('users')
        .select()
        .match({ auth_id: user.id })
        .single();
      if (data) {
        console.log(data);
        this.userInfo = data;
      } else {
        console.log(error);
      }
    },
  },
};
</script>
