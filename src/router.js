import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/createTest',
    name: 'Create',
    component: loadPage('CreateTestPage')
  },
  {
    path: '/8WasteTest',
    name: 'WasteTest',
    component: loadPage('WasteTestPage')
  },
  {
    path: '/LeanTerminologyTest',
    name: 'LeanTerminologyTest',
    component: loadPage('LeanTerminologyTestPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
