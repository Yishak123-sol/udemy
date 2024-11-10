<template>
  <div
    class="relative bg-purple-700 text-white px-4 py-2 text-sm font-semibold"
  >
    <span
      >Ready to get with the times? | Get the skills with Udemy Business.</span
    >
    <button
      @click="closeBanner"
      class="absolute right-4 top-2 text-white hover:text-gray-200"
    >
      &times;
    </button>
  </div>

  <div class="flex items-center justify-between px-6 py-4 bg-white shadow-md">
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-1 text-gray-900 text-lg font-bold">
        <img src="/udemy-logo.svg" alt="Udemy Logo" class="w-20 h-20" />
      </div>
      <button class="text-sm font-medium text-gray-600">Categories</button>
    </div>

    <div class="flex-grow max-w-md mx-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search for anything"
          class="w-full px-4 py-2 text-sm border rounded-lg bg-gray-100 focus:outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute top-1/2 left-3 w-4 h-4 text-gray-500 transform -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M15 11a6 6 0 11-12 0 6 6 0 0112 0z"
          />
        </svg>
      </div>
    </div>

    <div class="flex items-center space-x-6">
      <button class="text-sm font-medium text-gray-600">Udemy Business</button>
      <button class="text-sm font-medium text-gray-600">Teach on Udemy</button>
      <button class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="black"
        >
          <path
            d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
          />
        </svg>
      </button>
      <button class="text-sm font-medium text-gray-600">Log in</button>
      <button
        class="px-4 py-1 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
      >
        Sign up
      </button>
      <button class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="black"
        >
          <path
            d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const closeBanner = () => {
  // Implement the logic to close the banner
};
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
