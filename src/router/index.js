import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/page/home')
const Introduction = () => import('@/page/introduction')
const News = () => import('@/page/news')
const NewsDetail = () => import('@/page/newsdetail')
const Teaching = () => import('@/page/teaching')
const Professors = () => import('@/page/professors')
const ProfessorsDetail = () => import('@/page/professorsdetail')
const Customization = () => import('@/page/customization')
const Contact = () => import('@/page/contact')
const Test = () => import('@/page/test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', // 当url不存在 自动跳转到首页
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/newsdetail',
      name: 'newsdetail',
      component: NewsDetail
    },
    {
      path: '/teaching',
      name: 'teaching',
      component: Teaching
    },
    {
      path: '/professors',
      name: 'professors',
      component: Professors
    },
    {
      path: '/professorsdetail',
      name: 'professorsdetail',
      component: ProfessorsDetail
    },
    {
      path: '/customization',
      name: 'customization',
      component: Customization
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
