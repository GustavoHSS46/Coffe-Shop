import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/gustavo-h-s-santos/Documents/Coffe/client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}