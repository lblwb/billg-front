/**
 * Главные события приложения
 */

export const state = () => ({
    balance: {
        output: {
            modal: {
                show: false,
                data: null,
            },
        },
        input: {
            modal: {
                show: false,
                data: null,
            },
        },
    },
});

export const mutations = {
    // OUTPUT

    UPDATE_MODAL_OUTPUT_SHOW_STATUS(state, status) {
        state.balance.output.modal.show = status;
    },
    SET_MODAL_OUTPUT_SHOW_STATUS(state, payload) {
        state.balance.output.modal.show = payload;
    },
    TOOGLE_MODAL_OUTPUT_SHOW_STATUS(state) {
        state.balance.output.modal.show = !state.balance.output.modal.show;
    },

    UPDATE_MODAL_OUTPUT_DATA(
        state,
        payload = {
            data: null,
        }
    ) {
        state.balance.output.modal.data = payload.data;
    },

    // INPUT

    UPDATE_MODAL_INPUT_SHOW_STATUS(state, status) {
        state.balance.input.modal.show = status;
    },
    SET_MODAL_INPUT_SHOW_STATUS(state, payload) {
        state.balance.input.modal.show = payload;
    },
    TOOGLE_MODAL_INPUT_SHOW_STATUS(state) {
        state.balance.input.modal.show = !state.balance.input.modal.show;
    },

    UPDATE_MODAL_INPUT_DATA(
        state,
        payload = {
            data: null,
        }
    ) {
        state.balance.input.modal.data = payload.data;
    },
};

export const actions = {
    // OUTPUT
    showOutputModal({commit}) {
        commit("UPDATE_MODAL_OUTPUT_SHOW_STATUS", true);
    },

    //
    modalShowOutputSetStatus(
        {commit},
        payload = {
            status: false,
        }
    ) {
        commit("UPDATE_MODAL_OUTPUT_SHOW_STATUS", payload.status);
    },

    toggleShowOutputModal({commit}) {
        commit("TOOGLE_MODAL_OUTPUT_SHOW_STATUS");
    },

    modalOutputSetData(
        {commit},
        payload = {
            data: null,
        }
    ) {
        commit("UPDATE_MODAL_OUTPUT_DATA", {
            data: payload.data,
        });
    },

    async modalOutputFetch(
        {dispatch, state},
        payload = {
            input: {
                amount: 0,
            },
        }
    ) {
        // console.log(state.balance);
        // this.$axios.post("/api/clients/update", {});

        // Modal selected User Data
        const input_client_data = state.balance.output.modal.data;

        // console.log(input_client_data);
        const username = input_client_data.username;

        const user_coupons_data = {
            output: {
                amount: parseFloat(payload.output.amount),
            },
        };

        const user_coupon_response = await this.$axios.$post(
            `/api/clients/${username}/balance/output`,
            user_coupons_data
        );

        if (user_coupon_response) {
            return user_coupon_response;
            // this.$toast.success("Баланс обновлен!");
            // TODO: dispatch / обновление юзеров в store!
        }
    },

    // INPUT

    showInputModal({commit}) {
        commit("UPDATE_MODAL_INPUT_SHOW_STATUS", true);
    },

    modalShowInputSetStatus(
        {commit},
        payload = {
            status: false,
        }
    ) {
        commit("UPDATE_MODAL_INPUT_SHOW_STATUS", payload.status);
    },

    toggleShowInputModal({commit}) {
        commit("TOOGLE_MODAL_INPUT_SHOW_STATUS");
    },

    modalInputSetData(
        {commit},
        payload = {
            data: null,
        }
    ) {
        commit("UPDATE_MODAL_INPUT_DATA", {
            data: payload.data,
        });
    },

    async modalInputFetch(
        {dispatch, state},
        payload = {
            input: {
                amount: 0,
            },
        }
    ) {
        // this.$axios.post("/api/clients/update", {});

        // Modal selected User Data
        const input_client_data = state.balance.input.modal.data;
        // console.log(input_client_data);
        const client_username = input_client_data.username;

        const user_coupons_data = {
            input: {
                amount: parseFloat(payload.input.amount),
            },
        };

        const user_coupon_response = await this.$axios.$post(
            `/api/clients/usermine/${client_username}/balance/input`,
            user_coupons_data
        );

        if (user_coupon_response) {
            return user_coupons_data;
            // this.$toast.success("Баланс обновлен!");
            // TODO: dispatch / обновление юзеров в сторе!
        }
    },
};

export const getters = {
    // Этой функцией будем дергать наши посты в компонентах
    // getP2PTransactionData(state) {
    //   // console.log(state.charts.data);
    //   //
    //   return state.p2p.transaction.data ? state.p2p.transaction.data : [];
    // },

    // OUTPUT

    getOutputShowStatus(state) {
        return state.balance.output.modal.show
            ? state.balance.output.modal.show
            : false;
    },

    getOutputData(state) {
        return state.balance.output.modal.data
            ? state.balance.output.modal.data
            : [];
    },

    // INPUT

    getInputShowStatus(state) {
        return state.balance.input.modal.show
            ? state.balance.input.modal.show
            : false;
    },

    getInputData(state) {
        return state.balance.input.modal.data ? state.balance.input.modal.data : [];
    },
};
