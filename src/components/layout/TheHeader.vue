<template>
  <header class="shadow bg-white fixed top-0 left-0 right-0 z-10">
    <nav class="py-7 px-[25px] max-w-container mx-auto flex items-center justify-between">
      <router-link class="" to='/' exact>
        <svg-icon class="tablet:w-[200px] tablet:h-[25px]" name='logo' />
      </router-link>
      <button @click="menu = !menu" class="hidden tablet-min:block">
        <svg-icon :name="menu ? 'close-menu' : 'burger-menu'" fill='#2E384D' />
      </button>
      <Transition name="slide-fade">
        <ActiveNavbar v-if='menu' />
      </Transition>
      <DefaultNavbar v-if='!menu' />
    </nav>
  </header>
</template>

<script setup>
  import { ref } from 'vue'
  import ActiveNavbar from '@/components/layout/ActiveNavbar.vue'
  import DefaultNavbar from '@/components/layout/DefaultNavbar.vue'

  const menu = ref(false)
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
  }
</style>