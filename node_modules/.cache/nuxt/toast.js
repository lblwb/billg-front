import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"bottom-right","duration":1800})

const globals = [{"name":"my-error","message":"Упс...Что-то пошло не так!","options":{"type":"error"}}]
if(globals) {
  globals.forEach(global => {
    Vue.toasted.register(global.name, global.message, global.options)
  })
}

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}
