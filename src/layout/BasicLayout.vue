<script setup>
  import TheHeader from '@/components/layout/TheHeader.vue'
</script>

<template>
  <div>
    <TheHeader />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>