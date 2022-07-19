<script setup>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

  const store = useStore()

  const count = computed(() => {
    if (store.state.adminActive === 'sponsors') {
      return  Math.ceil(store.state.sponsor_count / 10)
    } else if (store.state.adminActive === 'students') {
      return Math.ceil(store.state.student_count / 10)
    }
  })

  const page = computed(() => {
    if (store.state.adminActive === 'sponsors') {
      return store.state.sponsor_page
    } else if (store.state.adminActive === 'students') {
      return store.state.student_page
    }
  })

</script>

<template>
  <div class="flex items-center justify-between mt-[28px] mb-[80px]">
    <span class="whitespace-nowrap">
      {{count}} tadan  1-10 ko‘rsatilmoqda
    </span>
    <div>
      <!-- <span>
        Ko‘rsatish
        <select name="pegination">
          <option v-for="(num, ind) of count" :key="num" :value="ind + 1">{{ind + 1}}</option>
        </select>
      </span> -->
      <button
        @click="() => {
          if (store.state.adminActive === 'sponsors') {
            store.state.sponsor_page -= 1
            store.dispatch('getSponsorList')
          } else if (store.state.adminActive === 'students') {
            store.state.student_page -= 1
            store.dispatch('getStudentList')
          }
        }"
        :disabled='page < 2'
        class="px-[12px] py-[10px] border-2 rounded-lg bg-white disabled:bg-transparent mr-5">
        <svg-icon name='arrow-left-gray' />
      </button>
      {{page}}
      <button
        @click="() => {
          if (store.state.adminActive === 'sponsors' && page !== count) {
            store.state.sponsor_page += 1
            store.dispatch('getSponsorList')
          } else if (store.state.adminActive === 'students' && page !== count) {
            store.state.student_page += 1
            store.dispatch('getStudentList')
          }
        }"
        :disabled='page == count'
        class="px-[12px] py-[10px] border-2 rounded-lg ml-5 bg-white disabled:bg-transparent">
        <svg-icon name='arrow-right-gray' />
      </button>
    </div>
  </div>
</template>