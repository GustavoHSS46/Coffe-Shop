<template>
    <div class="p-4">
        <div class="w-full h-14 flex space-x-2">
            <div class="w-3/5 flex items-center">
                <h1 class="font-medium text-3xl text-gray-500">Hi,</h1>
                <h2 class="font-medium text-3xl text-gray-300">{{ firstName }}.</h2>
            </div>
            <div class="w-2/5 flex justify-center items-center space-x-4">
                <Icon name="material-symbols:notifications" class="h-6 w-6 text-white"/>
                <div class="mt-1 bg-sky-500 rounded-full h-16 w-16 overflow-hidden border-2 border-emerald-400">
                    <img :src="img" alt="">
                </div>
            </div>
        </div>
        <button @click="logOut()">log out</button>
    </div>
</template>

<script setup lang="ts">

const client = useSupabaseClient()

const { data: { user } } = await client.auth.getUser()
console.log(user?.user_metadata)
const img = user?.user_metadata.img 
const username = user?.user_metadata.first_name
const firstName = username.slice(0, username.indexOf(' ') + 2)


async function logOut() {
    const logOut = await client.auth.signOut()
}

const userClient = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!userClient.value) {
            navigateTo('/login')
        }
    })
} )
</script>