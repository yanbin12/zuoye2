import Vue from 'vue'
import App from './App.vue'
import Bin from 'vue-resource'
Vue.config.productionTip = false
Vue.use(Bin)



new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue.directive('jgr',function(el,v){
//   el.style.border="5px solid red"
//   console.log(v)
//   //{name: "jgr", rawName: "v-jgr", value: undefined, expression:    "tianweiwei", modifiers: {…}, …}
//   el.value=v.value
// })
Vue.filter("length",function(e){
  if(e.length>=22){
    return e=e.substring(0,19)+'...'
  }else{
    return e
  }
})