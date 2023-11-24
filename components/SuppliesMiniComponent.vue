<template>
    <div class="flex flex-col">
      <div class="flex max-w-full gap-4 px-5 max-md:flex-wrap">
        <h1 class="text-black text-3xl font-semibold leading-10 grow shrink basis-auto mt-6 max-md:max-w-full">
          Это <span class="text-[#5FA8DC]">Ваш</span> список продуктов
        </h1>
        <NuxtImg
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1514925-8168-4e0a-8059-c0036e6ed655?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
          class="aspect-[0.97] object-contain object-center w-[29px] fill-blue-400 overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
      <main class="self-stretch w-full mt-5 max-md:max-w-full">
        <div class="gap-5 flex flex-row-reverse max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div class="flex flex-col bg-stone-100 rounded-3xl items-stretch w-[69%] max-md:w-full max-md:ml-0">
            <div v-for="supply in supplies" class="bg-stone-200 my-1 flex grow flex-col items-stretch w-full mx-auto pl-7 pr-7 py-6 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div class="flex  flex-row justify-between items-center">
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row gap-5">
                            <div class="flex flex-col">
                                <p>{{ supply.name }}</p>
                                <p class="text-sm text-stone-300">{{ getType(supply.type) }}</p>
                            </div>
                            <p>{{ supply.quantity }} {{ getMeasurement(supply.measurement) }}</p>
                        </div>
                        <div class="flex flex-row gap-5 ml-5">
                            <p>Добавлен: {{ supply.date }}</p>
                            <p>Годен до: {{ supply.expiryDate }}</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-4">
                        <i class="bi bi-pencil-fill text-xl"></i>
                        <i class="bi bi-trash3-fill text-xl"></i>
                    </div>
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
  <script setup lang="ts">
import axios from 'axios';
const dayjs = useDayjs()
dayjs.locale('ru')

let supplies = ref<any[]>([]);

console.log('loading')
axios.get('/api/supplies/supplies?option=3&limit=4').then((response) => {

  supplies.value = response.data
  supplies.value.forEach((supply: any) => {
    supply.date = getNiceDateFormat(supply.date)
    supply.expiryDate = getNiceDateFormat(supply.expiryDate)
  })
  console.log(supplies.value)
  
}).catch((error) => {
  console.log(error)
})

const getType = (id: number) => {
    axios.get('/api/supplies/types?option=2&id='+ id).then((response) => {
        return response.data.name
    }).catch((error) => {
        console.log(error)
    })
  }

const getMeasurement = (num: number) => {
  switch (num) {
    case 0: return 'гр.';
    case 1: return 'л.';
    case 2: return 'шт.';
    default: return '';
  }
}

const getNiceDateFormat = (date: Date) => {
  return dayjs(date).format('DD.MM.YYYY')
}
</script>