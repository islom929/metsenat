<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
</script>

<template>
  <div class="w-full relative border-y-2 pt-[32px] pb-[42px]">
    <div class="w-full flex items-center">
      <span class="border-[#E0E7FF] rounded-md bg-[#EAECF0] py-[16px] px-[18px] inline-block">
        <svg-icon name='person' />
      </span>
      <h1 class="font-semibold ml-[20px] capitalize">
        {{store.state.admin_info.full_name}}
      </h1>
    </div>
    <div class="mt-[24px] flex items-center">
      <span class="absolute top-[-9px] py-[2px] px-[11px] text-xs bg-[#E5EBFF] text-[#3366FF]">Asosiy ma’lumotlar</span>
      <p class="flex flex-col items-start w-1/2 font-semibold">
        <span class="uppercase text-xs text-[#B5B5C3] font-normal">telefon raqam</span>
          {{store.state.admin_info.phone}}
      </p>
      <span class="absolute bottom-[-9px] py-[2px] px-[11px] text-xs bg-[#E5EBFF] text-[#3366FF]">O‘qish joyi haqida ma’lumot</span>
    </div>
  </div>
  <div class="mt-[32px] flex items-center flex-wrap gap-y-4">
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">OTM</span>
        {{store.state.admin_info.institute.name}}
    </p>
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">Talabalik turi</span>
      <span v-if="store.state.admin_info.type === 1">
        Bakalavr
      </span>
      <span v-if="store.state.admin_info.type === 2">
        Magistr
      </span>
      <span v-if="store.state.admin_info.type === 3">
        Aspirant
      </span>
    </p>
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">Ajratilingan summa</span>
        {{store.state.admin_info.given.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}} UZS
    </p>
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">Kontrakt miqdori</span>
        {{store.state.admin_info.contract.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}} UZS
    </p>
  </div>
</template>