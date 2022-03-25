<template>
  <!-- Card -->
  <card class="bg-gray-800 rounded-lg w-72 ml-12">
    <!-- Header -->
    <div class="grid grid-cols-3 bg-white text-black items-center px-5 py-3">
      <!-- Header Title -->
      <div class="col-span-2 flex flex-row gap-3">
        <svg
          class="h-6 fill-current hover:text-gray-100"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vue.js icon</title>
          <path
            d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608"
          />
        </svg>
        <p>{{ data.name }}</p>
      </div>

      <!-- Delete Button -->
      <div class="flex justify-end">
        <button class="rounded-full hover:bg-red-700 delay-50 duration-100 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M8 9h8v10H8z" opacity=".3"></path>
            <path
              d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="text-gray-200 font-light">
      <p class="delay-50 duration-100 p-2 rounded-lg my-4 mx-3">
        <span class="font-semibold">{{ data.name }}</span> course with
        <span class="font-semibold">{{ data.teacher }}</span>
      </p>
    </div>

    <!-- Footer -->
    <div class="grid grid-cols-3 items-center px-5 py-3">
      <!-- Course Date-->
      <div class="col-span-2 flex text-gray-500 flex-row gap-3">
        <p>{{ data.start_at }}</p>
      </div>

      <!-- Details Button -->
      <div class="flex justify-center">
        <button
          class="bg-blue-500 delay-50 duration-100 px-3 py-1 text-gray-200"
        >
          Details
        </button>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  props: {
    data: Object,
  },
};
</script>
