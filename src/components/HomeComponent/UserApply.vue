<template>
  <div
    v-if="!isSubmitted"
    class="
      w-[60%] pt-[75px] pb-[130px] pr-[100px]
      laptop:w-[80%] laptop:pr-0
      tablet:w-[95%] tablet:pb-[80px] tablet:pt-[60px]
    ">
    <h1 class="text-4xl font-bold w-[80%] laptop:w-full laptop:text-3xl">Homiy sifatida ariza topshirish</h1>
    <div class="w-full flex items-center mt-10">
      <button
        @click="store.state.user.role = 'physical'"
        :class="`w-2/4 uppercase text-xs
        ${userRole === 'physical'
        ? 'rounded-l-md text-white py-3.5 bg-[#3366FF]'
        : 'border-2 border-[#3366FF] text-[#3366FF] py-3 border-r-0 opacity-60 rounded-l-md'}
      `">Jismoniy shaxs</button>
      <button
        @click="store.state.user.role = 'legal'"
        :class="`w-2/4  uppercase text-xs
        ${userRole === 'legal'
        ? 'rounded-r-md text-white py-3.5 bg-[#3366FF]'
        : 'border-2 border-[#3366FF] text-[#3366FF] border-l-0 opacity-60 py-3 rounded-r-md'}
      `">Yuridik shaxs</button>
    </div>
    <div>
      <UserForm v-if="userRole === 'physical'" />
      <UserForm v-else-if="userRole === 'legal'" />
    </div>
  </div>
  <div
    v-if="isSubmitted"
    class="flex flex-col items-center mt-[140px] w-[330px] mx-auto">
    <svg-icon name='successful' />
    <h1 class="text-[#2E384D] text-center mt-8 mb-2">Ma’lumotlar tekshirish uchun yuborildi.</h1>
    <p class="text-[#B2B7C1] text-xs text-center">Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni aniqlashtiradi.</p>
  </div>
</template>

<script setup>
  import UserForm from '@/components/HomeComponent/UserForm.vue'
  import { computed } from '@vue/runtime-core'
  import { useStore } from 'vuex'

  const store = useStore()

  const userRole = computed(() => store.state.user.role)
  const isSubmitted = computed(() => store.state.isSubmitted)
</script>