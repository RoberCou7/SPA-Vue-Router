import { createRouter, createWebHistory } from 'vue-router'
import IfElse from '../views/IfElse.vue'
import Show from '../views/Show.vue'
import ForLoop from '../views/ForLoop.vue'
import BindKey from '../views/BindKey.vue'

const routes = [
  { path: '/', redirect: '/ifelse' },
  { path: '/ifelse', component: IfElse },
  { path: '/show', component: Show },
  { path: '/for', component: ForLoop },
  { path: '/bindkey', component: BindKey }
]

const router = createRouter({
  history: createWebHistory('/spa-vue-router/'),
  routes
})

export default router
