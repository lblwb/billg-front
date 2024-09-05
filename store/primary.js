/**
 * Главные события приложения
 */

export const state = () => ({
  //data

  app: {
    mobile: {
      sidemenu: {
        show: false,
      },
    },
    desktop: {
      sidebar: {
        show: true,
      },
    },
  },

  //timer
  // timer: {
  //   p2p: {
  //     transaction: {
  //       state_fetch: null,
  //     },
  //   },
  // },
});

export const mutations = {
  updateStepOne(state, data) {
    state.p2p_form.step_one = data;
  },
  UPDATE_STATUS_MOBILESIDE_MENU(state, status) {
    state.app.mobile.sidemenu.show = status;
  },
};

export const actions = {
  /**
   * ---------------
   * {POUPUP-STEP}
   * --------------
   */

  showMobilesideMenu({ commit }, payload = { status: true }) {
    commit("UPDATE_STATUS_MOBILESIDE_MENU", payload.status);
  },
};

export const getters = {
  // Этой функцией будем дергать наши посты в компонентах
  // getP2PTransactionData(state) {
  //   // console.log(state.charts.data);
  //   //
  //   return state.p2p.transaction.data ? state.p2p.transaction.data : [];
  // },

  getStatusMobileSideMenu(state) {
    return state.app.mobile.sidemenu.show
      ? state.app.mobile.sidemenu.show
      : false;
  },
};
