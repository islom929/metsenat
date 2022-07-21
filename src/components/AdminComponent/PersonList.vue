<template>
  <div v-if="adminStatus" class="w-full">
    <router-link
      to="/student-create"
      @click="store.state.adminInfo_active = 'add-student'"
      v-if="adminActive === 'students'"
      class="flex items-center justify-center w-[18%] py-[12px] px-[20px] ml-auto mb-[26px] bg-[#3366FF] rounded-lg text-white  font-medium"
      >
      <span class="pr-[14px]">
        <svg-icon name='plus' fill='white' />
      </span>
    Talaba qo‘shish</router-link>
    <PersonListTitle :role='adminActive' />
  <div>
    <PersonListCard
      v-for="(item, index) in users"
      :item='item'
      :key="item.id"
      :id='item.id'
      :role='adminActive'
      :ind='index + 1'
      :full_name='item.full_name'
      :phone='item.phone'
      :sum='item.sum'
      :spent='item.spent'
      :given='item.given'
      :contract='item.contract'
      :university_name='item?.institute?.name'
      :student_type='item.type'
      :created_at='item.created_at'
      :status='item.get_status_display'
    />

    <AdminPagination />
    </div>
  <Transition>
    <TheModal v-if="modalActive && adminActive === 'students'" title='Filter'>
      <div class="flex flex-col mt-[20px] text-xs">
        <p>Talabalik turi</p>
        <TheSelect
          :arr='studentType'
          title='Barchasi'
          width='100%'
          :clear='filterClear'
        />
      </div>
      <div class="flex flex-col mt-[20px] text-xs border-b-2 pb-[28px]">
        <p>OTM</p>
        <TheSelect
          :arr='universityList'
          title='Barchasi'
          width='100%'
          :clear='filterClear'
        />
      </div>
      <div class="flex items-center justify-end text-sm w-full mt-[28px]">
        <button @click="store.state.filter_clear = true" class="py-[9px] px-[28px] border-2 border-[#3366FF] rounded-lg">
          <span class="flex items-center text-[#3366FF]">
           <span class="mr-2"><svg-icon name='clear' /></span> Tozalash
          </span>
        </button>
        <button class="py-[9px] px-[28px] ml-4 border-2 border-transparent bg-[#3366ff] rounded-lg">
        <span  class="flex items-center text-white whitespace-nowrap">
          <span class="mr-2">
            <svg-icon name='eye-white' /></span>
          Natijalarni ko‘rish
        </span>
        </button>
      </div>
    </TheModal>
  </Transition>
  <Transition>
    <TheModal v-if="modalActive && adminActive === 'sponsors'" title='Filter'>
      <div class="flex flex-col mt-[20px] text-xs">
        <p>Ariza holati</p>
        <TheSelect
          :arr='sponsor_type'
          title='Barchasi'
          width='100%'
          :clear='filterClear'
        />
      </div>
      <div class="flex flex-col mt-[20px] text-xs border-b-2 pb-[28px]">
        <p>Homiylik summasi</p>

        <div class="flex items-center justify-between gap-y-4 flex-wrap mt-2">
          <button
            @click.prevent="store.state.sponsor_filter.sum = 'all'"
            :class="`relative w-[31%] h-[60px] text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${filterSum === 'all' ? 'border-[#2E5BFF]' : 'border-[#E0E7FF]'}`">
            Barchasi
            <svg-icon v-if="filterSum === 'all'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <button @click.prevent="store.state.sponsor_filter.sum = '1000000'" :class="`relative w-[31%] h-[60px] text-lg text-[#2E384D] font-medium border-2 rounded-md ${filterSum === '1000000' ? 'border-[#2E5BFF] bg-[#F9FAFF]' : 'border-[#E0E7FF]'}`">
            1 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="filterSum === '1000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <button @click.prevent="store.state.sponsor_filter.sum = '5000000'" :class="`relative w-[31%] h-[60px] text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${filterSum === '5000000' ? 'border-[#2E5BFF] bg-[#F9FAFF]' : 'border-[#E0E7FF]'}`">
            5 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="filterSum === '5000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <button @click.prevent="store.state.sponsor_filter.sum = '7000000'" :class="`relative w-[31%] h-[60px] text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${filterSum === '7000000' ? 'border-[#2E5BFF] bg-[#F9FAFF]' : 'border-[#E0E7FF]'}`">
            7 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="filterSum === '7000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <button @click.prevent="store.state.sponsor_filter.sum = '10000000'" :class="`relative w-[31%] h-[60px] text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${filterSum === '10000000' ? 'border-[#2E5BFF] bg-[#F9FAFF]' : 'border-[#E0E7FF]'}`">
            10 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="filterSum === '10000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
          <button @click.prevent="store.state.sponsor_filter.sum = '30000000'" :class="`relative w-[31%] h-[60px] text-lg text-[#2E384D] font-medium border-2 border-[#E0E7FF] rounded-md ${filterSum === '30000000' ? 'border-[#2E5BFF] bg-[#F9FAFF]' : 'border-[#E0E7FF]'}`">
            30 000 000
            <span class="text-xs text-[#2E5BFF]">uzs</span>
            <svg-icon v-if="filterSum === '30000000'" class="absolute top-[-10px] right-[-10px]" name='check' />
          </button>
      </div>
      <div class="mt-[28px]">
        <p>Sana</p>
        <input class="w-[50%] text-[#2E384D] text-sm font-normal py-[7px] px-[16px] mt-2 border-2 border-[#E0E7FF] rounded-lg bg-[#E0E7FF] bg-opacity-20 " type="date">
      </div>
      </div>
      <div class="flex items-center justify-end text-sm w-full mt-[28px]">
        <button @click="store.state.filter_clear = true, store.state.sponsor_filter.sum = ''" class="py-[9px] px-[28px] border-2 border-[#3366FF] rounded-lg">
          <p class="flex items-center text-[#3366FF]">
           <span class="mr-2"><svg-icon name='clear' /></span> Tozalash
          </p>
        </button>
        <button class="py-[9px] px-[28px] ml-4 border-2 border-transparent bg-[#3366ff] rounded-lg">
        <p  class="flex items-center text-white whitespace-nowrap">
          <span class="mr-2"><svg-icon name='eye-white' /></span>
          Natijalarni ko‘rish
        </p>
        </button>
      </div>
    </TheModal>
  </Transition>
  </div>
</template>

<script setup>
  import { computed, reactive } from '@vue/runtime-core'
  import { useStore } from 'vuex'
  import PersonListCard from '@/components/AdminComponent/PersonListCard.vue'
  import PersonListTitle from '@/components/AdminComponent/PersonListTitle.vue'
  import AdminPagination from '@/components/AdminComponent/AdminPagination.vue'
  import TheSelect from '@/components/main/TheSelect.vue'
  import TheModal from '@/components/main/TheModal.vue'

  const store = useStore()

  if (store.state.adminActive === 'sponsors') {
    store.dispatch('getSponsorList')
  }else if (store.state.adminActive === 'students') {
    store.dispatch('getStudentList')
    store.dispatch('getUniversityList')
  }

  const users = computed(() => {
    if (store.state.adminActive === 'sponsors') {
      return store.state.sponsor_list
    }else if (store.state.adminActive === 'students') {
      return store.state.student_list
    }
  })

  const adminActive = computed(() => store.state.adminActive)
  const universityList = computed(() => store.state.university_list)
  const modalActive = computed(() => store.state.modalActive)
  const adminStatus = computed(() => store.state.admin_status)
  const studentType = computed(() => store.state.student_type)
  const filterClear = computed(() => store.state.filter_clear)
  const filterSum = computed(() => store.state.sponsor_filter.sum)

  const sponsor_type = reactive([
    { name: 'Barchasi'},
    { name: 'Yangi'},
    { name: 'Moderatsiyada'},
    { name: 'Tasdiqlangan'},
    { name: 'Bekor qilingan'}
  ])
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>