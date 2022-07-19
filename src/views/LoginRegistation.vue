<script setup>
import LoginCard from '@/components/auth/LoginCard.vue'
</script>

<template>
  <div class="flex flex-col items-center mt-[160px]">
  <router-link className="" to="/">
    <svg-icon name="logo" />
  </router-link>
  <LoginCard />
  </div>
</template>