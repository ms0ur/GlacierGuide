<template>
    <div class="p-10">
      <h1 class="text-3xl mb-4">Добавить запас</h1>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm   mb-2" for="name">
            Введите название продукта
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="supplyForm.name" placeholder="Название">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm   mb-2" for="quantity">
            Введите количество
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="supplyForm.quantity" type="number" placeholder="Кол-во">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm   mb-2" for="measurement">
            Выберете еденицу измерения
          </label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Выберете еденицу измерения"  v-model="supplyForm.measurement">
            <option value="0">Граммы</option>
            <option value="1">Литры</option>
            <option value="2">Штуки</option>
            <option value="3">Другое</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm   mb-2" for="expiryDate">
            Выберете срок годности
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" v-model="supplyForm.expiryDate" type="date" placeholder="Expiry Date">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm   mb-2" for="category">
            Введите категорию
          </label>
          <div class="relative">
            <input v-model="categoryInput" @input="catRequest" type="text" placeholder="Поиск" class="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <div v-if="filteredCategories.length" class="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg">
                <div v-for="category in filteredCategories" :key="category._id" @click="setCategory(category)" class="px-4 py-2 hover:bg-violet-500 hover:text-white">
                    {{ category.name }}
                </div>
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-grey-darker text-sm   mb-2" for="type">
            Введите тип
          </label>
          <div class="relative">
            <input v-model="typeInput" @input="typRequest" type="text" placeholder="Поиск" class="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <div v-if="filteredTypes.length" class="absolute left-0 w-full mt-1 bg-white border rounded-lg shadow-lg">
                <div v-for="type in filteredTypes" :key="type._id" @click="setType(type)" class="px-4 py-2 hover:bg-violet-500 hover:text-white">
                    {{ type.name }}
                </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-violet-500 hover:bg-violet-300 transition-colors duration-500 text-white font-bold py-2 px-4 rounded" type="button" @click="finalSend">
            Добавить
          </button>
        </div>
      </div>
    </div>
    </template>
    
<script setup>
import axios from 'axios';
const { loggedIn, user, session, clear } = await useUserSession()
const dayjs = useDayjs();
dayjs.locale('ru');


  const supplyForm = ref({
    name: '',
    quantity: '',
    measurement: '',
    date: '',
    expiryDate: '',
    category: '',
    type: '',
    user: ''
})

const filteredCategories = ref([])
const categoryInput = ref('')
const categoryID = ref('')

const filteredTypes = ref([])
const typeInput = ref('')

function setCategory(category) {
  categoryInput.value = category.name
  categoryID.value = category._id
  filteredCategories.value = []
}

function catRequest(){
    axios.get('/api/supplies/categories?option=1&name=' + categoryInput.value + '&limit=5').then((response) => {

        filteredCategories.value = response.data
    }).catch((error) => {
        console.log(error)
    })
}

function setType(category) {
  typeInput.value = category.name
  supplyForm.value.type = category._id
  filteredTypes.value = []
}

function typRequest(){
    axios.get('/api/supplies/types?option=1&name=' + typeInput.value + '&category=' + categoryID.value + '&limit=5').then((response) => {

        filteredTypes.value = response.data
    }).catch((error) => {
        console.log(error)
    })
}


function finalSend(){
    if(!supplyForm.value.name || !supplyForm.value.quantity || !supplyForm.value.measurement || !supplyForm.value.expiryDate || !supplyForm.value.category || !supplyForm.value.type) return
    const body = {
        typel: 'supply',
        name: supplyForm.value.name,
        quantity: supplyForm.value.quantity,
        measurement: supplyForm.value.measurement,
        date: new Date(),
        expiryDate: new Date(supplyForm.value.expiryDate),
        category: categoryID.value,
        type: supplyForm.value.type
    }
    supplyForm.value = {
        name: '',
        quantity: '',
        measurement: '',
        date: '',
        expiryDate: '',
        category: '',
        type: '',
        user: ''
    }

    axios.post('/api/supplies/add', body).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}


    </script>