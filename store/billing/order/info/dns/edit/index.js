/**
 * Главные события приложения
 */

export const state = () => ({
    dns: {
        records: {
            modal: {
                data: null,
                show: false
            }
        }
    }
});

export const mutations = {
    UPDATE_STATUS_DNS_REC_MODAL(state, status) {
        state.dns.records.modal.show = status;
    },
    UPDATE_DATA_DNS_REC_MODAL(state, status) {
        state.dns.records.modal.data = status;
    },
    UPDATE_REC_DATA_MODAL(state, payload) {
        state.dns.records.modal.data = payload;
    }
};

export const actions = {
    /**
     * -------------s--
     * {POUPUP-STEP}
     * --------------
     */

    showDnsRecModal({commit}, payload = {status: true}) {
        commit("UPDATE_STATUS_DNS_REC_MODAL", payload.status);
    },

    setDataDnsRecModal({commit}, payload = {data: null}) {
        commit("UPDATE_DATA_DNS_REC_MODAL", payload.data);
    },

    // async fetchDnsRec({commit}, payload = {}) {
    //     try {
    //         const resp = await this.$axios.$get("/api/v1/bill/pay/gw/list", {});
    //         console.log(resp);
    //         if (resp !== null && resp.list !== null) {
    //             // this.gwList = resp.list;
    //
    //             commit("UPDATE_GW_DATA_MODAL", resp.list)
    //         }
    //
    //     } catch (e) {
    //         // this.paymentModalShow = false
    //         console.error("[gw] no loaded. rise");
    //         console.error(e);
    //     }
    //
    // }

};

export const getters = {
    getDnsRecModalData(state) {
        return state.dns.records.modal.data;
    },
    getDnsRecModalShow(state) {
        return state.dns.records.modal.show;
    },

    getPayGwList(state) {
        return state.payment.modal.data;
    }
};
