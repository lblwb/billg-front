/**
 * Главные события приложения
 */

export const state = () => ({
  clientSearch: {
    modal: {
      show: false,
      data: null,
      input: {
        text: "",
      },
    },
  },
});

export const mutations = {
  // OUTPUT

  UPDATE_MODAL_CLIENT_SEARCH_SHOW_STATUS(state, status) {
    state.clientSearch.modal.show = status;
  },
  SET_MODAL_CLIENT_SEARCH_SHOW_STATUS(state, payload) {
    state.clientSearch.modal.show = payload;
  },
  TOOGLE_MODAL_CLIENT_SEARCH_SHOW_STATUS(state) {
    state.clientSearch.modal.show = !state.clientSearch.modal.show;
  },

  UPDATE_MODAL_CLIENT_SEARCH_DATA(
    state,
    payload = {
      data: null,
    }
  ) {
    state.clientSearch.modal.data = payload.data;
  },

  UPDATE_MODAL_CLIENT_SEARCH_INPUT_TEXT(
    state,
    payload = {
      input: {
        text: null,
      },
    }
  ) {
    state.clientSearch.modal.input.text = payload.input.text;
  },
};

export const actions = {
  // OUTPUT
  showClientSearchModal({ commit }) {
    commit("UPDATE_MODAL_CLIENT_SEARCH_SHOW_STATUS", true);
  },

  //
  modalShowClientSearchSetStatus(
    { commit },
    payload = {
      status: false,
    }
  ) {
    commit("SET_MODAL_CLIENT_SEARCH_SHOW_STATUS", payload.status);
  },

  toggleShowClientSearchModal({ commit }) {
    commit("TOOGLE_MODAL_CLIENT_SEARCH_SHOW_STATUS");
  },

  modalClientSearchSetInputText(
    { commit },
    payload = {
      input: {
        text: null,
      },
    }
  ) {
    commit("UPDATE_MODAL_CLIENT_SEARCH_INPUT_TEXT", {
      input: {
        text: payload.input.text,
      },
    });
  },

  modalClientSearchSetData(
    { commit },
    payload = {
      data: null,
    }
  ) {
    commit("UPDATE_MODAL_CLIENT_SEARCH_DATA", {
      data: payload.data,
    });
  },

  async modalClientSearchInputFetch({ dispatch, state }, payload = {}) {
    // console.log(state.balance);
    // this.$axios.post("/api/clients/update", {});

    // Modal selected User Data
    const input_client_text = state.clientSearch.modal.input.text;

    if (input_client_text.length === 0) {
      dispatch("modalClientSearchSetData", {
        data: {
          clients: []
        },
      });
    }

    setTimeout(async () => {
      const user_search_response = await this.$axios.$post(
        `/api/clients/search/context`,
        {
          text: input_client_text,
        }
      );

      console.log(user_search_response.clients);

      if (user_search_response) {
        dispatch("modalClientSearchSetData", {
          data: {
            clients: user_search_response.clients,
          },
        });

        return user_search_response;
        // this.$toast.success("Баланс обновлен!");
        // TODO: dispatch / обновление юзеров в сторе!
      }
    }, 200);
  },
};

export const getters = {
  // SEARCH

  getClientSearchShowStatus(state) {
    return state.clientSearch.modal.show
      ? state.clientSearch.modal.show
      : false;
  },

  getClientSearchData(state) {
    return state.clientSearch.modal.data ? state.clientSearch.modal.data : [];
  },

  getClientSearchInputText(state) {
    return state.clientSearch.modal.input.text
      ? state.clientSearch.modal.input.text
      : "";
  },
};
