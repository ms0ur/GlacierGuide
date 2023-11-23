<template>
    <div class="flex flex-col">
      <div class="flex max-w-full gap-4 px-5 max-md:flex-wrap">
        <h1 class="text-black text-3xl font-semibold leading-10 grow shrink basis-auto mt-6 max-md:max-w-full">
          Это Ваш список продуктов
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d22b055-83c7-470c-82ea-b6bf21b5f8f7?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
          class="aspect-[0.97] object-contain object-center w-[29px] fill-blue-400 overflow-hidden shrink-0 max-w-full self-start"
          alt=""
        />
      </div>
      <main class="self-stretch w-full mt-5 max-md:max-w-full">
        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
            <div class="bg-zinc-100 flex grow flex-col items-stretch w-full mx-auto pl-7 pr-7 py-6 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div class="text-black text-sm font-medium leading-4 whitespace-nowrap bg-stone-200 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-2.5">
                <SupplieComponent />
              </div>
              <div class="text-black text-sm font-medium leading-4 whitespace-nowrap bg-stone-200 mt-5 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-2.5">
                Продукт такой-то
              </div>
              <div class="text-black text-sm font-medium leading-4 whitespace-nowrap bg-stone-200 mt-5 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-2.5">
                Продукт такой-то
              </div>
              <div class="text-black text-sm font-medium leading-4 whitespace-nowrap bg-stone-200 mt-5 px-5 py-6 rounded-3xl max-md:max-w-full max-md:pl-2.5">
                Продукт такой-то
              </div>
            </div>
          </div>
          <div class="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <div class="flex grow flex-col items-stretch mt-7 px-5 max-md:mt-10">
              <div class="text-black text-xl font-medium leading-6 -mr-5">
                Повседневная практика показывает, что дальнейшее развитие различных форм деятельности создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса кластеризации усилий.
                <br />
              </div>
              <a
                href="#"
                class="justify-between items-center border border-[color:var(--foundation-blue-normal,#69BBF4)] flex gap-2 -mr-5 mt-11 pl-6 pr-12 py-1.5 rounded-3xl border-solid max-md:mt-10 max-md:px-5"
              >
                <div class="text-black text-sm font-medium leading-4 my-auto">Перейти к полному списку</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/043fba5a-6893-4d8a-b6de-559b833da36e?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
                  class="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  <script setup lang="ts"></script>