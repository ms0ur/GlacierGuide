<template>
    <div class="py-10 px-16 max-md:px-0">
        <SuppliesMiniComponent  />
        <div class="flex gap-10 mt-10 max-md:hidden flex-row">
            <ExpirySoonComponent />
            <div>
                <ExpirySoonP2Component class="w-full" />
                <SuppliesButtonsComponent />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts"></script>