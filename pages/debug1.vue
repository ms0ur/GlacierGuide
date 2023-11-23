<template>
    <form @submit.prevent="addType">
        <input v-model="typeForm.name" placeholder="Name">
        <input v-model="typeForm.category" placeholder="Category">
        <button type="submit">Add Type</button>
    </form>
    <form @submit.prevent="addCategory">
        <input v-model="categoryForm.name" placeholder="Name">
        <select v-model="categoryForm.type">
            <option value="1">Еда</option>
            <option value="2">Напитки</option>
            <option value="3">Медикаменты</option>
            <option value="4">Другое</option>
        </select>
        <button type="submit">Add Category</button>
    </form>
    <form @submit.prevent="addSupply">
        <input v-model="supplyForm.name" placeholder="Name">
        <input v-model="supplyForm.quantity" type="number" placeholder="Quantity">
        <select v-model="supplyForm.measurement">
            <option value="0">Граммы</option>
            <option value="1">Литры</option>
            <option value="2">Штуки</option>
            <option value="3">Другое</option>
        </select>
        <input v-model="supplyForm.expiryDate" type="date" placeholder="Expiry Date">
        <input v-model="supplyForm.category" placeholder="Category" id="">
        <input v-model="supplyForm.type" placeholder="Type" id="">
        <button type="submit">Add Supply</button>
    </form>
</template>

<style>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 0.5rem;
    cursor: pointer;
}

li:hover {
    background-color: #f9f9f9;
}
</style>
<script setup lang="ts">
import axios from 'axios';
const { loggedIn, user, session, clear } = useUserSession()



const typeForm = ref({
    name: '',
    category: ''
})

const categoryForm = ref({
    name: '',
    type: 4
})

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

const addType = () => {
    axios.post('/api/supplies/add', {
        typel: 'type',
        name: typeForm.value.name,
        category: typeForm.value.category
    })
}

const addCategory = () => {
    axios.post('/api/supplies/add', {
        typel: 'category',
        name: categoryForm.value.name,
        category: Number(categoryForm.value.type)
    })
}

const addSupply = () => {
    axios.post('/api/supplies/add', {
        typel: 'supply',
        name: supplyForm.value.name,
        quantity: supplyForm.value.quantity,
        measurement: supplyForm.value.measurement,
        date: new Date(),
        expiryDate: supplyForm.value.expiryDate,
        category: supplyForm.value.category,
        type: supplyForm.value.type,
        user: user.id
    })
}
</script>