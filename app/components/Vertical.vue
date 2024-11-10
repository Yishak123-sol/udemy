<template>
  <div
    class="w-full max-w-md mx-auto border rounded-lg shadow-lg overflow-hidden"
  >
    <!-- Course Preview Section -->
    <div class="bg-gradient-to-b from-green-400 to-yellow-400 p-4 relative">
      <img
        src="https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg"
        alt="Course Preview"
        class="w-full h-48 object-cover rounded-lg"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-white rounded-full p-2 text-xl text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="44px"
            viewBox="0 -960 960 960"
            width="44px"
            fill="black"
          >
            <path
              d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Subscription Information -->
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Subscribe to Udemy’s top courses</h2>
        <button
          class="bg-purple-500 text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-purple-600"
        >
          Try Personal Plan for free
        </button>
      </div>
      <p class="text-sm text-gray-600 mb-2">
        Get this course, plus 12,000+ of our top-rated courses, with Personal
        Plan. <a href="#" class="text-blue-600 underline">Learn more</a>
      </p>
      <p class="text-sm text-gray-800 font-bold mb-4">
        Starting at $10.00 per month after trial<br />Cancel anytime
      </p>

      <!-- Price Section -->
      <div class="text-center my-4">
        <span class="text-2xl font-semibold">$74.99</span>
      </div>
      <button
        class="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold mb-4 hover:bg-gray-800"
      >
        Add to cart
      </button>

      <!-- Additional Information -->
      <p class="text-center text-sm text-gray-500 mb-4">
        30-Day Money-Back Guarantee<br />Full Lifetime Access
      </p>

      <!-- Actions -->
      <div class="flex justify-center space-x-4 mb-4 text-sm">
        <button class="text-blue-600 hover:underline">Share</button>
        <button class="text-blue-600 hover:underline">Gift this course</button>
        <button class="text-blue-600 hover:underline">Apply Coupon</button>
      </div>

      <!-- Coupon Section -->
      <div class="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <p class="text-sm mb-2">
          <span class="font-semibold">LETSLEARNNOW</span> is applied
        </p>
        <div class="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter Coupon"
            class="flex-grow border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            class="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// In case you need any setup
</script>

<style scoped>
/* Any custom styling you need to add specifically for this component */
</style>
