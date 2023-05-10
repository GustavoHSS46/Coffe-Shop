export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCookie('sb-access-token')._rawValue;
    if (user && to.path === '/login' || user && to.path === '/register' || user && to.path === '/verification') {
        return navigateTo('/');
    }
    
    if (!user && to.path === '/') {
        return navigateTo('/login');
    }
});
