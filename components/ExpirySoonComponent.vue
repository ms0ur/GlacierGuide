<template>
    <div class="shadow-sm bg-red-300 flex flex-col px-6 rounded-3xl max-md:px-5">
      <header class="flex w-[383px] max-w-full gap-0.5 mt-6 self-start">
        <h2 class="text-white text-2xl font-semibold leading-7 grow shrink basis-auto mt-2.5">
          Срок годности скоро истечет
        </h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/883caebc-0c13-47b2-abc0-61aab407ade5?apiKey=c03f079cc2ee4fd991733212d5b28bc9&"
          class="aspect-[0.94] object-contain object-center w-[17px] fill-black overflow-hidden shrink-0 max-w-full"
          alt=""
        />
      </header>
      <hr class="bg-zinc-50 self-stretch shrink-0 h-px mt-4 max-md:max-w-full" />
      <div v-for="(supply , index) in supplies"  class="items-center self-stretch flex justify-between gap-4 mt-4 pr-1.5 max-md:max-w-full max-md:flex-wrap">
        <div class="text-white text-center text-2xl font-semibold leading-7 my-auto">0{{ index+1 }}</div>
        <div class="bg-red-400 self-center flex w-[574px] shrink-0 h-12 flex-col rounded-3xl max-md:max-w-full">
          <div class="flex mx-3 flex-row justify-between items-end">
                    <div class="flex flex-row items-center">
                        <div class="flex flex-row gap-5">
                            <div class="flex flex-col text-white">
                                <p>{{ supply.name }}</p>
                                <p class="text-sm text-stone-300">{{ getType(supply.type) }}</p>
                            </div>
                            <p class="text-white">{{ supply.quantity }} {{ getMeasurement(supply.measurement) }}</p>
                        </div>
                        <div class="flex flex-row text-white gap-5 ml-5">
                            <p>Годен до: {{ supply.expiryDate }}</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
      
    </div>
  </template>

<script setup lang="ts">
import axios from 'axios';
const dayjs = useDayjs()
dayjs.locale('ru')

let supplies = ref<any[]>([]);

console.log('loading')
axios.get('/api/supplies/supplies??option=4&limit=4').then((response) => {

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