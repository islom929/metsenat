<script setup>
  import TheLoader from '@/components/main/theLoader.vue'
  import AdminInfoNavbar from '@/components/layout/AdminInfoNavbar.vue'
  import AdminInfo from '@/components/AdminComponent/AdminInfo.vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  const store = useStore()
  const router = useRouter()

  window.addEventListener('load', () => {
    router.push('/admin')
  })

</script>
<template>
  <div>
    <AdminInfoNavbar
      :title="store.state.admin_info.full_name"
    />

  <div class="mt-[220px] max-w-container px-[25px] mx-auto">

    <AdminInfo />

  </div>

  </div>
  <TheLoader v-if="!store.state.admin_status" />
</template>