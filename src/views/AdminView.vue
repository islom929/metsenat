<script setup>
  import AdminNavbar from '@/components/layout/AdminNavbar.vue'
  import AdminDashboard from '@/components/AdminComponent/AdminDashboard.vue'
  import PersonList from '@/components/AdminComponent/PersonList.vue'
  import TheLoader from '@/components/main/theLoader.vue'
  import { useStore } from 'vuex'

  const store = useStore()

  store.dispatch('getDashboard')
</script>
<template>
  <div>
    <AdminNavbar />
  <div class="mt-[220px] max-w-container px-[25px] mx-auto">
    <div>
      <AdminDashboard v-if="store.state.adminActive === 'dashboard'" />
    </div>

    <div>
      <PersonList v-if="store.state.adminActive === 'sponsors'" />
    </div>
    <div v-if="store.state.adminActive === 'students'" >
      <PersonList />
    </div>
  </div>

  </div>
  <TheLoader v-if="!store.state.admin_status" />
</template>