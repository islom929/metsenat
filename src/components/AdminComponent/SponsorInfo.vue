<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
</script>

<template>
  <div class="w-full">
    <div class="w-full flex items-center">
      <span class="border-[#E0E7FF] rounded-md bg-[#EAECF0] py-[16px] px-[18px] inline-block">
        <svg-icon name='person' />
      </span>
      <h1 class="font-semibold ml-[20px] capitalize">
        {{store.state.admin_info.full_name}}
      </h1>
    </div>
    <div class="mt-[32px] flex items-center flex-wrap">
      <p class="flex flex-col items-start w-1/2 font-semibold">
        <span class="uppercase text-xs text-[#B5B5C3] font-normal">telefon raqam</span>
          {{store.state.admin_info.phone}}
      </p>
      <p class="flex flex-col items-start w-1/2 font-semibold">
        <span class="uppercase text-xs text-[#B5B5C3] font-normal">Homiylik summasi</span>
          {{store.state.admin_info.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}} UZS
      </p>
      <p v-if="store.state.admin_info.firm" class="flex flex-col items-start w-1/2 font-semibold mt-5">
        <span class="uppercase text-xs text-[#B5B5C3] font-normal">Tashkilot nomi</span>
          {{store.state.admin_info.firm}}
      </p>
    </div>
  </div>
</template>