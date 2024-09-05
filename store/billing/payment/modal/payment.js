/**
 * Главные события приложения
 */

export const state = () => ({
    payment: {
        modal: {
            data: [],
            show: false
        }
    }
});

export const mutations = {
    UPDATE_STATUS_PAYMENT_MODAL(state, status) {
        state.payment.modal.show = status;
    },
    UPDATE_GW_DATA_MODAL(state, payload) {
        state.payment.modal.data = payload;
    }
};

export const actions = {
    /**
     * ---------------
     * {POUPUP-STEP}
     * --------------
     */

    showPaymentModal({commit}, payload = {status: true}) {
        commit("UPDATE_STATUS_PAYMENT_MODAL", payload.status);
    },

    async fetchPay({commit}, payload = {}) {
        try {
            const resp = await this.$axios.$get("/api/v1/bill/pay/gw/list", {});
            console.log(resp);
            if (resp !== null && resp.list !== null) {
                // this.gwList = resp.list;

                commit("UPDATE_GW_DATA_MODAL", resp.list)
            }

        } catch (e) {
            // this.paymentModalShow = false
            console.error("[gw] no loaded. rise");
            console.error(e);
        }
    }
};

export const getters = {
    getPaymentModalShow(state) {
        return state.payment.modal.show;
    },

    getPayGwList(state) {
       return  state.payment.modal.data;
    }
};
