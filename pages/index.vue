<template>
  <div v-if="isLoading" class="pt-5 pl-9 pr-9 relative h-screen w-screen overflow-x-hidden">
    <Navbar />
    <Coffes/>
    <button @click="logOut()" class="text-gray-400 border-2 border-emerald-400 rounded-lg p-2">log out</button>
    <Sidebar where="home" />
  </div>
  <Loading v-else />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})

const client = useSupabaseClient()

const isLoading = ref(true)

const logOut = async () => {
  client.auth.signOut()
  isLoading.value = false
  setTimeout(function () {
    navigateTo('/login')
  }, 1000);
}
</script>