<template>
  <header
    class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 bg-neutral-900"
  >
    <nav
      class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto"
    >
      <div class="md:col-span-3">
        <!-- Logo -->
        <NuxtLink
          class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          to="/"
          aria-label="Preline"
        >
          <div
            class="hover:bg-gradient-to-tr from-primary to-red-900 duration-500"
          >
            <NuxtImg
              src="/images/logo.png"
              class="w-20 hover:scale-125 duration-500 transition hover:text-primary/0 bg-neutral-900"
            />
          </div>
        </NuxtLink>
        <!-- End Logo -->
      </div>

      <div
        class="hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0"
        >
          <div v-for="item in navigation.filter((item) => !item.moreSection)">
            <NuxtLink
              class="relative inline-block text-white font-bold"
              :to="item.href"
              aria-current="page"
              >{{ item.name }}</NuxtLink
            >
          </div>
        </div>
      </div>

      <div
        class="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3"
      >
        <NuxtLink to="https://github.com/errordriven-rocks/">
          <svg
            class="w-20 h-auto hover:scale-125 duration-500 transition"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"
                fill="#FFF"
              ></path>
            </g>
          </svg>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { initDrawers } from "flowbite";
import { ChevronDownIcon } from "lucide-vue-next";

const navigation = ref([
  { name: "About", href: "#about", moreSection: false },
  { name: "Projects", href: "#projects", moreSection: false },
  { name: "Team", href: "#team", moreSection: false },
  { name: "Contact", href: "#contact", moreSection: false },
]);

onMounted(() => {
  initDrawers();
});
</script>

<style scoped></style>
