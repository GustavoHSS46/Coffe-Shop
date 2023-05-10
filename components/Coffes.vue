<template>
    <div>
        <h1 class="text-white text-4xl">macaco</h1>
    </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()

const {data: coffes} = await useAsyncData('coffes', async () => client.from('coffes').select('*'), { transform: result => result.data })
console.log(coffes)
</script>