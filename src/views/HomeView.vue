<template>
  <div class="home">
    <div class="h-screen flex flex-wrap items-center justify-center">
      <CourseCard
        :data="course"
        :user="userInfo"
        :key="'course-' + course.id"
        @on-delete="deleteCourse(course.id)"
        v-for="course in courses"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseCard from '@/components/CourseCard.vue';
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Snack,
    CourseCard,
  },
  data() {
    return {
      courses: [],
      userInfo: {},
    };
  },
  mounted() {
    this.getAllCourses();
  },
  methods: {
    ...mapActions({
      snack: 'snack/snack',
    }),
    async deleteCourse(courseId) {
      const { data, error } = await this.$supabase
        .from('courses')
        .delete()
        .eq('id', courseId);
      if (data) {
        this.courses = data;
        location.reload();
      } else {
        this.snack(error);
      }
    },
    async getAllCourses() {
      const { data, error } = await this.$supabase.from('courses').select();
      if (data) {
        this.courses = data;
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
        console.log(data);
        this.userInfo = data;
      } else {
        console.log(error);
      }
    },
  },
};
</script>
