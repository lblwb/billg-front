/**
 * События создания новых клиентов
 */

export const state = () => ({
    clients: {
        all: {
            data: [],
        },
    },
});

export const mutations = {
    UPDATE_KASSA_CLIENT_DATA(state, data) {
        state.clients.all.data = data;
    },
};

export const actions = {
    async clientNewStore({commit}, payload = {
        data: null
    }) {
        const clients_response = await this.$axios.$post(`/api/clients/usermine/store/create`, payload.data);
        const clients_data = clients_response.response;

        // Response

        if (clients_response !== null) {
            commit("UPDATE_KASSA_CLIENT_DATA", clients_data);
        }
    },
};

export const getters = {
    getAllClientsData(state) {
        return state.clients.all.data;
    },

    getAllClientsCounts(state) {
        return (state.clients.all.data).length;
    },
};
