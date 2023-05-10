<template>
    <div class="pl-10 pr-10 absolute transition-all space-x-6 bottom-0 left-0 w-screen bg-gray-700 h-16 flex items-center justify-center">
        <div class="h-full w-1/3 flex flex-col items-center justify-center">
            <Icon name="mdi:home" class="h-9 w-9 " :class="props.where === 'home' ? 'text-emerald-700' : 'text-gray-500'"/>
            <h2 class="text-gray-400 text-sm" v-if="props.where === 'home'">Home</h2>
        </div>
        <div class="h-full w-1/3 flex-col flex items-center justify-center">
            <Icon name="mdi:cart" class="h-9 w-9 " :class="props.where === 'buy' ? 'text-emerald-700' : 'text-gray-500'"/>
            <h2 class="text-gray-400 text-sm" v-if="props.where === 'buy'">Buy</h2>
        </div>
        <div class="h-full w-1/3 flex-col flex items-center justify-center">
            <Icon name="mdi:magnify" class="h-9 w-9" :class="props.where === 'search' ? 'text-emerald-700' : 'text-gray-500'" />
            <h2 class="text-gray-400 text-sm" v-if="props.where === 'search'">Search</h2>
        </div>
        
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    where: String
})

console.log(props.where)
</script>