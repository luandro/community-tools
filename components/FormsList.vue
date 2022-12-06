<template>
  <div class="ma-auto">
    <button
      v-for="form in forms"
      :key="form.link"
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4 mb-4"
      @click="form.link"
    >
      >
      <a :href="form.link" target="_blank" rel="noopener noreferrer">{{
        form.name
      }}</a>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      forms: [
        {
          name: 'Recommed a tool',
          link: 'https://airtable.com/shr8kjfU6Mb31u8a7',
          description:
            'Complete this form to contribute to a list of recommended digital tools that are used by communities',
        },
        {
          name: 'Recommend a resource',
          link: 'https://airtable.com/shrr4zKdzA5RIL3YG',
          description:
            'Complete this form to contribute to a list of recommended a resources or guides that could be helpful to communities',
        },
        // {
        //   name: 'Recommend hardware',
        //   link: '/',
        //   description: 'This form is coming soon',
        //   disabled: true,
        // },
      ],
    }
  },
}
</script>
