<template>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
      >
        <div v-if="userInfo.role !== 'teacher'" class="max-w-md mx-auto">
          <p>Only Teacher can access this page</p>
        </div>
        <div v-else class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="font-semibold text-xl text-gray-700">
              <h2 class="">
                {{
                  $route.name == 'updateCourse'
                    ? 'Update Course'
                    : 'Add an new course'
                }}
              </h2>
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
                  name="name"
                  id="name"
                  autocomplete="name"
                  v-model="course.name"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Vue.js"
                />
              </div>
              <!-- Teacher NAME -->
              <div class="flex flex-col">
                <label class="leading-loose text-left"> Teacher</label>
                <!--  <select
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  name="teacher"
                  id="teachert"
                >
                  <option value="">Teacher</option>
                  <option value="dog">Pierre GRIMAUD</option>
                  <option value="cat">Quentin GUERRIER</option>
                </select> -->

                <input
                  type="text"
                  name="teacher"
                  id="teacher"
                  v-model="course.teacher"
                  autocomplete="name"
                  placeholder="Marine dupont"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                />
              </div>
              <!-- IMG URL -->
              <div class="flex flex-col">
                <label class="leading-loose text-left my-1">Image URL</label>
                <input
                  id="img_url"
                  name="img_url"
                  type="text"
                  v-model="course.img_url"
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
                      name="start_at"
                      id="start_at"
                      v-model="course.start_at"
                      class="px-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/03/2022"
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
                      name="end_at"
                      id="end_at"
                      v-model="course.end_at"
                      class="px-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="25/03/2022"
                    />
                  </div>
                </div>
              </div>
              <!-- DESCRIPTION -->
              <div class="flex flex-col">
                <label class="leading-loose text-left my-1"> Description</label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  v-model="course.description"
                  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder="Optional"
                ></textarea>
              </div>
            </div>
            <!-- Cancel & SAVE -->
            <div class="pt-4 flex items-center space-x-4">
              <button
                class="flex justify-center items-center w-full text-red-900 px-4 py-3 rounded-md focus:outline-none hover:bg-red-400 hover:text-white"
                @click="goTo('home')"
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
                v-if="$route.name == 'updateCourse'"
                class="bg-green-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                @click="update()"
              >
                Update Course
              </button>
              <button
                v-else
                class="bg-green-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                @click="submit()"
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Snack from '@/components/Snack.vue';
import { mapActions } from 'vuex';
import { supabase } from '../supabase';

export default {
  components: {
    Snack,
  },
  data() {
    return {
      course: {
        name: '',
        teacher: '',
        description: '',
        img_url: '',
        start_at: '',
        end_at: '',
      },
      userInfo: {},
      teacher: 'teacher',
    };
  },
  mounted() {
    if (this.$route.name == 'updateCourse') {
      this.getCourse();
    }
    this.UserInfo();
  },
  methods: {
    ...mapActions({
      snack: 'snack/snack',
    }),
    goTo(name) {
      this.$router.push({ name: name });
    },

    async update() {
      const { data, error } = await this.$supabase
        .from('courses')
        .update(this.course)
        .match({ id: this.$route.params.id });
      if (data) {
        this.$router.push({ name: 'Courses' });
      } else {
        this.snack(error);
      }
    },
    async submit() {
      const { data, error } = await this.$supabase
        .from('courses')
        .insert(this.course);
      if (data) {
        this.goTo('home');
      } else {
        this.snack(error);
      }
    },

    async getCourse() {
      const { data, error } = await this.$supabase
        .from('courses')
        .select()
        .match({ id: this.$route.params.id })
        .single();
      if (data) {
        this.course = data;
        console.log(data);
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
        console.log(data);
      } else {
        console.log(error);
      }
    },
  },
};
</script>
