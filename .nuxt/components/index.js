export { default as LoadingBar } from '../../components/LoadingBar.vue'
export { default as PagesBillDescBannerBlock } from '../../components/pages/bill/DescBannerBlock.vue'
export { default as ModalsModalView } from '../../components/modals/ModalView.vue'
export { default as PagesBillDashboardDashServiceOrderStatus } from '../../components/pages/bill/dashboard/DashServiceOrderStatus.vue'
export { default as PagesBillDashboardBonus } from '../../components/pages/bill/dashboard/DashboardBonus.vue'
export { default as PagesBillDashboardNews } from '../../components/pages/bill/dashboard/DashboardNews.vue'
export { default as PagesBillDashboardServiceBuyBtn } from '../../components/pages/bill/dashboard/DashboardServiceBuyBtn.vue'
export { default as PagesBillLayoutSidebarNavbar } from '../../components/pages/bill/layout/SidebarNavbar.vue'
export { default as PagesBillLayoutNavbar } from '../../components/pages/bill/layout/navbar.vue'
export { default as PagesBillDashboardOrderModalEdit } from '../../components/pages/bill/dashboard/order/modalEdit.vue'
export { default as PagesBillServiceTariffsSliderRangeInput } from '../../components/pages/bill/service/tariffs/SliderRangeInput.vue'
export { default as PagesBillServiceTariffsTextInput } from '../../components/pages/bill/service/tariffs/TextInput.vue'
export { default as PagesBillDashboardPaymentPopup } from '../../components/pages/bill/dashboard/payment/modal/PaymentPopup.vue'
export { default as PagesBillDashboardOrderInfoDnsModalCreateDnsRec } from '../../components/pages/bill/dashboard/order/info/dns/ModalCreateDnsRec.vue'
export { default as PagesBillDashboardOrderInfoDnsModalEditDnsNs } from '../../components/pages/bill/dashboard/order/info/dns/ModalEditDnsNs.vue'
export { default as PagesBillDashboardOrderInfoDnsModalEditDnsRec } from '../../components/pages/bill/dashboard/order/info/dns/ModalEditDnsRec.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
