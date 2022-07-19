<script setup>
  import SponsorInfo from '@/components/AdminComponent/SponsorInfo.vue'
  import StudentInfo from '@/components/AdminComponent/StudentInfo.vue'
  import TheModal from '@/components/main/TheModal.vue'
  import TheSelect from '@/components/main/TheSelect.vue'
  import { useStore } from 'vuex'

  const store = useStore()

</script>

<template>
  <div class="w-[70%] p-[32px] bg-white rounded-lg mx-auto">
    <div class="flex items-center justify-between pb-[42px]">
      <h1 class="text-2xl font-semibold">
        {{
          store.state.admin_info.role === 'students' ? 'Talaba haqida' : 'Homiy haqida'
        }}
      </h1>

      <button @click="store.state.modalActive = true" class="text-[#3365FC] bg-[#EDF1FD] rounded-md py-[12px] px-[32px]">
        <span class="flex items-center">
          <svg-icon class="mr-2" name='edit' />
          Tahrirlash
        </span>
      </button>
    </div>
      <SponsorInfo v-if="store.state.admin_info.role === 'sponsors'" />
      <StudentInfo v-if="store.state.admin_info.role === 'students'" />
      <TheModal v-if="store.state.modalActive" title='Tahrirlash'>
        <div class="w-full flex items-center mt-10">
          <button
            @click="store.state.user_info.role = 'physical'"
            :class="`w-2/4 uppercase text-xs
            ${store.state.user_info.role === 'physical'
            ? 'rounded-l-md text-white py-3.5 bg-[#3366FF]'
            : 'border-2 border-[#3366FF] text-[#3366FF] py-3 border-r-0 opacity-60 rounded-l-md'}
          `">Jismoniy shaxs</button>
          <button
            @click="store.state.user_info.role = 'legal'"
            :class="`w-2/4  uppercase text-xs
            ${store.state.user_info.role === 'legal'
            ? 'rounded-r-md text-white py-3.5 bg-[#3366FF]'
            : 'border-2 border-[#3366FF] text-[#3366FF] border-l-0 opacity-60 py-3 rounded-r-md'}
          `">Yuridik shaxs</button>
        </div>
        <label for="legal-name" class="text-[#1D1D1F] text-xs flex flex-col items-start mt-5">
          F.I.Sh. (Familiya Ism Sharifingiz)
          <input
            type="text"
            v-model.trim="store.state.admin_info.full_name"
            class="form-control mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] text-[#1D1D1F] text-sm rounded-md"
            name="legal-name"
            required
          >
        </label>
        <label for="legal-phone" class="text-[#1D1D1F] text-xs flex flex-col items-start mt-5">
          Telefon raqamingiz
          <!-- <span class="absolute top-[34px] left-[18px] text-sm">+998</span> -->
          <input
            type="text"
            v-model.trim="store.state.admin_info.phone"
            v-maska="'+998 (##) ###-##-##'"
            class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md"
            name="legal-phone"
            required
          >
        </label>
        <div class="mt-5">
          <span>Holati</span>
          <TheSelect title='Tasdiqlangan' :arr="[{name:'Tasdiqlangan'},{name: 'Tasdiqlanmagan'}]" />
        </div>
        <div class="mt-5">
          <span>Homiylik summasi</span>
          <TheSelect title='30 000 000 UZS' :arr="[
          {name:'1 000 000 UZS'},
          {name:'3 000 000 UZS'},
          {name:'5 000 000 UZS'},
          {name:'7 000 000 UZS'},
          {name:'10 000 000 UZS'},
          {name:'15 000 000 UZS'},
          {name:'20 000 000 UZS'},
          {name:'30 000 000 UZS'},
          {name:'50 000 000 UZS'},
          ]" :top='true' />
        </div>
        <div class="mt-5">
          <span>To‘lov turi</span>
          <TheSelect title='Pul o‘tkazmalari' :arr="[{name:'Pul Ko\'chirish'},{name: 'Plastik Karta'},{name: 'Naqd Pul'}]" :top='true' />
        </div>
        <div v-if="store.state.user_info.role === 'legal'" class="mt-5">
          <span>Tashkilot nomi</span>
          <input
            type="text"
            v-model.trim="store.state.admin_info.firm"
            v-maska="'+998 (##) ###-##-##'"
            class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md"
            name="legal-phone"
            required
          >
        </div>
      </TheModal>
  </div>
</template>