<template>
  <div class="p-6 bg-gray-100">
    <!-- Courses Container -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Single Course Card -->
      <div
        v-for="course in courses"
        :key="course.id"
        class="bg-white p-4 rounded-lg shadow-md"
      >
        <!-- Course Image -->
        <img
          :src="course.image"
          alt="Course"
          class="w-full h-40 object-cover rounded-md mb-4"
        />

        <!-- Course Title -->
        <h3 class="font-semibold text-lg text-gray-800 mb-2">
          {{ course.title }}
        </h3>

        <!-- Instructor and Ratings -->
        <div class="flex items-center mb-2">
          <p class="text-sm text-gray-600">{{ course.instructor }}</p>
          <span class="ml-auto text-sm text-gray-600">{{ course.rating }}</span>
        </div>

        <!-- Stars Rating -->
        <div class="flex items-center mb-4">
          <div class="flex text-yellow-400">
            <i class="fas fa-star" v-for="star in 5" :key="star" />
          </div>
          <span class="text-sm text-gray-600 ml-2">({{ course.reviews }})</span>
        </div>

        <!-- Course Details -->
        <div class="text-sm text-gray-600 mb-4">
          <p>
            {{ course.hours }} total hours • {{ course.lectures }} lectures •
            {{ course.level }}
          </p>
        </div>

        <!-- Price -->
        <div class="font-semibold text-lg text-gray-900">
          ${{ course.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg",
    title: "GCP Associate Cloud Engineer - Google Cloud",
    instructor: "Ranga Karanam",
    rating: "4.6",
    reviews: "29,423",
    hours: "18",
    lectures: "299",
    level: "All Levels",
    price: "109.99",
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg",
    title: "Master Spring Boot 3 & Spring Framework 6",
    instructor: "Ranga Karanam",
    rating: "4.5",
    reviews: "8,740",
    hours: "39",
    lectures: "423",
    level: "All Levels",
    price: "69.99",
  },
  {
    id: 3,
    image: "https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg",
    title: "Master Microservices with Spring Boot",
    instructor: "Ranga Karanam",
    rating: "4.5",
    reviews: "53,740",
    hours: "25.5",
    lectures: "326",
    level: "All Levels",
    price: "109.99",
  },
  {
    id: 4,
    image: "https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg",
    title: "GCP Associate Cloud Engineer - Google Cloud",
    instructor: "Ranga Karanam",
    rating: "4.6",
    reviews: "29,423",
    hours: "18",
    lectures: "299",
    level: "All Levels",
    price: "109.99",
  },
  {
    id: 5,
    image: "https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg",
    title: "GCP Professional Cloud Architect: Google Cloud",
    instructor: "Ranga Karanam",
    rating: "4.6",
    reviews: "11,399",
    hours: "21",
    lectures: "333",
    level: "All Levels",
    price: "109.99",
  },
  {
    id: 6,
    image: "https://img-c.udemycdn.com/course/240x135/3995372_4064.jpg",
    title: "Learn DevOps: Docker, Kubernetes, Terraform",
    instructor: "Ravi S",
    rating: "4.5",
    reviews: "15,152",
    hours: "21.5",
    lectures: "232",
    level: "All Levels",
    price: "159.99",
  },
];
</script>

<style scoped>
i.fas.fa-star {
  margin-right: 2px;
}
</style>
