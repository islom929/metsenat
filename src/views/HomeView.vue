<script setup>
  import UserApply from '@/components/HomeComponent/UserApply.vue'
  import TheBlockquote from '@/components/HomeComponent/TheBlockquote.vue'
</script>

<template>
<div class="bg-bg-gradient laptop:bg-white laptop:bg-none">
  <div class="
    home flex max-w-container mx-auto px-[25px] mt-[85px] overflow-x-hidden
    laptop:flex-col-reverse laptop:items-center
  ">
    <UserApply />
    <TheBlockquote />
      <svg-icon class="
        absolute top-[500px] left-[60%]
        w-[650px] h-[550px]
        desktop:left-auto desktop:right-0 desktop:w-[530px] desktop:h-[500px]
        laptop:hidden
      " name='bg' />
  </div>
</div>
</template>
