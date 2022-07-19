<script setup>
  import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

  const store = useStore()
  const router = useRouter()

  const isSubmit = () => {
    store.dispatch('postLogin')
    if (store.state.auth_status) {
      router.push('/admin')
    }
  }
</script>

<template>
  <div class="w-[370px] bg-white rounded-md p-8 mt-[40px]">
    <h1 class="text-2xl text-[#28293D] font-medium">Kirish</h1>
    <form @submit.prevent='isSubmit'>
      <div class="mt-8 mb-6">
        <label for="legal-name" class="text-[#1D1D1F] text-xs flex flex-col items-start">
          LOGIN
          <input type="text" class="form-control mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] text-[#1D1D1F] text-sm rounded-md" name="legal-name" placeholder="adm8904">
        </label>
      </div>
      <div class="relative">
        <label for="legal-phone" class="text-[#1D1D1F] text-xs flex flex-col items-start">
          PAROL
          <input type="password" class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md" name="legal-phone" placeholder="••••••••••">
        </label>
      </div>
      <button type="submit" class="w-full text-center bg-[#2E5BFF] py-[14px] mt-6 rounded-md text-white text-base">Kirish</button>
    </form>
  </div>
</template>