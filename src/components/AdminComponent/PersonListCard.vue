<template>
  <div class="text-center bg-white text-[#1D1D1F] flex items-center justify-between py-[25px] px-[20px] rounded-lg mb-[16px]">
    <p class="w-[3%]">{{props.ind}}</p>
    <p class="text-left w-[25%] capitalize">{{props.full_name}}</p>
    <p class="w-[10%]" v-if="props.role === 'students'">
      {{studentType}}
    </p>
    <p class="w-[20%]">{{props.role === 'sponsors' ? props.phone : props.university_name}}</p>
    <p :class="props.role === 'sponsors' ? 'w-[15%] font-medium' : 'w-[16%] font-medium'">
        {{sumGiven}} <span class="text-[#B2B7C1]">UZS</span></p>
    <p :class="props.role === 'sponsors' ? 'w-[12%] font-medium' : 'w-[16%] font-medium'">
      {{spentContract}}<span class="text-[#B2B7C1]">UZS</span></p>
    <p v-if="props.role === 'sponsors'" class="w-[10%]">{{date + '.' + month + '.' + year}}</p>
    <p v-if="props.role === 'sponsors'"
      :class="`
        capitalize w-[10%] ${statusColor}
      `">{{props.status}}</p>
    <div class="w-[7%]">
      <button @click="getInfo">
        <svg-icon name='eye' class="mx-auto" />
      </button>
    </div>
  </div>
</template>

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
  const studentType = ref(null)
  const sumGiven = ref(null)
  const spentContract = ref(null)
  const statusColor = ref(null)

  if (props.student_type === 1) {
    studentType.value = 'Bakalavr'
  }else if (props.student_type === 2) {
    studentType.value = 'Magistr'
  }else if (props.student_type === 3) {
    studentType.value = 'Aspirant'
  }

  if (props.role === 'students') {
    sumGiven.value = props.given.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    spentContract.value =  props.contract.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }else if (props.role === 'sponsors') {
    sumGiven.value = props.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    spentContract.value = props.spent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  if (props.status === 'Yangi') {
    statusColor.value = 'text-[#5BABF2]'
  } else if (props.status === 'Moderatsiyada') {
    statusColor.value = 'text-[#00CF83]'
  }else if (props.status === 'Tasdiqlangan') {
    statusColor.value = 'text-[#00CF83]'
  }else if (props.status === 'Bekor qilingan') {
    statusColor.value = 'text-[#979797]'
  }

  const getInfo = () => {
    router.push('/admin-info')
    store.state.admin_info = {...props.item, role : props.role}
  }

</script>