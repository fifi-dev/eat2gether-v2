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
            <h1 class="font-bold uppercase text-2xl mb-5">
              {{ course.name }}<br />With {{ course.teacher }}
            </h1>
            <p class="text-sm">
              {{ course.description }}
            </p>
          </div>
          <div>
            <p>Start date : {{ course.start_at }}</p>
            <p>Start date : {{ course.end_at }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    Snack,
  },
  data() {
    return {
      course: {},
    };
  },
  mounted() {
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
        console.log(data);
      } else {
        console.log(error);
      }
    },
  },
};
</script>
