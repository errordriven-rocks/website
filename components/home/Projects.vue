<template>
  <section class="bg-neutral-900 py-32" id="projects">
    <p
      class="font-heading mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center"
    >
      What We Do
    </p>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        <!-- Card -->
        <div
          class="group flex flex-col h-full bg-neutral-800 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div
            class="h-52 flex flex-col justify-center items-center bg-[#0e9f6e] rounded-t-xl"
          >
            <NuxtImg src="/images/daytistics.png" class="w-36 h-auto" />
          </div>
          <div class="p-4 md:p-6">
            <h3 class="text-xl font-semibold text-white">Daytistics</h3>
            <p class="mt-3 text-neutral-400">
              A software that develops products for software developers and
              developments.
            </p>
          </div>
          <div
            class="mt-auto flex border-t divide-x border-neutral-700 divide-neutral-700"
          >
            <a
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-neutral-800 text-neutral-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Try it now
            </a>
            <a
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-neutral-800 text-neutral-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              Read the docs
            </a>
          </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div
          v-for="x in 2"
          class="group flex flex-col h-full bg-neutral-800 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
        >
          <div
            class="h-52 flex flex-col justify-center items-center bg-red-500 rounded-t-xl"
          >
            <FileQuestion class="w-28 h-auto text-white" />
          </div>
          <div class="p-4 md:p-6">
            <h3 class="text-xl font-semibold text-white">Coming Soon</h3>
            <p class="mt-3 text-neutral-400 dark:text-neutral-500">
              We are currently working on a new project. Stay tuned for more
              information.
            </p>
          </div>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import { FileQuestion } from "lucide-vue-next";
</script>

<style scoped></style>
