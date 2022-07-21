<template>
  <div v-if="status" class="">
    <ul class="list-none flex items-center justify-between w-full">
      <li
        class="w-[31%] rounded-md bg-white"
        v-for="item in dashboard"
        :key="item">
          <DashboardPriceCard
            :title='item.title'
            :color='item.color'
            :price='item.price'
          />
      </li>
    </ul>

    <div class="bg-white p-[24px] rounded-md mt-[30px]">
      <h2 class="text-[#2E384D] text-xl font-semibold">
        Homiylar va talabalar soni
      </h2>
      <div class="flex items-center mt-3">
        <p class="text-xs text-[#7A7A9D] flex items-center">
          <span class="w-2 h-2 bg-[#4C6FFF] rounded-full mr-3"></span>
          Homiylar
        </p>
        <p class="text-xs text-[#7A7A9D] ml-[20px] flex items-center">
          <span class="w-2 h-2 bg-[#FF92AE] rounded-full mr-3"></span>
           Talabalar
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import DashboardPriceCard from '@/components/AdminComponent/DashboardPriceCard.vue'
  import { computed } from '@vue/runtime-core'
  import { useStore } from 'vuex'

  const store = useStore()

  const status = computed(() => store.state.admin_status)
  const dashboard = computed(() => store.state.dashboard)
</script>