import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect: 'welcome',
      component: resolve=>(require(["@/view/welcome"],resolve)),
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: resolve=>(require(["@/view/welcome"],resolve)),
    },
    {
      path: '/list',
      name: 'list',
      component: resolve=>(require(["@/view/list"],resolve)),
    },
    {
      path: '/playpage',
      name: 'playPage',
      component: resolve=>(require(["@/view/playpage"],resolve)),
    },
    {
      path: '/error',
      name: 'error',
      component: resolve=>(require(["@/view/error"],resolve)),
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
