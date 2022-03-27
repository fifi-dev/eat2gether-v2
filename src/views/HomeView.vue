<template>
  <div class="home">
    <div class="h-screen flex flex-wrap items-center justify-center">
      <CourseCard
        :data="course"
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

export default {
  name: 'HomeView',
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    this.getAllCourses();
  },
  methods: {
    async deleteCourse(courseId) {
      const { data, error } = await this.$supabase
        .from('courses')
        .delete()
        .eq('id', courseId);
      if (data) {
        this.courses = data;
        location.reload();
      } else {
        console.log(error);
      }
    },
    async getAllCourses() {
      const { data, error } = await this.$supabase.from('courses').select();
      if (data) {
        this.courses = data;
      } else {
        console.log(error);
      }
    },
  },
};
</script>
