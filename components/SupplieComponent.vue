<template>
    <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row items-center">
            <div class="flex flex-row">
                <div class="flex flex-col">
                    <p>{{ supply.name }}</p>
                    <p class="text-sm text-stone-300">{{ supply.type }}</p>
                </div>
                <p>{{ supply.quantity }} {{ getMeasurement() }}</p>
            </div>
            <div class="flex flex-row gap-5 ml-5">
                <p>Добавлен: {{ supply.date }}</p>
                <p>Годен до: {{ supply.dateExpiry }}</p>
            </div>
        </div>
        <div class="flex flex-row gap-4">
            <i class="bi bi-pencil-fill text-xl"></i>
            <i class="bi bi-trash3-fill text-xl"></i>
        </div>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { ref, defineProps } from 'vue';

const supply = ref({
  name: '',
  type: '',
  quantity: 0,
  measurement: 0,
  date: '',
  dateExpiry: ''
});

const props = defineProps<{
    supId: string;
}>();

axios.get('/api/supplies/supplies?option=2&id=' + props.supId).then((response) => {
  supply.value = response.data[0];
}).catch((error) => {
  console.error(error);
});

const getMeasurement = () => {
  switch (supply.value.measurement) {
    case 0: return 'гр.';
    case 1: return 'л.';
    case 2: return 'шт.';
    default: return '';
  }
};
</script>