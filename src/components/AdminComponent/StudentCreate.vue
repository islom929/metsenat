<script setup>
  import TheSelect from '@/components/main/TheSelect.vue'
  import { computed } from '@vue/runtime-core'
  import { useRouter } from 'vue-router'
  import {  useStore } from 'vuex'


  const store = useStore()
  const router = useRouter()

  store.dispatch('getUniversityList')

  const universityList = computed(() => store.state.university_list)

  const onSubmit = () => {
    store.dispatch('postCreateStudent')
    router.push('/admin')
  }

</script>

<template>
<div class="p-[28px] mx-auto w-[70%] bg-white rounded-lg">
  <form @submit.prevent='onSubmit'>
    <div class="mb-8 border-b-2">
      <div class="my-8 flex items-center justify-between gap-x-6">
        <label for="legal-name" class="text-[#1D1D1F] w-[50%] text-xs flex flex-col items-start uppercase font-semibold">
          F.I.Sh. (Familiya Ism Sharifingiz)
          <input
            type="text"
            v-model.trim="store.state.student.full_name"
            class="form-control mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] text-[#1D1D1F] text-sm rounded-md font-normal"
            name="legal-name"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            required
          >
        </label>
        <label for="legal-phone" class="text-[#1D1D1F] w-[50%] text-xs flex flex-col items-start uppercase font-semibold">
          Telefon raqamingiz
          <input
            type="text"
            v-model.trim="store.state.student.phone"
            v-maska="'+998 (##) ###-##-##'"
            class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md font-normal"
            name="legal-phone"
            placeholder="+998 00 000-00-00"
            required
          >
        </label>
      </div>
      <label class="text-[#1D1D1F] text-xs flex flex-col items-start uppercase font-semibold">
        OTM
        <TheSelect
          width='100%'
          title="OTM ni tanlang"
          :arr='universityList'
          :data='store.state.student.institute'
        />
      </label>
      <div class="my-8 flex items-center justify-between gap-x-6">
        <label class="text-[#1D1D1F] w-[50%] text-xs font-semibold flex flex-col items-start uppercase">
          Talabalik turi
          <TheSelect
            width='100%'
            title="Barchasi"
            :arr='store.state.student_type'
            :data='store.state.student.type'
          />
        </label>
        <label for="legal-phone" class="text-[#1D1D1F] w-[50%] text-xs flex flex-col items-start uppercase font-semibold">
          Kontrakt summa
          <input
            type="text"
            v-model.trim="store.state.student.contract"
            class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md font-normal"
            name="legal-phone"
            placeholder="Summani kiriting"
            required
          >
        </label>
      </div>
    </div>
    <button class="w-[22%] bg-[#2E5BFF]  px-[14px] py-[10px] ml-auto rounded-md text-white text-base flex justify-center" type="submit">
      <span class="flex items-center">
        <svg-icon class="mr-3" name='plus' fill='white' />
        Qo‘shish
      </span>
    </button>
  </form>
</div>
</template>