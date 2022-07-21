<template>
  <div class="w-full relative border-y-2 pt-[32px] pb-[42px]">
    <div class="w-full flex items-center">
      <span class="border-[#E0E7FF] rounded-md bg-[#EAECF0] py-[16px] px-[18px] inline-block">
        <svg-icon name='person' />
      </span>
      <h1 class="font-semibold ml-[20px] capitalize">
        {{infoName}}
      </h1>
    </div>
    <div class="mt-[24px] flex items-center">
      <span class="absolute top-[-9px] py-[2px] px-[11px] text-xs bg-[#E5EBFF] text-[#3366FF]">Asosiy ma’lumotlar</span>
      <p class="flex flex-col items-start w-1/2 font-semibold">
        <span class="uppercase text-xs text-[#B5B5C3] font-normal">telefon raqam</span>
          {{infoPhone}}
      </p>
      <span class="absolute bottom-[-9px] py-[2px] px-[11px] text-xs bg-[#E5EBFF] text-[#3366FF]">O‘qish joyi haqida ma’lumot</span>
    </div>
  </div>
  <div class="mt-[32px] flex items-center flex-wrap gap-y-4">
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">OTM</span>
        {{infoUniversity}}
    </p>
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">Talabalik turi</span>
      <span v-if="infoType === 1">
        Bakalavr
      </span>
      <span v-if="infoType === 2">
        Magistr
      </span>
      <span v-if="infoType === 3">
        Aspirant
      </span>
    </p>
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">Ajratilingan summa</span>
        {{infoGiven}} UZS
    </p>
    <p class="flex flex-col items-start w-1/2 font-semibold">
      <span class="uppercase text-xs text-[#B5B5C3] font-normal">Kontrakt miqdori</span>
        {{infoContract}} UZS
    </p>
  </div>
</template>

<script setup>
  import { computed } from '@vue/runtime-core'
  import { useStore } from 'vuex'

  const store = useStore()

  const infoGiven = computed(() => store.state.admin_info.given.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
  const infoContract = computed(() => store.state.admin_info.contract.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
  const infoType = computed(() => store.state.admin_info.type)
  const infoUniversity = computed(() => store.state.admin_info.institute.name)
  const infoName = computed(() => store.state.admin_info.full_name)
  const infoPhone = computed(() => store.state.admin_info.phone)
</script>