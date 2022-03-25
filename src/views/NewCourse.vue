<template>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="font-semibold text-xl text-gray-700">
              <h2 class="">Add an new course</h2>
            </div>
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-3 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <!-- COURSE NAME -->
              <div class="flex flex-col">
                <label class="leading-loose text-left"> Name</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Event title"
                />
              </div>

              <div class="flex flex-col">
                <label class="leading-loose text-left"> Teacher</label>
                <select
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  name="teacher"
                  id="teachert"
                >
                  <option value="">Teacher</option>
                  <option value="dog">Pierre GRIMAUD</option>
                  <option value="cat">Quentin GUERRIER</option>
                </select>
              </div>
              <!-- IMG URL -->
              <div class="flex flex-col">
                <label class="leading-loose text-left my-1">Image URL</label>
                <input
                  type="text"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Optional"
                />
              </div>
              <div class="flex items-center space-x-4">
                <!-- START DATE -->
                <div class="flex flex-col">
                  <label class="leading-loose text-left my-1">Start</label>
                  <div
                    class="relative focus-within:text-gray-600 text-gray-400"
                  >
                    <input
                      type="date"
                      class="px-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/02/2020"
                    />
                  </div>
                </div>
                <!-- END DATE -->
                <div class="flex flex-col">
                  <label class="leading-loose text-left my-1">End</label>
                  <div
                    class="relative focus-within:text-gray-600 text-gray-400"
                  >
                    <input
                      type="date"
                      class="px-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="26/02/2020"
                    />
                  </div>
                </div>
              </div>
              <!-- DESCRIPTION -->
              <div class="flex flex-col">
                <label class="leading-loose text-left my-1"
                  >Event Description</label
                >
                <textarea
                  id="description"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Optional"
                ></textarea>
              </div>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button
                class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
              >
                <svg
                  class="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>
              <button
                class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
