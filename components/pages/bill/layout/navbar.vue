<template>
    <div class="BodyNavbar" :class="{ 'sticky': isSticky }">
        <div class="BodyNavbarWrapper">
            <div class="BodyNavbarRow">
                <svg width="64" height="2" viewBox="0 0 64 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H64" stroke="#AAF9E1"/>
                </svg>
                <!-- TODO: HTML / NAVBAR - Тут скоро что-то будет! -->
            </div>
            <div class="BodyNavbarRow">

                <div class="BodyNavbarUserAccount">
                    <div class="BodyNavbarUserAccountWrapper">
                        <div class="BodyNavbarUserBalance">
                            <div class="BodyNavbarUserBalanceWrapper" style="display: flex; align-items: center">
                                <div class="BodyNavbarUserBalanceIcon" style="margin-right: 6px; display: flex">
                                    <svg width="24" height="24" viewBox="0 0 24 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 3.5V7.5C14 7.76522 14.1054 8.01957 14.2929 8.20711C14.4804 8.39464 14.7348 8.5 15 8.5H19M14 3.5H7C6.46957 3.5 5.96086 3.71071 5.58579 4.08579C5.21071 4.46086 5 4.96957 5 5.5V19.5C5 20.0304 5.21071 20.5391 5.58579 20.9142C5.96086 21.2893 6.46957 21.5 7 21.5H17C17.5304 21.5 18.0391 21.2893 18.4142 20.9142C18.7893 20.5391 19 20.0304 19 19.5V8.5M14 3.5L19 8.5M14 11.5H11.5C11.1022 11.5 10.7206 11.658 10.4393 11.9393C10.158 12.2206 10 12.6022 10 13C10 13.3978 10.158 13.7794 10.4393 14.0607C10.7206 14.342 11.1022 14.5 11.5 14.5H12.5C12.8978 14.5 13.2794 14.658 13.5607 14.9393C13.842 15.2206 14 15.6022 14 16C14 16.3978 13.842 16.7794 13.5607 17.0607C13.2794 17.342 12.8978 17.5 12.5 17.5H10M12 17.5V18.5M12 10.5V11.5"
                                              stroke="var(--primaryColor)" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="BodyNavbarUserBalanceTitle"
                                     style="color: var(--primaryColor);font-family: 'Inter',sans-serif;font-size: 14px;font-style: normal;font-weight: 500;line-height: normal;">
                                    {{ $t('user_balance') }}:

                                    {{ userBalance }}
                                    {{ $t("user_balance_symbol") }}
                                    <!--                                    <template v-if="$i18n.locale === 'ru'">-->
                                    <!--                                        {{ userBalance }}-->
                                    <!--                                    </template>-->
                                    <!--                                    <template v-else>-->

                                    <!--                                    </template>-->
                                    <!--                                    {{ $i18n.locale }}-->

                                    <!--                                    {{ $t("user_balance_symbol") }}-->
                                </div>
                            </div>
                        </div>
                        <div class="BodyNavbarUserBalanceFill" style="margin-right: 24px">
                            <div class="BodyNavbarUserBalanceFillBtn" @click="showPaymentModal"
                                 style="border-radius: 20px;background: var(--primaryBg); color: var(--primaryColor);  padding: 12px 26px; cursor: pointer">
                                <div class="BodyNavbarUserBalanceFillHeading">
                                    <div class="BodyNavbarUserBalanceFillHeadingTitle" style="color: #093A2C;
font-family: 'Inter',sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;">
                                        {{ $t('user_balance_replenish') }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="BodyNavbarUserProfile" style="margin-right: 24px">
                            <div class="BodyNavbarUserProfileBtn"
                                 @click="$router.push({name: 'user-account'})">
                                <div class="BodyNavbarUserProfileHeading">
                                    <div class="BodyNavbarUserProfileHeadingTitle">
                                        {{ userName }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="BodyNavbarUserBalance BodyNavbarUserLang" @click="toggleThemes"
                             style="cursor: pointer">
                            <div class="BodyNavbarUserBalanceWrapper">
                                🌞/🌙
                            </div>
                        </div>
                        <div class="BodyNavbarUserBalance BodyNavbarUserLang" style="cursor: pointer"
                             v-for="locale in availableLocales"
                             @click="changeLanguage(locale.code)" :key="locale.code">
                            <div class="BodyNavbarUserBalanceWrapper" style="display: flex; align-items: center">
                                <div class="BodyNavbarUserBalanceTitle"
                                     style="color: var(--primaryColor);font-family: Inter, sans-serif;font-size: 13px;font-style: normal;font-weight: 500;line-height: normal;padding: 10px 12px;background: rgb(26 222 167 / 20%);border-radius: 24px;">
                                    {{ $t('select_language') }}
                                </div>
                            </div>
                        </div>
                        <div class="BodyNavbarUserLogout">
                            <div class="BodyNavbarUserLogoutBtn">
                                <button style="background: transparent; border: none; cursor: pointer"
                                        @click="$auth.logout()">
                                    <span class="BodyNavbarUserLogoutBtnIcon">
                                        <img src="~/assets/images/icon/logout.svg">
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            isDarkTheme: 'dark',
            isSticky: false
        }
    },
    methods: {
        async showPaymentModal() {
            //$router.push({name: 'bill-account-pay'})
            await this.$store.dispatch("billing/payment/modal/payment/showPaymentModal", {status: !this.paymentModalShow})
        },
        getCurrentSystemTheme() {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            } else {
                return 'light';
            }
        },
        checkCurrentTheme() {
            let isNull = localStorage.getItem('theme') === null;
            if (isNull) {
                let systemThemeColor = this.getCurrentSystemTheme();
                document.documentElement.setAttribute('data-theme', systemThemeColor);
                localStorage.setItem('theme', systemThemeColor);
            }
            //
            document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));

        },
        toggleThemes() {
            let isDarkTheme = localStorage.getItem('theme') === 'dark';
            if (isDarkTheme === undefined || isDarkTheme === null) {
                isDarkTheme = this.getCurrentSystemTheme();
                localStorage.setItem('theme', this.getCurrentSystemTheme());
            }
            //
            localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
            //
            document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');
        },
        handleScroll() {
            if (window.scrollY > 80) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        },
        changeLanguage(code) {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 900)
            });
            //
            this.$i18n.setLocale(code);
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.checkCurrentTheme();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        ...mapGetters({
            paymentModalShow: "billing/payment/modal/payment/getPaymentModalShow"
        }),
        userName() {
            if (this.$auth.user !== null) {
                return this.$auth.user.username;
            } else {
                return ""
            }

        },
        userBalance() {
            if (this.$auth.user && this.$auth.user.balance && this.$auth.user.balance.amount !== null) {
                let locale_lang = this.$i18n.locale;
                if (locale_lang === "ru") {
                    return this.$auth.user.balance.amount;
                } else {
                    if (this.$auth.user.balance && this.$auth.user.balance.amount_exc && this.$auth.user.balance.amount_exc['USD']) {
                        const amount = this.$auth.user.balance.amount_exc['USD']
                        return amount.toFixed(2) + "";
                    } else {
                        return 0
                    }
                }

            } else {
                return 0;
            }

        },

        //

        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    }
}
</script>

<!--<script setup lang="ts">-->
<!--const userName = () => {-->
<!--    return "label.exe"-->
<!--}-->

<!--const userBalance = () => {-->
<!--    return (100).toFixed()-->
<!--}-->
<!--</script>-->

<style scoped>

/*Navbar*/

.BodyNavbar {
}

.sticky {
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0px 3px 0px rgb(0 0 0 / 5%);
    z-index: 1000;
    margin: 0 auto;
    right: 0;
    left: 320px;
}

[data-theme="dark"] .sticky {
    background: #000;
}

@media screen and (max-width: 960px) {
    .sticky {
        left: 0;
    }
}

.BodyNavbarWrapper {
    display: flex;
    justify-content: space-between;
    padding: 16px 14px;
    height: 100%;
}

@media screen and (max-width: 960px) {
    .BodyNavbar {
        width: 100%;
    }

    .BodyNavbarWrapper {
        padding: 14px 24px;
        width: 100%;
        box-sizing: border-box;
    }

    .BodyNavbarWrapper .BodyNavbarRow:first-child {
        display: none;
    }

    .BodyNavbarRow {
        flex-flow: row wrap;
        justify-content: left !important;
    }
}

.BodyNavbarRow {
    display: flex;
    align-items: center;
    flex: auto;
}

.BodyNavbarRow:last-child {
    display: flex;
    justify-content: flex-end;
}

.BodyNavbarUserAccount {

}

.BodyNavbarUserAccountWrapper {
    display: flex;
    align-items: center;
}

@media screen and (max-width: 960px) {
    .BodyNavbarUserAccountWrapper {
        flex-flow: row wrap;
    }
}

.BodyNavbarUserBalance {
    margin-right: 24px;
}


.BodyNavbarUserProfileBtn {
    border-radius: 20px;
    background: #F9F8F8;
    padding: 12px 26px;
    cursor: pointer
}

[data-theme="dark"] .BodyNavbarUserProfileBtn {
    background: unset;
    border: solid 1px var(--primaryBg);
    color: var(--primaryBg);
    opacity: 0.8;
}


.BodyNavbarUserProfileBtn:hover,
.BodyNavbarUserProfileBtn:focus {
    opacity: 0.6;
}

.BodyNavbarUserProfileHeadingTitle {
    color: #093A2C;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

[data-theme="dark"] .BodyNavbarUserProfileHeadingTitle {
    color: var(--primaryBg);
}

</style>