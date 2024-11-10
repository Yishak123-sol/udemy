<template>
  <div class="bg-gray-100 p-6 rounded-lg shadow-md">
    <!-- Header Section -->
    <div class="mb-4">
      <p class="text-sm text-gray-600 mb-2">
        Top companies offer this course to their employees
      </p>
      <p class="text-gray-500 text-sm mb-4">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide.
        <a href="#" class="text-purple-600 underline">Learn more</a>
      </p>
      <div class="flex space-x-4 mb-4">
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
          alt="Nasdaq"
          class="h-6"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt="Volkswagen"
          class="h-6"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt="Box"
          class="h-6"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
          alt="NetApp"
          class="h-6"
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt="Eventbrite"
          class="h-6"
        />
      </div>
    </div>

    <!-- Course Content Section -->
    <div class="bg-white p-4 rounded-lg shadow-md">
      <div class="flex items-center justify-between border-b pb-2 mb-2">
        <h2 class="text-lg font-semibold">Course content</h2>
        <p class="text-sm text-gray-600">
          42 sections • 443 lectures • 28h 56m total length
        </p>
        <a href="#" class="text-purple-600 text-sm font-semibold"
          >Expand all sections</a
        >
      </div>

      <!-- Section List -->
      <div class="space-y-4">
        <!-- Section 1 -->
        <div class="border rounded-lg p-4 bg-gray-50">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-base font-semibold">
              Introduction - AWS Certified Solutions Architect Associate
            </h3>
            <p class="text-sm text-gray-600">3 lectures • 12min</p>
          </div>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <a href="#" class="text-blue-600 underline text-sm"
                >Introduction - AWS Certified Solutions Architect Associate</a
              >
              <div class="flex items-center space-x-2">
                <a href="#" class="text-purple-600 text-xs underline"
                  >Preview</a
                >
                <p class="text-sm text-gray-600">04:23</p>
              </div>
            </li>
            <li class="flex justify-between">
              <a href="#" class="text-blue-600 underline text-sm"
                >Course Overview - AWS Certified Solutions Architect
                Associate</a
              >
              <div class="flex items-center space-x-2">
                <a href="#" class="text-purple-600 text-xs underline"
                  >Preview</a
                >
                <p class="text-sm text-gray-600">07:15</p>
              </div>
            </li>
            <li class="text-sm text-gray-600">Course Downloads</li>
          </ul>
        </div>

        <!-- Additional sections (similar structure) -->
        <div class="border rounded-lg p-4 bg-gray-50">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-base font-semibold">
              Getting Started - AWS Certified Solutions Architect Associate
            </h3>
            <p class="text-sm text-gray-600">3 lectures • 21min</p>
          </div>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-base font-semibold">
              Understanding Regions and Availability Zones
            </h3>
            <p class="text-sm text-gray-600">2 lectures • 10min</p>
          </div>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-base font-semibold">
              Getting started with AWS Virtual Servers - EC2 Service and EC2
              Instances
            </h3>
            <p class="text-sm text-gray-600">29 lectures • 2hr 14min</p>
          </div>
        </div>
        <div class="border rounded-lg p-4 bg-gray-50">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-base font-semibold">
              Take care of Billing in the Cloud
            </h3>
            <p class="text-sm text-gray-600">2 lectures • 11min</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No specific script needed unless you want to dynamically load data
</script>

<style scoped>
/* Custom styles (optional) */
</style>
