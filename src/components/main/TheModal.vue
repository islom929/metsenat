<template>
  <div class="w-full bg-black bg-opacity-40 fixed left-0 right-0 top-0 bottom-0 z-50 h-screen flex flex-col items-center justify-center">
    <div class="w-[580px] h-auto  p-[24px] rounded-lg bg-white shadow-md">
      <div class="flex items-center justify-between pb-[24px] border-b-2">
        <h1 class="text-2xl font-semibold">{{props.title}}</h1>

        <button @click="store.state.modalActive = false" class="">
          <svg-icon name='close-menu' fill='#B2B7C1' />
        </button>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import { useStore } from 'vuex'

  const props = defineProps(['title'])
  const store = useStore()
</script>