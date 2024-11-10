<template>
  <div class="max-w-7xl mx-auto p-6">
    <!-- Frequently Bought Together Section -->
    <div class="bg-white shadow rounded-lg p-6">
      <h2 class="text-lg font-bold mb-6">Frequently Bought Together</h2>

      <!-- Product List -->
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <!-- Product Image & Info -->
          <div class="flex items-center space-x-4">
            <img
              src="https://img-c.udemycdn.com/course/240x135/3082678_ffe8.jpg"
              alt="AWS Solutions Architect"
              class="w-24 h-24 rounded-md"
            />
            <div>
              <h3 class="text-lg font-bold">
                AWS Certified Solutions Architect Associate - SAA C03
              </h3>
              <p class="text-gray-500">in28Minutes Official, Ranga Karanam</p>
              <p class="text-yellow-500 flex items-center">
                <span class="text-sm font-bold">4.7</span>
                <span class="ml-1">⭐⭐⭐⭐⭐ (5,545)</span>
              </p>
            </div>
          </div>
          <p class="font-bold">$74.99</p>
        </div>

        <div class="flex justify-center items-center">
          <span class="bg-gray-200 rounded-full p-2">+</span>
        </div>

        <div class="flex justify-between items-center">
          <!-- Product Image & Info -->
          <div class="flex items-center space-x-4">
            <img
              src="https://img-c.udemycdn.com/course/240x135/3545764_ad88.jpg"
              alt="AWS Cloud Practitioner"
              class="w-24 h-24 rounded-md"
            />
            <div>
              <h3 class="text-lg font-bold">
                AWS Certified Cloud Practitioner - AWS Certification
              </h3>
              <p class="text-gray-500">in28Minutes Official, Ranga Karanam</p>
              <p class="text-yellow-500 flex items-center">
                <span class="text-sm font-bold">4.7</span>
                <span class="ml-1">⭐⭐⭐⭐⭐ (9,356)</span>
              </p>
            </div>
          </div>
          <p class="font-bold">$74.99</p>
        </div>

        <div class="flex justify-center items-center">
          <span class="bg-gray-200 rounded-full p-2">+</span>
        </div>

        <div class="flex justify-between items-center">
          <!-- Product Image & Info -->
          <div class="flex items-center space-x-4">
            <img
              src="https://img-c.udemycdn.com/course/240x135/3594850_c2d3.jpg"
              alt="AWS Developer Associate"
              class="w-24 h-24 rounded-md"
            />
            <div>
              <h3 class="text-lg font-bold">
                AWS Certified Developer Associate - AWS Certification
              </h3>
              <p class="text-gray-500">in28Minutes Official, Ranga Karanam</p>
              <p class="text-yellow-500 flex items-center">
                <span class="text-sm font-bold">4.6</span>
                <span class="ml-1">⭐⭐⭐⭐⭐ (3,812)</span>
              </p>
            </div>
          </div>
          <p class="font-bold">$89.99</p>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <p class="text-lg font-bold">Total: $239.97</p>
        <button class="bg-purple-600 text-white px-6 py-3 rounded-md font-bold">
          Add all to cart
        </button>
      </div>
    </div>

    <!-- Instructors Section -->
    <div class="bg-white shadow rounded-lg p-6 mt-8">
      <h2 class="text-lg font-bold mb-6">Instructors</h2>

      <!-- Instructor Profile -->
      <div class="space-y-6">
        <div class="flex items-center space-x-4">
          <img
            src="https://img-c.udemycdn.com/user/200_H/13363166_a747.jpg"
            alt="in28Minutes"
            class="w-16 h-16 rounded-full"
          />
          <div>
            <h3 class="text-lg font-bold text-purple-600">
              in28Minutes Official
            </h3>
            <p class="text-gray-500">
              DevOps, Azure, GCP, Docker, Kubernetes, Java & Spring Boot
            </p>
            <p class="text-yellow-500 flex items-center">
              <span class="text-sm font-bold">4.6</span>
              <span class="ml-1">⭐⭐⭐⭐⭐ (448,886 Reviews)</span>
            </p>
            <p class="text-sm text-gray-500">1,730,237 Students | 55 Courses</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <img
            src="https://img-c.udemycdn.com/user/200_H/96750544_8477.jpg"
            alt="Ranga Karanam"
            class="w-16 h-16 rounded-full"
          />
          <div>
            <h3 class="text-lg font-bold text-purple-600">
              Ranga Karanam | GCP Certification - Google Cloud Engineer &
              Architect
            </h3>
            <p class="text-gray-500">
              AWS, Azure & Google Cloud Certified Cloud Computing Expert
            </p>
            <p class="text-yellow-500 flex items-center">
              <span class="text-sm font-bold">4.6</span>
              <span class="ml-1">⭐⭐⭐⭐⭐ (107,605 Reviews)</span>
            </p>
            <p class="text-sm text-gray-500">1,658,861 Students | 15 Courses</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// If needed, you can use any Nuxt-related code or JavaScript logic here
</script>

<style scoped>
/* Custom styles if needed */
</style>
