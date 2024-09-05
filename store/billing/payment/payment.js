//
//
// /**
//  * Главные события приложения
//  */
//
// export const state = () => ({
//     payment: {
//         modal: {
//             show: false
//         }
//     }
// });
//
// export const mutations = {
//     UPDATE_STATUS_PAYMENT_MODAL(state, status) {
//         state.payment.modal.show = status;
//     },
// };
//
// export const actions = {
//     /**
//      * ---------------
//      * {POUPUP-STEP}
//      * --------------
//      */
//
//     showPaymentModal({commit}, payload = {status: true}) {
//         commit("UPDATE_STATUS_PAYMENT_MODAL", payload.status);
//     },
//
//
//
// };
//
// export const getters = {
//     getPaymentModalShow(state) {
//         return state.payment.modal.show;
//     }
// };