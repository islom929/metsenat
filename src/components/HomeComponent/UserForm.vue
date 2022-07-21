<template>
  <div>
    <form @submit.prevent='onSubmit'>
      <div class="my-8">
        <label for="legal-name" class="text-[#1D1D1F] text-xs flex flex-col items-start">
          F.I.Sh. (Familiya Ism Sharifingiz)
          <input
            type="text"
            v-model.trim="store.state.user.full_name"
            class="form-control mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] text-[#1D1D1F] text-sm rounded-md"
            name="legal-name"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            required
          >
        </label>
      </div>
      <div class="relative">
        <label for="legal-phone" class="text-[#1D1D1F] text-xs flex flex-col items-start">
          Telefon raqamingiz
          <input
            type="text"
            v-model.trim="store.state.user.phone"
            v-maska="'+998 (##) ###-##-##'"
            class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md"
            name="legal-phone"
            placeholder="+998 00 000-00-00"
            required
          >
        </label>
      </div>
      <div class="flex items-center justify-between gap-y-4 flex-wrap mt-8">
        <h3 class="w-full text-xs text-[#1D1D1F]">To‘lov summasi</h3>
        <label class="relative w-[31%] h-[60px] mobile:w-[48%]">
          <button :class="`absolute left-0 right-0 top-0 bottom-0 text-lg text-[#2E384D] font-medium border-2 rounded-md ${userPayment === '1000000' ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'} tablet-min:text-base`">
            1 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="userPayment === '1000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <input
            type="radio"
            @input='paymentFunc'
            class="w-full h-[60px] opacity-0 cursor-pointer"
            name="price"
            value="1000000">
        </label>
        <label class="relative w-[31%] h-[60px] mobile:w-[48%]">
          <button :class="`absolute left-0 right-0 top-0 bottom-0 tablet-min:text-base text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${userPayment === '5000000' ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'}`">
            5 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="userPayment === '5000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <input
            type="radio"
            class="w-full h-[60px] opacity-0 cursor-pointer"
            @input='paymentFunc'
            name="price"
            value="5000000">
        </label>
        <label class="relative w-[31%] h-[60px] mobile:w-[48%]">
          <button :class="`absolute left-0 right-0 top-0 bottom-0 tablet-min:text-base text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${userPayment === '7000000' ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'}`">
            7 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="userPayment === '7000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <input
            type="radio"
            class="w-full h-[60px] opacity-0 cursor-pointer"
            @input='paymentFunc'
            name="price"
            value="7000000">
        </label>
        <label class="relative w-[31%] h-[60px] mobile:w-[48%]">
          <button :class="`absolute left-0 right-0 top-0 bottom-0 tablet-min:text-base text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${userPayment === '10000000' ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'}`">
            10 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="userPayment === '10000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <input
            type="radio"
            class="w-full h-[60px] opacity-0 cursor-pointer"
            @input='paymentFunc'
            name="price"
            value="10000000">
        </label>
        <label class="relative w-[31%] h-[60px] mobile:w-[48%]">
          <button :class="`absolute left-0 right-0 top-0 bottom-0 tablet-min:text-base text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${userPayment === '30000000' ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'}`">
            30 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="userPayment === '30000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <input
            type="radio"
            class="w-full h-[60px] opacity-0 cursor-pointer"
            @input='paymentFunc'
            name="price"
            value="30000000">
        </label>
        <label class="relative w-[31%] h-[60px] mobile:w-[48%]">
          <button
            @click.prevent="() => {
              paymentMore = !paymentMore
              paymentMore ? store.state.user.payment = 0 : ''
              }"
            :class="`absolute left-0 right-0 top-0 bottom-0 tablet-min:text-base text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${paymentMore ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'}`">
            Boshqa
            <svg-icon v-if="paymentMore" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
        </label>
        <label  v-if="paymentMore" for="payment-more" class="text-[#1D1D1F] w-full text-xs flex flex-col items-start">
          <input
            type="number"
            v-model="userPayment"
            class="form-control text-[#1D1D1F] text-sm mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] rounded-md"
            name="payment-more"
          >
        </label>
      </div>
      <div class="mt-4" v-if="userRole === 'legal'">
        <label for="organization" class="text-[#1D1D1F] text-xs flex flex-col items-start">
          Tashkilot nomi
          <input
            type="text"
            v-model="store.state.user.organization"
            class="form-control mt-2 block w-full px-4 py-2 bg-[#e0e7ff50] border-2 border-[#E0E7FF] text-[#1D1D1F] text-sm rounded-md"
            name="organization"
            placeholder="Orient group"
          >
        </label>
      </div>
      <button class="w-full bg-[#2E5BFF] py-[14px] mt-8 rounded-md text-white text-base" type="submit">Yuborish</button>
    </form>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'

  const paymentMore = ref(false)
  const store = useStore()

  const userPayment = computed(() => store.state.user.payment)
  const userRole = computed(() => store.state.user.role)

  const paymentFunc = evt => {
    paymentMore.value = false
    store.state.user.payment = evt.target.value
  }

  const onSubmit = () => {
    store.state.isSubmitted = true
    store.dispatch('postUserData')
  }
</script>