<template>
  <!-- Card List Section -->
  <section class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
    <!-- Card Grid -->
    <div
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <Form v-for="form in forms" :key="form.link" :form="form" />
    </div>
  </section>
</template>
<script>
import Form from './From.vue'

export default {
  data() {
    return {
      forms: [
        {
          name: 'Recommed tools',
          link: 'https://airtable.com/shr8kjfU6Mb31u8a7',
          description:
            'Complete this form to contribute to a list of recommended digital tools that are used by communities',
        },
        {
          name: 'Recommend resources',
          link: 'https://airtable.com/shrr4zKdzA5RIL3YG',
          description:
            'Complete this form to contribute to a list of recommended a resources or guides that could be helpful to communities',
        },
        {
          name: 'Recommend hardware',
          link: '/',
          description: 'This form is coming soon',
        },
      ],
    }
  },
}
</script>
