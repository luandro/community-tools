<template>
  <!-- Card List Section -->
  <section class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
    <!-- Card Grid -->
    <div v-if="loading">Loading...</div>
    <div
      v-else-if="tools.length > 0"
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ToolItem v-for="tool in tools" :key="tool.id" :tool="tool" />
    </div>
    <div v-else>No tools found</div>
  </section>
</template>
<script>
import Airtable from 'airtable'

export default {
  data() {
    return {
      loading: true,
      tools: [],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      let tools = []
      Airtable.configure({
        endpointUrl: 'https://api.airtable.com',
        apiKey: this.$config.apiKey,
      })
      var base = Airtable.base(this.$config.baseId)
      base('Tools')
        .select({
          view: 'Grid view',
        })
        .eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach((record) => {
            const { id } = record
            const name = record.get('Name')
            const status = record.get('Status')
            const description = record.get('Description')
            const url = record.get('website link')
            const categories = record.get('Name (from Categories)')
            if (name) {
              tools.push({
                id,
                name,
                status,
                description,
                url,
                categories,
                logo: 'https://source.unsplash.com/random/150×150',
              })
            }
          })
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage()
        })
        .then(() => {
          this.tools = tools
          this.loading = false
        })
        .catch(() => {
          this.loading = false
          this.error = true
        })
    },
  },
}
</script>
