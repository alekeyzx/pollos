import { createRouter, createWebHistory } from 'vue-router'

import CrearPedido from '../components/CrearPedido.vue'
import ListarPedido from '../components/ListarPedido.vue'

const routes = [
  
  {
    path: '/',
    name: 'CrearPedido',
    component: CrearPedido
  },
  {
    path: '/listar',
    name: 'ListarPedido',
    component: ListarPedido
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
