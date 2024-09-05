/**
 * Главные события приложения
 */

export const state = () => ({
    //data

    //timer
    auth: {
        modals: {
            singup_validate: {
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

    MODAL_SINGUP_VALIDATE_SHOW_STATUS(state, status) {
        state.auth.modals.singup_validate.show = status;
    },
};

export const actions = {
    modalShowSingupValidateSetStatus({commit}, payload = {status: true}) {
        commit("MODAL_SINGUP_VALIDATE_SHOW_STATUS", payload.status);
    },
    fetchsingUpUser() {
    },
};

export const getters = {
    // Этой функцией будем дергать наши посты в компонентах
    singUpValidateShowStatus(state) {
        // console.log(state.charts.data);
        //
        return state.auth.modals.singup_validate.show
            ? state.auth.modals.singup_validate.show
            : false;
    },
};
