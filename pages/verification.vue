<template >
    <div v-if="isLoading" class="h-screen w-screen flex flex-col justify-center items-center fixed bottom-0 left-0 bg-black">
        <Icon name="ic:baseline-mail-outline" class="text-9xl text-emerald-700"/>
        <h1 class="text-white text-2xl">Verify Your Email</h1>
        <h2 class="text-gray-500 mt-2 text-1xl text-center w-5/6">We Ask To Verify Your Email Just The First Time You Register A New Account, Will Not Ask When You Sign In</h2>
        <button @click="loginPage()" class="text-white text-2xl text-center w-5/6 p-2 bg-emerald-700 mt-4 rounded-lg">Login</button>
    </div>
    <Loading v-else /> 
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
    // or middleware: 'auth'
})
const user = useCookie('sb-access-token');
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            return navigateTo('/');
        }
    })
})

const isLoading = ref(true)

function loginPage() {
    isLoading.value = false
    setTimeout(function () {
        navigateTo('/login')
    }, 1500);
}

</script>