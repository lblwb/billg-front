/**
 * Главные события приложения
 */

export const state = () => ({
  merchants: {
    all: {
      data: [],
    },
    select: {
      slug: {
        data: null,
      },
    },
  },
});

export const mutations = {
  UPDATE_KASSA_ALL_MERCHANT_DATA(state, data) {
    state.merchants.all.data = data;
  },
  UPDATE_KASSA_SELECT_SLUG_MERCHANT_DATA(state, data) {
    state.merchants.select.slug.data = data;
  },
};

export const actions = {
  async MerchantsAllFetch({ commit }) {
    const merchants_response = await this.$axios.$get(`/api/merchants/all`);
    const merchants_data = merchants_response.response.merchants;

    if (merchants_response) {
      commit("UPDATE_KASSA_ALL_MERCHANT_DATA", merchants_data);
    }
  },
  async MerchantsFetchBySlug(
    { commit },
    payload = {
      slug: null,
    }
  ) {
    const merchants_response = await this.$axios.$get(
      `/api/merchants/slug/${payload.slug}`
    );

    commit("UPDATE_KASSA_SELECT_SLUG_MERCHANT_DATA", []);

    const merchants_data = merchants_response.response.merchant;

    if (merchants_response) {
      commit("UPDATE_KASSA_SELECT_SLUG_MERCHANT_DATA", merchants_data);
    }
  },
  // showMobilesideMenu({ commit }, payload = { status: true }) {
  //   // commit("UPDATE_STATUS_MOBILESIDE_MENU", payload.status);
  // },
};

export const getters = {
  getAllMerchantsData(state) {
    return state.merchants.all.data;
  },

  getAllMerchantsCounts(state) {
    return state.merchants.all.data.length;
  },

  //

  getSelectMerchantBySlugData(state) {
    return state.merchants.select.slug.data
      ? state.merchants.select.slug.data
      : null;
  },
};
