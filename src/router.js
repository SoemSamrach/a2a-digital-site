import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import ServicesPage from './views/ServicesPage.vue'
import ProductsPage from './views/ProductsPage.vue'
import ProductDetail from './views/ProductDetail.vue'
import AboutPage from  './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'
import JobsPage  from './views/JobsPage.vue'
import JobsPageDetail from './views/JobsPageDetail.vue'
import JobsSubmitPage from './views/JobsSubmitPage.vue'
import ErrorPage from './views/ErrorPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },

    {
      path: '/productdetail',
      name: 'productdetail',
      component: ProductDetail
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsPage
    },
    {
      path: '/jobsdetail',
      name: 'jobsdetail',
      component: JobsPageDetail
    },
    {
      path: '/jobform',
      name: 'jobform',
      component: JobsSubmitPage
    },
    {
      path: '/404',
      name: '404',
      component: ErrorPage
    },
  ]
})