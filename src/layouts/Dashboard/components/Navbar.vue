<script setup lang="ts">
import { ref, Transition } from 'vue';
import { useRouter } from 'vue-router';
import BtnDinamic from '../../../components/buttons/BtnDinamic.vue';
import { useAuthStore } from '../../../store/useAuthStore';
import { storeToRefs } from 'pinia';
import Logo from '../../../components/Logo.vue';
import BtnLogout from '../../../components/buttons/BtnLogout.vue';

const menuLinks = [
  {
    text: 'home',
    name: 'Home',
  },
  {
    text: 'productos',
    name: 'Productos',
  },
  {
    text: 'compra',
    name: 'Compra',
  },
  {
    text: 'crear',
    name: 'Crear',
  },
];
const isMobileMenuOpen = ref<boolean>(false);
const authStore = useAuthStore();

const isOpenMenu = ref<boolean>(false);
const openSideMenu = (val: boolean) => {};
const toggleResponsiveNavMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
<template>
  <header class="bg-white">
    <nav class="mx-auto flex items-center justify-between p-6 md:px-8">
      <div class="flex items-center">
        <router-link :to="{ name: 'Home' }" class="-m-1.5 p-1.5">
          <Logo class="w-16" />
        </router-link>
      </div>
      <div class="lg:hidden">
        <button class="navbar-toggler" type="button" @click="toggleResponsiveNavMenu">
          <i class="bi bi-list"></i>
        </button>
      </div>
      <div class="hidden lg:flex space-x-2 items-center">
        <!-- Enlaces del menú -->
        <template v-for="item of menuLinks" :key="item.id">
          <router-link
            :to="{ name: item.name }"
            class="block text-black capitalize"
          >
            {{ item.text }}
          </router-link>
        </template>
        <div v-if="authStore.isAuth" class="space-x-2">
          <div
            class="flex -space-x-2 overflow-hidden cursor-pointer"
            @click="openSideMenu((isOpenMenu = !isOpenMenu))"
          >
            <img
              class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              :src="authStore.user?.avatar"
              :alt="authStore.user?.name"
            />
          </div>
        </div>
        <div v-else>
          <BtnDinamic :path="{ name: 'Login' }" text="Login" />
        </div>
      </div>
    </nav>
    <Transition name="fade">
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="bg-white p-4">
          <div class="space-y-2">
            <template v-for="item of menuLinks" :key="item.id">
              <router-link
                :to="{ name: item.name }"
                class="block text-black capitalize"
              >
                {{ item.text }}
              </router-link>
            </template>
          </div>
          <div class="mt-4 text-center">
            <div v-if="authStore.isAuth" class="space-x-2">
              <div class="flex -space-x-2 overflow-hidden">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
            <div v-else>
              <BtnDinamic :path="{ name: 'Login' }" text="Login" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
