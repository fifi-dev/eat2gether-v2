<template>
  <div class="home">
    <div class="h-screen flex items-center justify-center">
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
