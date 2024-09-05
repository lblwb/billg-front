/**
 * Главные события приложения
 */

export const state = () => ({
    //data

    //timer
    auth: {
        modals: {
            singIn: {
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

    MODAL_SINGIN_SHOW_STATUS(state, status) {
        state.auth.modals.singIn.show = status;
    },
};

export const actions = {
    modalShowSingInSetStatus({commit}, payload = {status: true}) {
        commit("MODAL_SINGIN_SHOW_STATUS", payload.status);
    },
    fetchSingInUser() {
    },
};

export const getters = {
    // Этой функцией будем дергать наши посты в компонентах
    singInShowStatus(state) {
        // console.log(state.charts.data);
        //
        return state.auth.modals.singIn.show ? state.auth.modals.singIn.show : false;
    },
};
