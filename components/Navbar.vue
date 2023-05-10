<template>
    <div class="w-full h-14 flex">
        <div class="w-3/5 flex items-center  space-x-1">
            <h1 class="font-medium text-3xl text-gray-500">Hi,</h1>
            <h2 class="font-medium text-3xl text-gray-300">{{ firstName }}.</h2>
        </div>
        <div class="w-2/5 flex justify-end items-center space-x-4">
            <Icon name="material-symbols:notifications" class="h-6 w-6 text-white" />
            <div class="h-14 w-14 mt-1 ">
                <Profile />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient()

const { data: { user } } = await client.auth.getUser()
const username = user?.user_metadata.first_name  || 'Newcomer'
const firstName = username.slice(0, username.indexOf(' ') + 2)

</script>
