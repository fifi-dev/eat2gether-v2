<template>
  <header
    class="fixed top-0 z-40 text-gray-100 bg-gray-900 body-font shadow w-full"
  >
    <div
      class="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center"
    >
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <router-link
          class="mr-5 text-gray-100 hover:text-green-300 cursor-pointer"
          to="/"
          >Home</router-link
        >
        <router-link
          class="mr-5 text-gray-100 hover:text-green-300 cursor-pointer"
          to="/new-course"
          >Add Course</router-link
        >
        <router-link
          class="mr-5 text-gray-100 hover:text-green-300 cursor-pointer"
          to="/account"
          >Account</router-link
        >
      </nav>
      <a
        class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0"
      >
        <img
          src="https://pazly.dev/logo.png"
          style="height: 40px; margin-top: 10px; margin-bottom: 10px"
          alt="logo"
        />

        <span class="ml-3 text-xl">Portal</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button
          @click="signOut"
          class="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg"
        >
          Sign out
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    async signOut() {
      const { error } = await this.$supabase.auth.signOut();
      location.reload();

      if (error) {
        console.log(error);
      }
    },
  },
};
</script>
