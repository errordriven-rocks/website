<template>
  <section class="bg-neutral-900" id="team">
    <div class="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          class="text-2xl font-extrabold md:text-4xl md:leading-tight text-white"
        >
          Our Team
        </h2>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12"
      >
        <div v-for="x in 5" class="text-center">
          <CircleUserRound class="size-24 mx-auto text-gray-300" />
          <div class="mt-2 sm:mt-4">
            <h3 class="font-medium text-white">Maybe you?</h3>
            <p class="text-sm text-neutral-400">Do what you love</p>
          </div>
        </div>

        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <!-- Card -->
      <div class="mt-12 flex justify-center">
        <div
          class="border border-neutral-800 py-2 px-3 rounded-full dark:border-neutral-700"
        >
          <div class="flex items-center gap-x-3">
            <span class="text-sm text-gray-500 dark:text-neutral-500"
              >Wanna join us?
            </span>
            <NuxtLink
              class="inline-flex items-center gap-x-2 text-sm font-medium text-primary hover:text-primary/80 focus:outline-none focus:text-primary"
              href="#"
            >
              Learn how
              <svg
                class="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
  </section>
  <!-- Team -->

  <!-- End Team -->
</template>

<script lang="ts" setup>
import { CircleUserRound } from "lucide-vue-next";
</script>

<style scoped></style>
