<template>
<div class="flex items-center p-[24px] w-full rounded-md">
  <span :class="`bg-[${props.color}] bg-opacity-10 p-[14px] rounded-xl`">
    <svg-icon name='money' :fill="props.color" />
  </span>
  <span class="ml-[16px]">
    <h3 class="text-xs text-[#7A7A9D]">{{props.title}}</h3>
    <p class="text-xl tet-[#2E384D]">{{price}}<span class="text-[#B2B7C1] ml-2">UZS</span></p>
  </span>
</div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'

  const props = defineProps(['color', 'price', 'title'])
  
  const price = ref(props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '))
</script>