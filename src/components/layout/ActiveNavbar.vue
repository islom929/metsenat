<template>
  <ul :class="`
    list-none text-sm flex
    flex-col absolute right-0 top-0 gap-y-10 items-center mt-[90px] pt-10 z-0 bg-white w-[250px] shadow-md h-screen
  `">
    <li>
      <router-link class="whitespace-nowrap" to="/main">Asosiy</router-link>
    </li>
    <li class="ml-10 laptop:ml-5 tablet-min:m-0">
      <router-link class="whitespace-nowrap" to="/grants">Grantlar</router-link>
    </li>
    <li class="ml-10 laptop:ml-5 tablet-min:m-0">
      <router-link class="whitespace-nowrap" to="/privileges">Soliq imtiyozlari</router-link>
    </li>
    <li class="ml-10 laptop:ml-5 tablet-min:m-0">
      <router-link class="text-sm flex items-center font-semibold whitespace-nowrap tablet:text-xs tablet:font-medium" to="/auth?login">
        <svg-icon class="tablet:w-[18px] tablet:h-[18px]" name='login' />
        Kirish
      </router-link>
    </li>
    <li>
      <router-link class="
        border-[#3366FF] border-2 rounded-md py-2 px-8 ml-10 text-[#3366FF] text-sm font-semibold whitespace-nowrap
        laptop:ml-5 laptop:px-6 laptop:py-[8px] laptop:font-medium laptop:text-xs
        tablet-min:m-0
      " to="/auth?registration">Ro‘yxatdan o’tish</router-link>
    </li>
  </ul>
</template>