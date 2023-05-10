<template>
    <div v-if="isLoading" class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="text-4xl text-white">Login</h1>
        <form @submit.prevent="() => login()" class="w-full h-2/5 flex flex-col justify-center items-center space-y-6">
            <input v-model="email" placeholder="gustavo@example.com" type="text"
                class="placeholder:italic text-white text-center placeholder:text-gray-600 block focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2 sm:text-md bg-slate-500 rounded h-14 w-4/5">
            <input v-model="password" placeholder="********" type="password"
                class="placeholder:italic text-white text-center placeholder:text-gray-600 block focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2 sm:text-md bg-slate-500 rounded h-14 w-4/5">
            <input type="submit" class="rounded bg-emerald-600 h-16 w-4/5">
            <h3 class="text-gray-600" @click="registerPage()">Dosen't Have A Account?</h3>
        </form>
    </div>
    <Loading v-else />
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})


const user = useCookie('sb-access-token');
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            return navigateTo('/');
        }
    })
})

function registerPage() {
    isLoading.value = false
    setTimeout(function () {
        navigateTo('/register')
    }, 1000);
}

const email = ref('')
const password = ref('')
const client = useSupabaseClient()
const isLoading = ref(true)


const login = async () => {
    const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    isLoading.value = false
    setTimeout(function () {
        navigateTo('/')
        isLoading.value = false

    }, 1000);
}
</script>
