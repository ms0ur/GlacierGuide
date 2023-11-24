<template>
    <div class=" mx-48 my-20">
        <div class="w-full h-14 pl-7 pr-1.5 py-1.5 bg-stone-300 rounded-2xl justify-end items-center gap-96 inline-flex">
        <div class="relative">
            <input v-model="searchTerm" @input="search" type="text" class="w-full h-14 pl-7 pr-1.5 py-1.5 bg-stone-300 rounded-2xl text-black text-sm font-medium outline-none focus:outline-none">
            <div class="absolute w-full mt-2 bg-white rounded border" v-if="results.length">
                <div v-for="(result, index) in results" :key="index" class="p-2 hover:bg-gray-200 cursor-pointer">
                    {{ result }}
                </div>
            </div>
        </div>
        <button type="submit" class="w-28 h-11 px-6 py-1.5 bg-purple-500 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div class="text-white text-sm font-medium">Добавить</div>
        </button>
    </div>
    </div>
</template>
<script setup lang="ts">
const searchTerm = ref('')
const results = ref<string[]>([]) // Specify the type as an array of strings

function search() {
    if (searchTerm.value) {
        results.value = ['Result 1', 'Result 2', 'Result 3']
    } else {
        results.value = []
    }
}
</script>