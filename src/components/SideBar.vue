<script setup lang="ts">
import { sideBarLinks } from '../utils/sidebarlinks'
import { Icon } from '@iconify/vue'
</script>

<template>
  <div
    class="w-full bg-black md:bg-none min-h-screen fixed top-0 bottom-0 z-50 bg-opacity-20 md:z-30 md:bg-opacity-0 md:w-[240px]"
  >
    <aside class="min-h-screen w-full max-w-[240px] fixed top-0 bottom-0 sidebar  lg:block">
      <div
        class="w-full bg-[#79242F] max-w-[200px] my-4 mx-4 rounded-[6px] py-[13px] px-[11px] user-details flex items-center gap-x-2"
      >
        <img class="w-[40px]" src="../assets/user.svg" alt="profile" />
        <div>
          <p class="mb-1 text-[12px]">Gamma Spark Updated</p>
          <p class="text-[10px]">sammyfish007@gmail.com</p>
        </div>
      </div>
      <main class="px-6 mt-8 h-[690px] overflow-y-scroll">
        <ul>
          <li
            :key="index"
            v-for="(links, index) in sideBarLinks"
            :class="{ 'my-12 font-bold': links.type == 'sub-headings' }"
            class="text-justify"
          >
            <div class="flex items-center gap-x-3 mb-6">
              <Icon v-if="links.icon" :icon="links.icon" />
              <p
                :class="{
                  'font-extrabold text-[#A4A6A8] tracking-[0.1px]': links.type === 'sub-headings'
                }"
                v-if="links.type == 'sub-headings'"
              >
                {{ links.title }}
              </p>
              <router-link v-else class="text-[14px]" to="/">{{ links.title }}</router-link>
            </div>
            <div
              class="flex items-center gap-x-3 mb-6"
              :key="index"
              v-for="(link, index) in links.content"
            >
              <Icon :icon="link.icon" />
              <router-link class="text-[14px]" to="#">{{ link.title }}</router-link>
            </div>
          </li>
        </ul>
      </main>
    </aside>
  </div>
</template>

<style scoped>
.sidebar {
  background: linear-gradient(
      241.47deg,
      rgba(204, 255, 250, 0.25) -2.96%,
      rgba(255, 252, 245, 0.25) 44.27%,
      rgba(255, 229, 233, 0.25) 89.58%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  z-index: 1000;
  transition: all 0.5s ease;
}

.sidebar a {
  font-weight: 400;
  line-height: 100%;
  color: #646668;
  transition: all 0.5s ease;
}

.sidebar main {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
}
.sidebar main::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.sidebar svg {
  color: #4f4f4f;
}
.sidebar p {
  line-height: 100%;
}

.sidebar .user-details p {
  font-size: 12px;
  color: #ffffff;
}


</style>
