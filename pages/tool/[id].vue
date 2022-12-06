<template>
  <section class="text-gray-600 body-font">
    <div v-if="error" class="text-red-500">
      {{ error }}
    </div>
    <div
      v-else-if="tool"
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          :src="tool.logo"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          {{ tool.name }}
        </h1>
        <p class="mb-8 leading-relaxed">{{ tool.description }}</p>
        <div class="flex justify-center">
          <a
            target="_blank"
            :href="tool.url"
            class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Website
          </a>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>
<script>
import Airtable from 'airtable'
import getValidUrl from '@/utils/getValidUrl'

export default {
  data() {
    return {
      tool: null,
      error: false,
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: this.$config.apiKey,
      })
      var base = Airtable.base(this.$config.baseId)
      try {
        const { fields } = await base('Software').find(this.$route.params.id)
        if (fields.Name) {
          this.tool = {
            id: fields.id,
            name: fields.Name,
            status: fields.Status,
            description: fields.Description,
            url: getValidUrl(fields['website link']),
            categories: fields['Name (from Categories)'],
            logo: 'https://source.unsplash.com/random/720x600',
          }
        }
      } catch (err) {
        console.log('Got error', err)
        this.error = err.message
      }
    },
  },
}
</script>
