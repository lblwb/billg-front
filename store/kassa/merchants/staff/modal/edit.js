/**
 * Главные события приложения
 */

export const state = () => ({
  staff: {
    modal: {
      edit: {
        show: false,
        data: null,
      },
    },
  },
});

export const mutations = {
  // Edit

  //   UPDATE_MODAL_SHOW_STATUS(state, status) {
  //     state.staff.modal.edit.modal.show = status;
  //   },
  SET_MODAL_SHOW_STATUS(state, status) {
    state.staff.modal.edit.show = status;
  },
  TOOGLE_MODAL_SHOW_STATUS(state) {
    state.staff.modal.edit.show = !state.balance.output.modal.show;
  },

  UPDATE_MODAL_FETCH_DATA(
    state,
    payload = {
      data: null,
    }
  ) {
    state.staff.modal.edit.data = payload.data;
  },
};

export const actions = {
  // OUTPUT

  setEditModal(
    { commit },
    payload = {
      status: null,
    }
  ) {
    commit("SET_MODAL_SHOW_STATUS", payload.status);
    console.log(payload.status);
  },

  showEditModal({ commit }) {
    commit("SET_MODAL_SHOW_STATUS", true);
  },

  toggleShowOutputModal({ commit }) {
    commit("TOOGLE_MODAL_SHOW_STATUS");
  },

  modalOutputSetData(
    { commit },
    payload = {
      data: null,
    }
  ) {
    commit("UPDATE_MODAL_DATA", {
      data: payload.data,
    });
  },

  async modalEditSaveFetch(
    { dispatch, state },
    payload = {
      input: {
        amount: 0,
      },
    }
  ) {
    // this.$axios.post("/api/clients/update", {});

    // Modal selected User Data
    const input_client_data = state.balance.output.modal.data;
    const client_id = input_client_data.id;

    const user_coupons_data = {
      output: {
        amount: parseFloat(payload.output.amount),
      },
    };

    const user_coupon_response = await this.$axios.$post(
      `/api/clients/${client_id}/balance/output`,
      user_coupons_data
    );

    if (user_coupon_response) {
      return user_coupon_response;
      // this.$toast.success("Баланс обновлен!");
      // TODO: dispatch / обновление юзеров в сторе!
    }
  },

  // INPUT

  showInputModal({ commit }) {
    commit("UPDATE_MODAL_INPUT_SHOW_STATUS", true);
  },

  modalShowInputSetStatus(
    { commit },
    payload = {
      status: false,
    }
  ) {
    commit("UPDATE_MODAL_INPUT_SHOW_STATUS", payload.status);
  },

  toggleShowInputModal({ commit }) {
    commit("TOOGLE_MODAL_INPUT_SHOW_STATUS");
  },

  modalInputSetData(
    { commit },
    payload = {
      data: null,
    }
  ) {
    commit("UPDATE_MODAL_INPUT_DATA", {
      data: payload.data,
    });
  },

  async modalInputFetch(
    { dispatch, state },
    payload = {
      input: {
        amount: 0,
      },
    }
  ) {
    // this.$axios.post("/api/clients/update", {});

    // Modal selected User Data
    const input_client_data = state.balance.input.modal.data;
    console.log(input_client_data);
    const username = input_client_data.username;

    const user_coupons_data = {
      input: {
        amount: parseFloat(payload.input.amount),
      },
    };

    const user_coupon_response = await this.$axios.$post(
      `/api/clients/${username}/balance/input`,
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

  getEditShowStatus(state) {
    return state.staff.modal.edit.show ? state.staff.modal.edit.show : false;
  },

  getEditData(state) {
    return state.staff.modal.edit.data ? state.staff.modal.edit.data : [];
  },

  // INPUT

  //   getInputShowStatus(state) {
  //     return state.balance.input.modal.show
  //       ? state.balance.input.modal.show
  //       : false;
  //   },

  //   getInputData(state) {
  //     return state.balance.input.modal.data ? state.balance.input.modal.data : [];
  //   },
};
