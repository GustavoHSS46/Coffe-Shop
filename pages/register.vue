<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="text-4xl">Register</h1>
        <form @submit.prevent="() => signUp()" class="w-full h-3/5 flex flex-col justify-center items-center space-y-6">
            <input v-model="name" placeholder="Gustavo Henrique" type="text"
                class="placeholder:italic text-center placeholder:text-gray-600 block focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2 sm:text-md bg-slate-500 rounded h-14 w-4/5">
                <input v-model="img" placeholder="Put the link" type="text"
                class="placeholder:italic text-center placeholder:text-gray-600 block focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2 sm:text-md bg-slate-500 rounded h-14 w-4/5">
            <input v-model="email" placeholder="gustavo@example.com" type="text"
                class="placeholder:italic text-center placeholder:text-gray-600 block focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2 sm:text-md bg-slate-500 rounded h-14 w-4/5">
            <input v-model="password" placeholder="********" type="password"
                class="placeholder:italic  text-center placeholder:text-gray-600 block focus:outline-none focus:border-emerald-500 focus:ring-emerald-500 focus:ring-2 sm:text-md bg-slate-500 rounded h-14 w-4/5">
            <input type="submit" class="rounded bg-emerald-500 h-16 w-4/5">
            <h3 class="text-gray-600" @click="loginPage()">Already Have A Accounte?</h3>
        </form>
    </div>
</template>

<script setup lang="ts">


const email = ref('')
const password = ref('')
const name = ref('')
const img = ref('')
const client = useSupabaseClient()

function loginPage() {
    navigateTo('/login')
}

const signUp = async () => {
    const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            data: {
                first_name: name.value,
                img: img.value
            }
        }
    })
}

const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (user.value) {
            navigateTo('/')
        }
    })
} )
</script>
