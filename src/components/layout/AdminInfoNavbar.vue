<script setup>
  import { defineProps } from 'vue'
  import { useStore } from 'vuex'

  const props = defineProps(['title'])
  const store = useStore()
</script>

<template>
  <div class="bg-white w-full left-0 right-0 fixed top-[92px]">
    <div class="max-w-container mx-auto px-[25px] py-[24px] flex items-center justify-between">
      <div class="flex items-center">
        <router-link  to='/admin'>
          <span>
            <svg-icon name='arrow-left' />
          </span>
        </router-link>
        <h1 class="text-2xl font-semibold ml-[7px] capitalize">{{props.title}}</h1>
        <span v-if="store.state.admin_info.role === 'sponsors'" class="px-[12px] py-[3px] bg-[#DDFFF2] ml-[12px] text-[#00CF83] rounded-lg">
          Tasdiqlangan
        </span>
      </div>
        <button v-if="store.state.admin_info.role === 'students'" class="px-[32px] py-[9px] bg-[#EDF1FD] rounded-lg text-[#3365FC]">
          <span class="flex items-center">
            <svg-icon class="mr-2" name='plus' fill='#3365FC' />
            Homiy qo‘shish
          </span>
        </button>
    </div>
  </div>
</template>