<template>
  <div class="px-6 py-4">
    <!-- Rating and Review Count -->
    <div class="flex items-center mb-6">
      <span class="text-2xl font-semibold">⭐ 4.6 course rating</span>
      <span class="text-lg text-gray-600 ml-2">• 6K ratings</span>
    </div>

    <!-- Reviews -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Review 1 -->
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex items-center mb-4">
          <div
            class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <span class="font-bold">HM</span>
          </div>
          <div class="ml-4">
            <h3 class="font-semibold">Harshal M.</h3>
            <span class="text-sm text-gray-500">2 weeks ago</span>
          </div>
        </div>
        <p class="text-gray-800 mb-4">
          This course is great not only for the exam but also for the extra
          knowledge that Ranga sir provides along with it. Thank you Ranga sir.
          Keep making more new courses and keep contributing to AWS courses.
        </p>
        <div class="flex items-center space-x-4">
          <button class="text-sm text-gray-500 hover:text-gray-700">
            Helpful?
          </button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👍</button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👎</button>
        </div>
      </div>

      <!-- Review 2 -->
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex items-center mb-4">
          <div
            class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <span class="font-bold">U</span>
          </div>
          <div class="ml-4">
            <h3 class="font-semibold">Udemy User</h3>
            <span class="text-sm text-gray-500">a month ago</span>
          </div>
        </div>
        <p class="text-gray-800 mb-4">
          Seems to be a good general overview of all services available via AWS
          and how to use them effectively and affordably.
        </p>
        <div class="flex items-center space-x-4">
          <button class="text-sm text-gray-500 hover:text-gray-700">
            Helpful?
          </button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👍</button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👎</button>
        </div>
      </div>

      <!-- Review 3 -->
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex items-center mb-4">
          <div
            class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <span class="font-bold">YR</span>
          </div>
          <div class="ml-4">
            <h3 class="font-semibold">Yogeshwar R.</h3>
            <span class="text-sm text-gray-500">2 months ago</span>
          </div>
        </div>
        <p class="text-gray-800 mb-4">
          Ranga is one of my favorite Indian instructors of all time. His
          step-by-step approach is very useful when trying to grasp complex
          topics. I always suggest his courses to my...
        </p>
        <div class="flex items-center space-x-4">
          <button class="text-sm text-gray-500 hover:text-gray-700">
            Helpful?
          </button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👍</button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👎</button>
        </div>
      </div>

      <!-- Review 4 -->
      <div class="bg-white border p-4 rounded-lg">
        <div class="flex items-center mb-4">
          <div
            class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full"
          >
            <span class="font-bold">AB</span>
          </div>
          <div class="ml-4">
            <h3 class="font-semibold">Anand B.</h3>
            <span class="text-sm text-gray-500">5 months ago</span>
          </div>
        </div>
        <p class="text-gray-800 mb-4">
          Very good coverage of topics. Very well explained in simple language.
        </p>
        <div class="flex items-center space-x-4">
          <button class="text-sm text-gray-500 hover:text-gray-700">
            Helpful?
          </button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👍</button>
          <button class="text-sm text-gray-500 hover:text-gray-700">👎</button>
        </div>
      </div>
    </div>

    <!-- Show All Reviews Button -->
    <div class="mt-6">
      <button class="text-blue-600 font-semibold hover:underline">
        Show all reviews
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseReviews",
};
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
