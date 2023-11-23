<template>
    <div class="flex flex-col items-stretch">
      <div class="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <NuxtImg
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6412323e-bd62-4621-959a-75e60f01d97d?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
          class="aspect-[5.94] object-contain object-center w-[190px] fill-black overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div class="self-stretch flex items-stretch justify-between gap-5">
          <NuxtLink to="/login" class="text-white text-sm font-medium leading-4 whitespace-nowrap justify-center items-center bg-red-400 grow px-5 py-3.5 rounded-3xl">
            Войти
          </NuxtLink>
          <NuxtLink to="/register" class="justify-between items-center border flex gap-2 px-6 py-1.5 rounded-3xl border-solid border-black max-md:px-5">
            <div class="text-black text-sm font-medium leading-4 my-auto">Регистрация</div>
            <NuxtImg
              loading="lazy"
              src="/svgs/arrowRight.svg"
              class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="self-center font-header flex w-[746px] max-w-full flex-col items-stretch mt-44 px-5 max-md:mt-10">
        <div class="text-black text-5xl font-header leading-[61px] -mr-5 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
          Следите за своими
        </div>
        <div class="text-black text-5xl font-header italic leading-[61px] whitespace-nowrap -mr-5 mt-9 self-end max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
          <span class="text-purple-500">запасами</span><span class="text-black"> с нами</span>
        </div>
      </div>
      <div class="flex w-[368px] max-w-full items-stretch gap-0 mt-20 self-start max-md:mt-10">
        <NuxtImg
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c86da62-742f-4467-8089-37bf1153a99b?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
          class="aspect-[0.83] object-contain object-center w-52 overflow-hidden shrink-0 max-w-full"
        />
        <div class="bg-zinc-100 flex grow basis-[0%] flex-col items-center mt-24 px-5 py-10 rounded-3xl self-end max-md:mt-10">
          <NuxtImg
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6687ea92-36ea-407e-98fe-759351770274?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
            class="aspect-[0.96] object-contain object-center w-[82px] fill-purple-500 overflow-hidden max-w-full"
          />
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts"></script>