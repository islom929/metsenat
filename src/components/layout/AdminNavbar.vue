<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
</script>

<template>
  <div class="bg-white w-full left-0 right-0 fixed top-[92px]">
    <div  class="max-w-container mx-auto px-[25px] flex items-center justify-between">
      <ul class="list-none w-2/4 flex items-center rounded-md py-[24px]">
        <li class="w-1/3">
          <button @click="store.state.adminActive = 'dashboard'" :class="`py-2 text-sm font-medium border-[2px] border-transparent rounded-l-lg w-full ${store.state.adminActive === 'dashboard' ? 'bg-[#3366FF] text-white' : 'border-[#DDE3FB] text-[#3366ffa1]'}`">Dashboard</button>
        </li>
        <li class="w-1/3">
          <button @click="store.state.adminActive = 'sponsors'" :class="`py-2 text-sm font-medium border-x-0 border-transparent  border-[2px] w-full ${store.state.adminActive === 'sponsors' ? 'bg-[#3366FF] text-white' : 'border-[#DDE3FB] text-[#3366ffa1]'}`">Homiylar</button>
        </li>
        <li class="w-1/3">
          <button @click="store.state.adminActive = 'students'" :class="`py-2 text-sm font-medium border-[2px] border-transparent  rounded-r-lg w-full ${store.state.adminActive === 'students' ? 'bg-[#3366FF] text-white' : 'border-[#DDE3FB] text-[#3366ffa1]'}`">Talabalar</button>
        </li>
      </ul>
      <div v-if="store.state.adminActive !== 'dashboard'" class="w-[35%] flex justify-between">
        <span class="w-4/6 relative">
          <svg-icon class="absolute top-[8px] left-[10px]" name='search' />
          <input type="search" class="bg-[#E8E8E8] text-sm p-2 pl-10 rounded-md w-full" name="search" placeholder="Izlash">
        </span>
        <button
          @click="store.state.modalActive = true"
          class="bg-[#EDF1FD] text-[#3365FC] flex items-center py-1 px-7 rounded-md">
          <svg-icon class="mr-2" name='filter' />
          Filter
        </button>
      </div>
    </div>
  </div>
</template>