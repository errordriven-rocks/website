<template>
  <section class="bg-neutral-900" id="contact">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white"
      >
        Contact Us
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-neutral-400 dark:text-gray-400 sm:text-xl"
      >
        You want to join us or have a question? Feel free to send us a message.
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-neutral-400"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            class="bg-neutral-800 text-white text-sm rounded-lg focus:ring-neutral-800 focus:border-neutral-800 block w-full p-2.5 border border-neutral-700"
            placeholder="name@errordriven.rocks"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-neutral-400"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            class="bg-neutral-800 text-white text-sm rounded-lg focus:ring-neutral-800 focus:border-neutral-800 block w-full p-2.5 border border-neutral-700"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-neutral-400"
            >Your message</label
          >
          <textarea
            id="message"
            rows="6"
            class="bg-neutral-800 text-white text-sm rounded-lg focus:ring-neutral-800 focus:border-neutral-800 block w-full p-2.5 border border-neutral-700"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 font-bold text-white bg-neutral-800 rounded-lg hover:-translate-y-1 transition"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
