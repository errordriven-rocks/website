<template>
  <!-- Hero -->
  <div class="bg-neutral-900">
    <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
      <h1 class="font-semibold text-white text-5xl md:text-6xl">
        We develop
        <span
          class="bg-gradient-to-br from-primary to-red-500 text-transparent bg-clip-text"
          >ErrorDriven</span
        >
      </h1>
      <div class="max-w-4xl">
        <p class="mt-5 text-neutral-400 text-lg">
          ErrorDriven is a team of passionate developers from all over the world
          who are dedicated to creating great open-source software for everyone.
          We are primarily involved in web development, but we also have
          experience in machine learning and low-level programming. We are
          currently building Daytistics, a platform to track your daily
          activities and improve your productivity.
        </p>
      </div>
    </div>
  </div>
  <!-- End Hero -->

  <!-- Clients -->
  <div class="relative overflow-hidden pt-4 bg-neutral-900">
    <div class="relative z-10">
      <div class="max-w-5xl px-4 xl:px-0 mx-auto">
        <div class="flex justify-between gap-6">
          <HomeSvgPython />
          <HomeSvgTypeScript />
          <HomeSvgRust />
          <HomeSvgWebAssembly />
          <HomeSvgTailwind />
          <HomeSvgNuxt />
        </div>
      </div>
    </div>
  </div>

  <!-- End Clients -->
</template>

<script lang="ts" setup></script>

<style scoped></style>
