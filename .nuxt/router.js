import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7168902c = () => interopDefault(import('../pages/bill/index.vue' /* webpackChunkName: "pages/bill/index" */))
const _9b70d9a6 = () => interopDefault(import('../pages/bonus.vue' /* webpackChunkName: "pages/bonus" */))
const _05e2e55f = () => interopDefault(import('../pages/auth/logout.vue' /* webpackChunkName: "pages/auth/logout" */))
const _1ed51912 = () => interopDefault(import('../pages/auth/signin.vue' /* webpackChunkName: "pages/auth/signin" */))
const _052bc9ed = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _f324b56a = () => interopDefault(import('../pages/user/account.vue' /* webpackChunkName: "pages/user/account" */))
const _79ae2ada = () => interopDefault(import('../pages/bill/account/bonus/index.vue' /* webpackChunkName: "pages/bill/account/bonus/index" */))
const _035b07ba = () => interopDefault(import('../pages/bill/account/pay/index.vue' /* webpackChunkName: "pages/bill/account/pay/index" */))
const _370b97bb = () => interopDefault(import('../pages/bill/invoices/me.vue' /* webpackChunkName: "pages/bill/invoices/me" */))
const _a3ae05e2 = () => interopDefault(import('../pages/bill/order/me.vue' /* webpackChunkName: "pages/bill/order/me" */))
const _42f889c1 = () => interopDefault(import('../pages/bill/service/entire.vue' /* webpackChunkName: "pages/bill/service/entire" */))
const _0e80a8d0 = () => interopDefault(import('../pages/bill/account/partner/share.vue' /* webpackChunkName: "pages/bill/account/partner/share" */))
const _1f7ad0fa = () => interopDefault(import('../pages/bill/account/pay/process/index.vue' /* webpackChunkName: "pages/bill/account/pay/process/index" */))
const _59cb40f6 = () => interopDefault(import('../pages/bill/account/profile/me.vue' /* webpackChunkName: "pages/bill/account/profile/me" */))
const _1520c972 = () => interopDefault(import('../pages/bill/listing/news/archive.vue' /* webpackChunkName: "pages/bill/listing/news/archive" */))
const _ba0de3dc = () => interopDefault(import('../pages/bill/account/pay/result/bad.vue' /* webpackChunkName: "pages/bill/account/pay/result/bad" */))
const _b5a2bee0 = () => interopDefault(import('../pages/bill/account/pay/result/success.vue' /* webpackChunkName: "pages/bill/account/pay/result/success" */))
const _9897bedc = () => interopDefault(import('../pages/bill/listing/news/_slug/index.vue' /* webpackChunkName: "pages/bill/listing/news/_slug/index" */))
const _a3c2fd3a = () => interopDefault(import('../pages/bill/order/info/_slug/index.vue' /* webpackChunkName: "pages/bill/order/info/_slug/index" */))
const _baea5de6 = () => interopDefault(import('../pages/bill/service/_slug/index.vue' /* webpackChunkName: "pages/bill/service/_slug/index" */))
const _3b74083f = () => interopDefault(import('../pages/bill/service/_slug/order/checkout/index.vue' /* webpackChunkName: "pages/bill/service/_slug/order/checkout/index" */))
const _792f2410 = () => interopDefault(import('../pages/bill/service/_slug/order/configurate/index.vue' /* webpackChunkName: "pages/bill/service/_slug/order/configurate/index" */))
const _d95fd5d8 = () => interopDefault(import('../pages/bill/service/_slug/order/list.vue' /* webpackChunkName: "pages/bill/service/_slug/order/list" */))
const _2c400a60 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bill",
    component: _7168902c,
    name: "bill"
  }, {
    path: "/bonus",
    component: _9b70d9a6,
    name: "bonus"
  }, {
    path: "/auth/logout",
    component: _05e2e55f,
    name: "auth-logout"
  }, {
    path: "/auth/signin",
    component: _1ed51912,
    name: "auth-signin"
  }, {
    path: "/auth/signup",
    component: _052bc9ed,
    name: "auth-signup"
  }, {
    path: "/user/account",
    component: _f324b56a,
    name: "user-account"
  }, {
    path: "/bill/account/bonus",
    component: _79ae2ada,
    name: "bill-account-bonus"
  }, {
    path: "/bill/account/pay",
    component: _035b07ba,
    name: "bill-account-pay"
  }, {
    path: "/bill/invoices/me",
    component: _370b97bb,
    name: "bill-invoices-me"
  }, {
    path: "/bill/order/me",
    component: _a3ae05e2,
    name: "bill-order-me"
  }, {
    path: "/bill/service/entire",
    component: _42f889c1,
    name: "bill-service-entire"
  }, {
    path: "/bill/account/partner/share",
    component: _0e80a8d0,
    name: "bill-account-partner-share"
  }, {
    path: "/bill/account/pay/process",
    component: _1f7ad0fa,
    name: "bill-account-pay-process"
  }, {
    path: "/bill/account/profile/me",
    component: _59cb40f6,
    name: "bill-account-profile-me"
  }, {
    path: "/bill/listing/news/archive",
    component: _1520c972,
    name: "bill-listing-news-archive"
  }, {
    path: "/bill/account/pay/result/bad",
    component: _ba0de3dc,
    name: "bill-account-pay-result-bad"
  }, {
    path: "/bill/account/pay/result/success",
    component: _b5a2bee0,
    name: "bill-account-pay-result-success"
  }, {
    path: "/bill/listing/news/:slug",
    component: _9897bedc,
    name: "bill-listing-news-slug"
  }, {
    path: "/bill/order/info/:slug",
    component: _a3c2fd3a,
    name: "bill-order-info-slug"
  }, {
    path: "/bill/service/:slug",
    component: _baea5de6,
    name: "bill-service-slug"
  }, {
    path: "/bill/service/:slug?/order/checkout",
    component: _3b74083f,
    name: "bill-service-slug-order-checkout"
  }, {
    path: "/bill/service/:slug?/order/configurate",
    component: _792f2410,
    name: "bill-service-slug-order-configurate"
  }, {
    path: "/bill/service/:slug?/order/list",
    component: _d95fd5d8,
    name: "bill-service-slug-order-list"
  }, {
    path: "/",
    component: _2c400a60,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
