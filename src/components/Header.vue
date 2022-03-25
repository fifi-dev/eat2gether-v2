<template>
  <header class="text-gray-100 bg-gray-900 body-font shadow w-full">
    <div
      class="container mx-auto flex flex-wrap px-5 py-2 flex-col md:flex-row items-center"
    >
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <router-link
          class="mr-5 text-gray-100 hover:text-gray-300 cursor-pointer border-b border-transparent hover:border-indigo-600"
          to="/"
          >Home</router-link
        >
        <a
          class="mr-5 text-gray-100 hover:text-gray-300 cursor-pointer border-b border-transparent hover:border-indigo-600"
          >New product</a
        >
        <a
          class="mr-5 text-gray-100 hover:text-gray-300 cursor-pointer border-b border-transparent hover:border-indigo-600"
          >Account</a
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
        <a
          href="https://www.buymeacoffee.com/pazlydev"
          class="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg"
        >
          Sign out
        </a>
      </div>
    </div>
  </header>
</template>
