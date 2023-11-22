<template>
  <div v-if="loggedIn" class="flex items-center justify-between gap-5 my-5 px-5 max-md:flex-wrap max-md:justify-center">
    <NuxtImg
      loading="lazy"
      src="/logoBig.svg"
      class="aspect-[5.94] object-contain object-center w-[190px] fill-black overflow-hidden shrink-0 max-w-full my-auto"
    />
    <nav
      class="bg-zinc-100 self-stretch flex items-start justify-between gap-4 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:justify-center"
      aria-label="Main Navigation"
    >
      <a href="/" :class="{ 'bg-purple-500 text-white': $route.name === 'index' }" class="text-black text-sm font-medium leading-4 whitespace-nowrap justify-center items-center self-stretch grow px-5 py-3.5 rounded-3xl">
        Главная
      </a>
      <a href="/lists" :class="{ 'bg-purple-500 text-white': $route.name === 'lists' }" class="text-black text-sm font-medium leading-4 my-auto">Список покупок</a>
      <a href="/recipes" :class="{ 'bg-purple-500 text-white': $route.name === 'recipes' }" class="text-black text-sm font-medium leading-4 self-center my-auto">Рецепты</a>
      <a href="/supplies" :class="{ 'bg-purple-500 text-white': $route.name === 'supplies' }" class="text-black text-sm font-medium leading-4 self-center whitespace-nowrap my-auto">Запасы</a>
    </nav>
    <div class="self-stretch flex items-stretch justify-between gap-5">
      <div class="justify-between items-center border flex gap-2 px-6 py-1.5 rounded-3xl border-solid border-black max-md:px-5">
        <a @click="exit" href="#" class="text-black text-sm font-medium leading-4 my-auto">Выйти</a>
        <img
          loading="lazy"
          src="/svgs/arrowRight.svg"
          class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const { loggedIn, user, session, clear } = useUserSession()
  const exit = () => {
    clear()
    
  }
</script>
<style scoped>
</style>