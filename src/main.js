// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Goods from './components/goods/Goods'
import Ratings from './components/ratings/Ratings'
import Sellers from './components/sellers/Sellers'
Vue.config.productionTip = false

Vue.use(VueRouter)

const router=new VueRouter({
  mode:'history',
  linkActiveClass:'active',
  routes:[
    {path:'/',redirect:'goods'},
    {path:'/goods',name:'goodsLink',component:Goods},
    {path:'/ratings',name:'ratingsLink',component:Ratings},
    {path:'/sellers',name:'sellersLink',component:Sellers}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
