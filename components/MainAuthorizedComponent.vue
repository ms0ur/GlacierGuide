<template>
    <div class="px-5">
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div class="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
          <div class="flex grow flex-col">
            <NuxtImg
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a7ad29-22b4-408d-94b5-d0accea0ea57?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
              class="aspect-[0.95] object-contain object-center w-10 fill-purple-500 overflow-hidden max-w-full"
            />
            <div class="text-black text-3xl font-semibold leading-10 self-stretch mt-10">
              Приветствую, Иван
            </div>
            <div class="shadow-sm bg-black self-stretch flex flex-col items-stretch mt-14 pt-12 rounded-3xl max-md:mt-10">
              <NuxtImg
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56976947-8e20-4859-9978-5889907c8a06?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
                class="aspect-[2.07] object-contain object-center w-full overflow-hidden"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
          <div class="justify-center items-center shadow-sm bg-stone-50 flex grow flex-col w-full mx-auto px-20 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
            <NuxtImg
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/85e9db11-79a8-4624-ac1d-9742c2de7d8b?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
              class="aspect-[2.17] object-contain object-center w-[286px] fill-black overflow-hidden max-w-full mt-11 max-md:mt-10"
            />
            <div class="text-black text-center text-base font-semibold leading-5 max-w-[413px] mt-11 mb-11 max-md:my-10">
              Проект который поможет людям решить проблему с запасами продуктов в полюсе холода
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
            <div class="w-80 h-96 bg-purple-800 rounded-2xl shadow flex-col justify-end items-center inline-flex">
                <img class="w-80 h-96 rounded-2xl self-center" src="https://via.placeholder.com/306x531" />
            </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts"></script>