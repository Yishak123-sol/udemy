<template>
  <div>
    <Header />
    <div class="flex">
      <!-- Left Column: Main Content -->
      <div class="flex-1">
        <CourseInfo />
        <Related />
        <CourceCont />
        <Desc />
        <Instruct />
        <Review />
        <More />
      </div>

      <!-- Right Column: Vertical Sidebar -->
      <div class="w-1/3 sticky top-0 h-screen">
        <Vertical />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
