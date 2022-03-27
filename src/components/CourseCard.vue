<template>
  <!-- Card -->
  <div class="bg-gray-800 rounded-lg w-72 h-56 mx-6 md:mb-6">
    <!-- Header -->
    <div class="grid grid-cols-3 bg-white text-black items-center px-5 py-3">
      <!-- Header Title -->
      <div class="col-span-2 flex flex-row gap-3">
        <svg
          class="h-6 fill-current hover:text-gray-100"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vue.js icon</title>
          <path
            d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608"
          />
        </svg>
        <p>{{ data.name }}</p>
      </div>

      <!-- Delete Button -->
      <div class="flex justify-end" v-if="userInfo.role == 'teacher'">
        <button
          class="rounded-full hover:bg-red-400 delay-50 duration-100 p-1"
          @click="$emit('on-delete')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M8 9h8v10H8z" opacity=".3"></path>
            <path
              d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="text-gray-200 font-light">
      <p class="delay-50 duration-100 p-2 rounded-lg my-4 mx-3">
        <span class="font-semibold">{{ data.name }}</span> course with
        <span class="font-semibold">{{ data.teacher }}</span>
      </p>
    </div>

    <!-- Footer -->
    <div class="grid grid-cols-3 items-center px-5 py-3">
      <!-- Course Date-->
      <div class="col-span-2 flex text-gray-500 flex-row gap-3">
        <p>{{ data.start_at | formatDate }}</p>
      </div>

      <!-- Details Button -->
      <div class="flex justify-center">
        <button
          class="bg-blue-500 delay-50 duration-100 px-3 py-1 text-gray-200"
          @click="goTo('courseDetail')"
        >
          Details
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { supabase } from '../supabase';

import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    Snack,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    this.UserInfo();
  },
  methods: {
    ...mapActions({
      snack: 'snack/snack',
    }),
    goTo(name) {
      this.$router.push({
        name: name,
        params: {
          id: this.data.id,
        },
      });
    },
    async UserInfo() {
      let user = await supabase.auth.user();
      const { data, error } = await this.$supabase
        .from('users')
        .select()
        .match({ auth_id: user.id })
        .single();
      if (data) {
        this.userInfo = data;
      } else {
        this.snack(error);
      }
    },
  },
};
</script>
