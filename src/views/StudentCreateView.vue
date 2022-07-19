<script setup>
  // import TheLoader from '@/components/theLoader.vue'
  import AdminInfoNavbar from '@/components/layout/AdminInfoNavbar.vue'
  import StudentCreate from '@/components/AdminComponent/StudentCreate.vue'
  // import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  // const store = useStore()
    const router = useRouter()

  window.addEventListener('load', () => {
    router.push('/admin')
  })

</script>
<template>
  <div>
    <AdminInfoNavbar
      title="Talaba qo‘shish"
    />
      <!-- ${store.state.adminInfo_active === 'student-info' && store.student.name}
      ${store.state.adminInfo_active === 'sponsor-info' && store.sponsor.name} -->

  <div class="mt-[220px] max-w-container px-[25px] mx-auto">

    <StudentCreate />
  </div>

  </div>
  <!-- <TheLoader v-if="!store.state.admin_status" /> -->
</template>