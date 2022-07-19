<template>
<header class="shadow bg-white">
  <nav class="py-7 px-[25px] max-w-container mx-auto flex items-center justify-between">
    <router-link class="flex items-center" to='/' exact>
      <svg-icon name='admin-logo' />
    </router-link>
    <div class="flex items-center">
      <button>
        <span class="flex items-center py-[4px] pl-[20px] pr-[4px] bg-[#F1F1F3] rounded-md">
          <span>Shohrux</span>
          <span class="pt-[8px] px-[5px] bg-[#00AE69] rounded-md ml-[24px]">
            <svg-icon name='profile' />
          </span>
        </span>
      </button>
      <router-link to='/auth' class="ml-[40px]">
        <svg-icon name='logout' />
      </router-link>
    </div>
  </nav>
</header>
</template>