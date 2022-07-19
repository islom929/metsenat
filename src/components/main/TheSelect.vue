<script setup>
  import { defineProps, reactive, ref, watchEffect } from 'vue'
  import { useStore } from 'vuex'

  const props = defineProps(['width', 'arr', 'title', 'data', 'clear', 'top'])
  const store = useStore()

  const isActive = ref(false)
  const isChecked = reactive({
    status: false,
    value: ''
  })

  watchEffect(() => {
    if (props.clear) {
      isActive.value = false
      isChecked.status = false
      isChecked.value = ''
      store.state.filter_clear = false
    }
  })
</script>

<template>
<div class="relative w-full">
  <button @click.prevent='() => {
      isActive = !isActive
      isChecked.status = false
    }' class="w-full text-[#2E384D] text-sm font-normal py-[7px] px-[16px] mt-2 border-2 border-[#E0E7FF] rounded-lg bg-[#E0E7FF] bg-opacity-20 flex items-center justify-between">
    <span>{{isChecked.status ? isChecked.value : props.title}}</span>
    <svg-icon :class="isActive ? 'rotate-180 duration-700' : 'rotate-0 duration-700'" name='arrow-bottom' />
  </button>
  <Transition name="fade">
    <div
      v-if="isActive && !isChecked.status"
      :class="`border-2 rounded-lg bg-white w-full absolute left-0 right-0 flex flex-col items-center z-10 max-h-[210px] overflow-y-scroll ${props.top ? 'top-[-220px]' : 'top-[115%]'}`">
      <div
        v-for="item of props.arr"
        :key="item"
        class="w-full" >
        <button @click.prevent='isChecked.value = item?.name, isChecked.status = true' class="px-[16px] py-[12px] border-b-2 w-full mb-0 text-xs">
          {{item?.name}}
        </button>
      </div>
    </div>
  </Transition>
</div>
</template>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>