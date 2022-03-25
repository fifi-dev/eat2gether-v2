<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="h-screen flex items-center justify-center bg-gray-900">
      <CourseCard />
      <CourseCard />
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
};
</script>
