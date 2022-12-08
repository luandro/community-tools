<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <img
        class="lg:w-1/6 md:w-2/6 w-4/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="https://www.logolynx.com/images/logolynx/59/596329e4606869e0f0a667399009b26e.png"
      />
      <div class="text-center lg:w-2/3 w-full pb-12">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Community Tools
        </h1>
        <p class="mb-8 leading-relaxed">
          This is a placeholder site to supoprt the collection of digital tools,
          resources and hardware that are recommended used by community members
          and practioners for use by grassroots communities seeking digital
          autonomy
        </p>
      </div>
      <FormsList />
      <ToolForms />
      <ToolsList />
    </div>
  </section>
</template>
