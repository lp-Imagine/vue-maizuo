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
          meta: {
            tabId: 1
          },
          children: [
            {
              path: 'nowplay',
              component: nowplay,
              name: nowplay,
              meta: {
                tabId: 1
              }
            },
            {
              path: 'future',
              component: future,
              name: future,
              meta: {
                tabId: 1
              }
            }
          ]
        },
        {
          path: 'cinemas',
          component: cinemas,
          meta: {
            tabId: 2
          }
        },
        {
          path: 'center',
          component: center,
          meta: {
            tabId: 4
          }
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
      path: '/cinema/:id/film',
      component: cinema
    },
    {
      path: '/login',
      component: login
    }
  ]
})

export default router
