/**
 * Главные события приложения
 */

export const state = () => ({
  staff: {
    all: {
      data: [],
    },
  },
});

export const mutations = {
  UPDATE_KASSA_STAFF_DATA(state, data) {
    state.staff.all.data = data;
  },
};

export const actions = {
  async staffAllFetch({ commit }) {
    const staff_response = await this.$axios.$get(`/api/staff/all`);
    const staff_data = staff_response.response.staffs;

    if (staff_response) {
      commit("UPDATE_KASSA_STAFF_DATA", staff_data);
    }
  },
  // showMobilesideMenu({ commit }, payload = { status: true }) {
  //   // commit("UPDATE_STATUS_MOBILESIDE_MENU", payload.status);
  // },
};

export const getters = {
  getAllStaffData(state) {
    return state.staff.all.data;
  },

  getAllStaffCounts(state) {
    return state.staff.all.data ? state.staff.all.data.length : 0;
  },
};
