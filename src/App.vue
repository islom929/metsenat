<script>
  import BasicLayout from '@/layout/BasicLayout.vue'
  import EmptyLayout from '@/layout/EmptyLayout.vue'
  import AdminLayout from '@/layout/AdminLayout.vue'
  import AdminInfoLayout from '@/layout/AdminInfoLayout.vue'

  export default {
    computed: {
      layout() {
        return this.$route.meta.layout + '-layout'
      }
    },
    components: {
      BasicLayout,
      EmptyLayout,
      AdminLayout,
      AdminInfoLayout
    }
  }
</script>

<template>
  <component :is="layout">
  </component>
</template>

<style lang="scss">
  input {
    outline: none;
  }
</style>
