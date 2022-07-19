<script setup>
  import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  const props = defineProps(['full_name', 'phone', 'sum', 'spent', 'created_at', 'status','ind', 'role', 'given', 'contract', 'university_name', 'student_type','item'])
  const store = useStore()
  const router = useRouter()

  const date = ref(new Date(props.created_at).getDate())
  const month = ref(new Date(props.created_at).getMonth())
  const year = ref(new Date(props.created_at).getFullYear())

  const getInfo = () => {
    router.push('/admin-info')
      store.state.admin_info = {...props.item, role : props.role}
  }

</script>

<template>
  <div @click="getInfo" class="text-center bg-white text-[#1D1D1F] flex items-center justify-between py-[25px] px-[20px] rounded-lg mb-[16px]">
    <p class="w-[3%]">{{props.ind}}</p>
    <p class="text-left w-[25%] capitalize">{{props.full_name}}</p>
    <p class="w-[10%]" v-if="props.role === 'students' && props.student_type === 1">
      Bakalavr
    </p>
    <p class="w-[10%]" v-if="props.role === 'students' && props.student_type === 2">
      Magistr
    </p>
    <p class="w-[10%]" v-if="props.role === 'students' && props.student_type === 3">
      Aspirant
    </p>
    <p class="w-[20%]">{{props.role === 'sponsors' ? props.phone : props.university_name}}</p>
    <p
      :class="props.role === 'sponsors' ? 'w-[15%] font-medium' : 'w-[16%] font-medium'">
      {{props.role === 'sponsors'
        ? props.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : props.given.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}}
          <span class="text-[#B2B7C1]">UZS</span></p>
    <p
      :class="props.role === 'sponsors' ? 'w-[12%] font-medium' : 'w-[16%] font-medium'">
      {{props.role === 'sponsors'
        ? props.spent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : props.contract.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}}
          <span class="text-[#B2B7C1]">UZS</span></p>
    <p v-if="props.role === 'sponsors'" class="w-[10%]">{{date + '.' + month + '.' + year}}</p>
    <p v-if="props.role === 'sponsors'"
      :class="`
        capitalize w-[10%]
        ${props.status === 'Yangi' && 'text-[#5BABF2]'}
        ${props.status === 'Moderatsiyada' && 'text-[#FFA445]'}
        ${props.status === 'Tasdiqlangan' && 'text-[#00CF83]'}
        ${props.status === 'Bekor qilingan' && 'text-[#979797]'}
      `">{{props.status}}</p>
    <p class="w-[7%]">
      <svg-icon name='eye' class="mx-auto" />
    </p>
  </div>
</template>