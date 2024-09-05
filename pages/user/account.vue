<template>
    <BillingLayout :layountData="{
        panels: {
            left_show: false, right_show: false
        }
    }">
        <template #body_view>
            <div class="userAccountWrapper">
                <div class="accountHeading">
                    <div class="accountHeadingWrapper">
                        <div class="accountHeadingUserInfo">
                            <div class="userInfoAvatar">
                                <div class="userInfoAvatarBg">
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="118" height="118" rx="59" stroke="#ddd"
                                              stroke-width="2" stroke-dasharray="4 8"/>
                                    </svg>
                                </div>
                                <div class="userInfoAvatarImg">
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect x="12" y="12" width="96" height="96" rx="48" fill="#fff"
                                              fill-opacity="0.9"/>
                                        <!-- <path
                                            d="M41.0881 73H36.8949L46.3168 46.8182H50.8807L60.3026 73H56.1094L48.7074 51.5739H48.5028L41.0881 73ZM41.7912 62.7472H55.3935V66.071H41.7912V62.7472ZM78.1523 53.696C78.016 52.4858 77.4535 51.5483 76.4648 50.8835C75.4762 50.2102 74.2319 49.8736 72.7319 49.8736C71.658 49.8736 70.729 50.044 69.945 50.3849C69.1609 50.7173 68.5515 51.1776 68.1168 51.7656C67.6907 52.3452 67.4776 53.0057 67.4776 53.7472C67.4776 54.3693 67.6225 54.9062 67.9123 55.358C68.2106 55.8097 68.5984 56.1889 69.0756 56.4957C69.5614 56.794 70.0813 57.0455 70.6353 57.25C71.1893 57.446 71.7219 57.608 72.2333 57.7358L74.7901 58.4006C75.6254 58.6051 76.4819 58.8821 77.3597 59.2315C78.2376 59.581 79.0515 60.0412 79.8015 60.6122C80.5515 61.1832 81.1566 61.8906 81.6168 62.7344C82.0856 63.5781 82.32 64.5881 82.32 65.7642C82.32 67.2472 81.9364 68.5639 81.1694 69.7145C80.4109 70.8651 79.3072 71.7727 77.8583 72.4375C76.418 73.1023 74.6751 73.4347 72.6296 73.4347C70.6694 73.4347 68.9734 73.1236 67.5415 72.5014C66.1097 71.8793 64.989 70.9972 64.1793 69.8551C63.3697 68.7045 62.9222 67.3409 62.837 65.7642H66.8001C66.8768 66.7102 67.1836 67.4986 67.7205 68.1293C68.266 68.7514 68.9606 69.2159 69.8043 69.5227C70.6566 69.821 71.5898 69.9702 72.604 69.9702C73.7205 69.9702 74.7134 69.7955 75.5827 69.446C76.4606 69.0881 77.1509 68.5937 77.6538 67.9631C78.1566 67.3239 78.408 66.5781 78.408 65.7259C78.408 64.9503 78.1864 64.3153 77.7433 63.821C77.3086 63.3267 76.7163 62.9176 75.9663 62.5938C75.2248 62.2699 74.3853 61.9844 73.4478 61.7372L70.354 60.8935C68.2575 60.3224 66.5955 59.483 65.3683 58.375C64.1495 57.267 63.5401 55.8011 63.5401 53.9773C63.5401 52.4687 63.9492 51.152 64.7674 50.027C65.5856 48.902 66.6935 48.0284 68.0913 47.4062C69.489 46.7756 71.0657 46.4602 72.8214 46.4602C74.5941 46.4602 76.158 46.7713 77.5131 47.3935C78.8768 48.0156 79.9506 48.8722 80.7347 49.9631C81.5188 51.0455 81.9279 52.2898 81.962 53.696H78.1523Z"
                                            fill="#010101" /> -->
                                    </svg>

                                </div>
                                <div class="userInfoAvatarName">
                                    <div class="userInfoAvatarNameTitle">
                                        {{ getUserShortUsername() }}
                                    </div>
                                </div>
                            </div>
                            <div class="userInfoContact">
                                <div class="userInfoContactUsername" style="margin-bottom: 10px;">
                                    <div class="contactUsernameWrapper">
                                        <div class="contactUsernameTitle"
                                             style="font-family: 'Inter',sans-serif;font-style: normal;font-weight: 500;font-size: 24px;line-height: 29px;color: var(--color-base);">
                                            <!-- {{$store.js.state.auth.user}} -->
                                            {{ getUserFullname() }} - {{ getUserBalance() }} руб.
                                        </div>
                                    </div>
                                </div>
<!--                                <div class="userInfoContactPhone">-->
<!--                                    <div class="contactPhoneWrapper">-->
<!--                                        <div class="contactPhoneTitle"-->
<!--                                             style="font-family: 'Inter',sans-serif;font-style: normal;font-weight: 500;font-size: 16px;line-height: 22px;color: #717171;">-->
<!--                                            {{ getUserPhone() }}-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <!--  -->
                        <div class="accountHeadingAction">
                            <div class="accountHeadingActionWrapper">
                                <div class="accountHeadingActionBtn ActionBtn__Exit">
                                    <button @click="userAccountLogout()">Выход</button>
                                </div>
                                <div class="accountHeadingActionBtn ActionBtn__Edit">
                                    <button @click="userProfileEdit()">Редактировать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accountOutputBalance" style="margin-bottom: 32px">
                    <div class="accountOutputBalanceWrapper">
                        <div class="accountOutputBalanceBlock"
                             style="background: var(--bg-block);border-radius: 16px; padding: 14px 24px; display: flex; align-items: center;">
                            <div class="balanceBlockMoney"
                                 style="padding: 14px 18px;background: rgb(28, 28, 28);display: block;border-radius: 10px; background: var(--bg-base);">
                                <div class="balanceBlockMoneyWrapper"
                                     style="display: flex; flex-flow: row wrap; align-items: center;">
                                    <div class="balanceBlockMoneyIcon"
                                         style="margin-right: 14px;display: flex;align-items: center;">
                                        <!-- <img src="~/assets/images/frontend/moneyicon.png" alt=""
                                            style="width: 24px; height: 24px;"> -->
                                    </div>
                                    <div class="balanceBlockMoneyTitle" style="font-size: 16px; font-weight: 500;">
<!--                                        {{ getUserBalance() }} TMT-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </BillingLayout>
</template>

<script>
import BillingLayout from '~/layouts/BillingLayout.vue';

export default {
    middleware: ["auth"],
    data() {
        return {}
    },
    components: {
        BillingLayout
    },
    methods: {
        userAccountLogout() {
            this.$toast.info('Успешный выход!');
            this.$auth.logout();
        },
        userProfileEdit() {
            // this.$auth.logout();
            this.$toast.show('Редактирование профиля, скоро будет доступно!');
        },
        //
        getUserFullname() {
            if (this.$auth.loggedIn) {
                const user = this.$store.state.auth.user;
                // const user_profile = user.profile;
                //
                // console.log(user_profile);

                return user.username;

                // return user_profile.first_name + " " + user_profile.last_name;
            } else {
                return 'Not Auth!';
            }
        },
        getUserPhone() {
            if (this.$auth.loggedIn) {
                const user = this.$store.state.auth.user;
                const user_profile = user.profile;
                //
                // console.log(user_profile);

                return user_profile.phone;
            } else {
                return 'Not Auth!';
            }
        },
        getUserShortUsername() {
            if (this.$auth.loggedIn) {
                const user = this.$store.state.auth.user;
                // const user_profile = user.profile;
                return user.username.charAt(0).toUpperCase() + user.username.charAt(1).toUpperCase();
                // return user_profile.first_name.charAt(0).toUpperCase() + " " + user_profile.last_name.charAt(0).toUpperCase()
            } else {
                return "NA";
            }
        },
        getUserBalance() {
            if (this.$auth.loggedIn) {
                const user = this.$store.state.auth.user;
                // const user_profile = user.profile;
                // const balance = user_profile.balance;

                let formater_balance = new Intl.NumberFormat('ru-RU', {
                    style: 'decimal',
                    // currency: null,
                    useGrouping: true
                });

                return formater_balance.format(user !== undefined && user.balance !== undefined && user.balance.amount !== undefined ? user.balance.amount : 0 );
            } else {
                return 0;
            }
        }
    },
}
</script>
<style scoped>
.userAccountWrapper {
    margin: 0 auto;
    max-width: 1050px;
    margin-top: 56px;
}

.accountHeading {
    margin-bottom: 32px;
}

.accountHeadingWrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

.accountHeadingUserInfo {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    user-select: none;
}

@media screen and (max-width: 768px) {
    .accountHeadingUserInfo {
        margin-bottom: 24px;
    }
}

@media screen and (max-width: 960px) {
    .accountHeadingUserInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        width: 100%;
        margin-bottom: 24px;
    }
}


.accountHeadingUserInfo .userInfoAvatar {
    position: relative;
    margin-right: 32px;
    max-width: 120px;
    max-height: 120px;
    user-select: none;
    transition: background-color 4s;
    cursor: crosshair;
}

@media screen and (max-width: 768px) {
    .accountHeadingUserInfo .userInfoAvatar {
        margin-bottom: 16px;
        margin-right: 0;
    }
}


.accountHeadingUserInfo .userInfoAvatar .userInfoAvatarBg {
}

.accountHeadingUserInfo .userInfoAvatar:hover {
    opacity: 0.9;
}

.accountHeadingUserInfo .userInfoAvatar:focus .userInfoAvatarBg svg rect,
.accountHeadingUserInfo .userInfoAvatar:hover .userInfoAvatarBg svg rect {
    stroke: #cea528;
    pointer-events: all;
    animation: 2s ease fill-change infinite;
}


.accountHeadingUserInfo .userInfoAvatar .userInfoAvatarImg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.accountHeadingUserInfo .userInfoAvatar .userInfoAvatarName {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}


.accountHeadingUserInfo .userInfoAvatar .userInfoAvatarName .userInfoAvatarNameTitle {
    /* color: #010101; */
    color: var(--primary-base);
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: normal;
}

@media screen and (max-width: 960px) {
    .accountHeadingUserInfo .userInfoAvatar .userInfoAvatarName .userInfoAvatarNameTitle {
        font-size: 24px;
    }
}

.accountHeadingUserInfo .userInfoContact {
}

.accountHeadingUserInfo .userInfoContact .userInfoContactPhone {
}

@media screen and (max-width: 960px) {
    .accountHeadingUserInfo .userInfoContact .userInfoContactPhone {
        display: flex;
        justify-content: center;
    }
}

.accountHeadingUserInfo .userInfoContact .userInfoContactUsername {
}

/* Actions */

.accountHeading .accountHeadingAction {
}

@media screen and (max-width: 960px) {
    .accountHeading .accountHeadingAction {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}

.accountHeading .accountHeadingAction .accountHeadingActionWrapper {
    display: flex;
    flex-flow: row wrap;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn {
    margin-right: 10px;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn:last-child {
    margin-right: 0;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn button {
    padding: 12px 16px;
    border: solid 1px #212121;
    border-radius: 8px;
    color: #fff;
    background: #111;
    margin: 0;
    font-size: 14px;
    cursor: pointer;
    transition: all ease 0.3s;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn.ActionBtn__Exit button {
    color: #DF2626;
    /* background: #DF2626; */
    background: transparent;
    border: solid 1px #DF2626;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn.ActionBtn__Exit button:hover {
    opacity: 0.6;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn.ActionBtn__Edit button {
    color: #CEA528;
    background: transparent;
    border: solid 1px #CEA528;
}

.accountHeading .accountHeadingAction .accountHeadingActionBtn.ActionBtn__Edit button:hover {
    /* color: #fff; */
    /* border: solid 1px #212121; */
    opacity: 0.6;
}

@keyframes fill-change {
    0% {
        stroke: #cea528;
    }

    50% {
        stroke: red;
    }

    100% {
        stroke: #28cec0;
    }
}
</style>