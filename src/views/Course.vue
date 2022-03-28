<template>
  <div
    class="min-w-screen min-h-screen flex items-center lg:p-10 overflow-hidden relative"
  >
    <div
      class="w-full max-w-6xl rounded bg-white shadow-xl p-5 lg:p-20 mx-auto text-gray-800 relative md:text-left"
    >
      <div class="md:flex items-center -mx-10">
        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <div class="relative">
            <img
              v-bind:src="course.img_url"
              class="w-full relative z-10"
              alt=""
            />
            <div
              class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"
            ></div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-5">
          <div class="mb-10">
            <h1 class="font-bold uppercase text-2xl mb-5 text-pink-400">
              {{ course.name }}<br />With {{ course.teacher }}
            </h1>
            <p class="text-sm">
              {{ course.description }}
            </p>
          </div>
          <div>
            <p>Start date : {{ course.start_at | formatDate }}</p>
            <p>End date : {{ course.end_at | formatDate }}</p>
          </div>
          <button
            v-if="userInfo.role == 'teacher'"
            class="flex justify-right items-center bg-gray-600 text-white px-4 py-3 mt-8 focus:outline-none hover:bg-blue-600 hover:text-white"
            @click="goTo('updateCourse')"
          >
            Edit Course
          </button>
        </div>
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
  data() {
    return {
      userInfo: {},
      course: {},
    };
  },
  mounted() {
    this.UserInfo();
    this.getCourse();
  },
  methods: {
    ...mapActions({
      snack: 'snack/snack',
    }),
    goTo(name) {
      this.$router.push({ name: name });
    },
    async getCourse() {
      const { data, error } = await this.$supabase
        .from('courses')
        .select()
        .match({ id: this.$route.params.id })
        .single();
      if (data) {
        this.course = data;
        this.snack(error);
      } else {
        this.snack(error);
      }
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
