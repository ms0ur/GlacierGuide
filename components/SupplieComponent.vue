<template>
    <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row items-center">
            <div class="flex flex-row">
                <h5>Name</h5><p>- type</p>
            </div>
            <div class="flex flex-row gap-5 ml-5">
                <p>Куплен: date.</p>
                <p>Годен до: date.</p>
            </div>
        </div>
        <div class="flex flex-row gap-4">
            <i class="bi bi-pencil-fill text-xl"></i>
            <i class="bi bi-trash3-fill text-xl"></i>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    id: String
})
</script>