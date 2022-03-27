<template>
  <div
    v-if="snack"
    class="snack fixed z-40 py-5 px-10 right-10 bottom-5 bg-gray-600 border-2 border-blue-400 text-white"
  >
    {{ snack }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      snack: 'snack/snack',
    }),
  },
};
</script>
