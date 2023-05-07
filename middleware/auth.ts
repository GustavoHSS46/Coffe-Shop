export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();

    if (!user.value && to.path === "/") {
        navigateTo("/login");
    } else if (user.value && to.path === "/") {
        navigateTo("/");
    }
});
