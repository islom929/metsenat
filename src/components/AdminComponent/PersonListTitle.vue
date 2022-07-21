<template>
  <div class="text-xs text-[#B1B1B8] w-full flex items-center justify-between px-[20px] mb-[12px] text-center uppercase">
    <span :class="props.role === 'sponsors' ? 'w-[3%]' : 'w-[3%]'">#</span>
    <span class="w-[25%] text-left">f.i.sh.</span>
    <span :class="props.role === 'sponsors' ? 'w-[18%]' : 'w-[10%]'">{{props.role === 'sponsors' ? 'Tel.Raqami' : 'Talabalik turi'}}</span>
    <span :class="props.role === 'sponsors' ? 'w-[15%]' : 'w-[20%]'">{{props.role === 'sponsors' ? 'Homiylik summasi' : 'OTM'}}</span>
    <span :class="props.role === 'sponsors' ? 'w-[12%]' : 'w-[16%]'">{{props.role === 'sponsors' ? 'Sarflangan summa' : 'Ajratilingan summa'}}</span>
    <span :class="props.role === 'sponsors' ? 'w-[10%]' : 'w-[16%]'">{{props.role === 'sponsors' ? 'Sana' : 'Kontrakt miqdori'}}</span>
    <span v-if="props.role === 'sponsors'" class="w-[10%]">Holati</span>
    <span :class="props.role === 'sponsors' ? 'w-[7%]' : 'w-[7%]'">Amallar</span>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps(['role'])
</script>