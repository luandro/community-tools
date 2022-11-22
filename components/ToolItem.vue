<template>
  <div
    class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <div class="flex justify-center -mt-16 md:justify-end">
      <img
        class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
        alt="Testimonial avatar"
        :src="tool.logo"
      />
    </div>

    <h2
      class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl"
    >
      {{ tool.name }}
    </h2>

    <p class="description mt-2 text-gray-600 dark:text-gray-200">
      {{ tool.description.slice(0, 150) }}
      {{ tool.description.length > 150 ? '...' : '' }}
    </p>

    <div class="flex justify-end mt-4">
      <a
        class="text-xl font-medium text-blue-600 dark:text-blue-300"
        tabindex="0"
        role="link"
      >
        <NuxtLink :to="`/tool/${tool.id}`">More information</NuxtLink>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tool: Object,
  },
}
</script>
<style scoped>
.description {
  height: 180px;
}
</style>
