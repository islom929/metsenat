<script setup>
  import AdminHeader from '@/components/layout/AdminHeader.vue'
</script>

<template>
  <div>
    <AdminHeader class="fixed top-0 left-0 right-0 z-10" />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>