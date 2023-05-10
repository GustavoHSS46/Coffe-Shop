<template>
    <div>
        <h1 class="text-white text-4xl">macaaaaaaco</h1>
        <h2>sjkdhfjkhsjdhfjk</h2>
    </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()

const {data: coffes} = await useAsyncData('coffes', async () => client.from('coffes').select('*'), { transform: result => result.data })
console.log(coffes.value)
</script>