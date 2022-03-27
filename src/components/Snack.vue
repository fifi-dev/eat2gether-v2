<template>
  <div
    v-if="snack"
    class="snack fixed z-40 py-10 px-20 right-10 bottom-5 bg-red-600 text-white"
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
