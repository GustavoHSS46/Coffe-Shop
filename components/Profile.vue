<template>
    <div class="rounded-lg h-full w-full bg-white flex justify-center items-center overflow-hidden">
        <img :src="img" alt="" class="w-full h-full object-cover">
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient()

const { data: { user } } = await client.auth.getUser()
const img = user?.user_metadata.img

</script>
