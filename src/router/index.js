import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'helloWord', component: () => import('../components/discard/HelloWorld')},
    {path: '/me/valendar', name: 'valendar', component: () => import('../components/me/Valendar')},
    {path: '/me/healthreport', name: 'healthreport', component: () => import('../components/me/HealthReport')},
    {path: '/me/curve', name: 'curve', component: () => import('../components/me/Curve')}
  ]
})
