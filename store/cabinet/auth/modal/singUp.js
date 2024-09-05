/**
 * Главные события приложения
 */

export const state = () => ({
    //data

    //timer
    auth: {
        modals: {
            singup: {
                show: false,
            },
        },
    },
});

export const mutations = {
    /**
     * Обновление данных информационой окна о транзакции
     */
    MODAL_TRANSACTION_SINGLE_SET_DATA(state, payload) {
        state.transaction.modals.info.data = payload;
    },

    /**
     * Статус информационой окна о транзакции
     */

    MODAL_SINGUP_SHOW_STATUS(state, status) {
        state.auth.modals.singup.show = status;
    },
};

export const actions = {
    modalShowSingupSetStatus({commit}, payload = {status: true}) {
        commit("MODAL_SINGUP_SHOW_STATUS", payload.status);
    },
    fetchsingUpUser() {
    },
};

export const getters = {
    // Этой функцией будем дергать наши посты в компонентах
    singUpShowStatus(state) {
        // console.log(state.charts.data);
        //
        return state.auth.modals.singup.show
            ? state.auth.modals.singup.show
            : false;
    },
};
