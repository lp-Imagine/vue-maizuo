import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import film from '../views/film.vue'
import login from '../views/login.vue'
import cinema from '../views/cinema.vue'

import center from '../views/home/center.vue'
import cinemas from '../views/home/cinemas.vue'
import films from '../views/home/films.vue'

import future from '../views/home/films/future.vue'
import nowplay from '../views/home/films/nowplay.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: 'films',
          component: films,
          children: [
            {
              path: 'nowplay',
              component: nowplay,
              name: nowplay
            },
            {
              path: 'future',
              component: future,
              name: future
            }
          ]
        },
        {
          path: 'cinemas',
          component: cinemas
        },
        {
          path: 'center',
          component: center
        },
        {
          path: '',
          redirect: '/films/nowplay'
        }
      ]
    },
    {
      path: '/film/:id',
      component: film
    },
    {
      path: '/cinema/:id',
      component: cinema
    },
    {
      path: '/login',
      component: login
    }
  ]
})

export default router
