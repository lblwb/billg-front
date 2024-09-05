<template>
    <div class="container">

        <SidebarNavbar/>

        <div class="Body">
            <div class="bodyHeader">
                <BillingNavbar/>
            </div>
            <div class="BodyContext">
                <slot name="body_view"></slot>
            </div>
        </div>
        <div class="Modals">
            <PaymentPopup v-if="paymentModalShow" :paymentModalShow="paymentModalShow" :paymentForm="paymentForm"
                          @selectSum="selectSum" @selectPayment="selectPayment"/>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import BillingNavbar from '~/components/pages/bill/layout/navbar.vue';
import TextInput from "~/components/pages/bill/service/tariffs/TextInput.vue";
import PaymentPopup from "~/components/pages/bill/dashboard/payment/modal/PaymentPopup.vue";
import SidebarNavbar from "~/components/pages/bill/layout/SidebarNavbar.vue";

export default {
    // middleware: ['auth'],
    auth: true,
    data() {
        return {
            isDarkTheme: false,
            paymentForm: {
                sum: 10,
                listSum: [10, 50, 100, 200, 500, 1000],
                select: {
                    type: {
                        value: "CARD"
                    }
                }
            },
            billState: {
                services: []
            }
        }
    },
    methods: {
        async showPaymentModal() {
            //$router.push({name: 'bill-account-pay'})
            await this.$store.dispatch("billing/payment/modal/payment/showPaymentModal", {status: !this.paymentModalShow})
        },
        async autoUpdateUserData() {
            await this.$auth.fetchUser();
            if (!this.$auth.loggedIn) {
                await this.$router.push({name: "index"});
            }
        },
        selectSum(sum) {
            this.paymentForm.sum = sum;
        },
        selectPayment(payName) {
            this.paymentForm.select.type.value = payName;
        }
    },
    computed: {
        ...mapGetters({
            paymentModalShow: "billing/payment/modal/payment/getPaymentModalShow"
        })
    },
    mounted() {
        // document.documentElement.setAttribute('data-theme', 'light');

        //
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 2000)
        });

        console.log(this.$auth.loggedIn);


        // if (!this.$auth.loggedIn) {
        //     this.$auth.logout();
        //     this.$router.push({name: "index"})
        // } else {

        // let userUpdateTimer;

        // this.$on("loggedIn", () => {
        const userUpdateTimer = setInterval(() => this.autoUpdateUserData(), 24000);
        // });

        //
        this.$once("hook:beforeDestroy", () => {
            console.debug('[user] logout -> reset')
            if (userUpdateTimer !== undefined) {
                clearInterval(userUpdateTimer)
            }
        });
        // }
    },
    components: {
        SidebarNavbar,
        PaymentPopup,
        TextInput,
        BillingNavbar,
    }
}
</script>
<style>

.toasted-container.bottom-right {
    right: 3vh !important;
    bottom: 6% !important;
}

.toasted-container .toasted {
    border-radius: 16px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    font-family: "Inter", sans-serif !important;
    color: #fff;
//padding: 16px 16px !important; padding: 1.5vh 1.4vw !important; display: flex !important; justify-content: flex-end; align-items: center; margin-top: 10px; box-sizing: border-box !important; cursor: pointer;
}

.toasted .primary, .toasted.toasted-primary {
    background: #3f3e3e !important;
    opacity: 0.6;
}

.toasted-container.toasted :focus,
.toasted-container .toasted:hover {
    opacity: 0.9 !important;
    filter: blur(0.08em) !important;
}

.toasted .primary.error, .toasted.toasted-primary.error {
    background: #FD4E4E !important;
}

.toasted .primary.success, .toasted.toasted-primary.success {
    background: #109875 !important;
}


.toasted.warn {
    background: rgba(36, 153, 196, 0.9) !important;
}


.toasted .primary.info, .toasted.toasted-primary.info {
    background: #6d16b2 !important;
}

</style>
<style scoped>
body {
    height: 100% !important;
}

.containerAndSidebar {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.containerWrapper {
    width: 100%;
    display: flex;
}

/**/

.Body {
    position: absolute;
    left: 320px;
    right: 0;
    top: 0;
    width: auto;
    bottom: auto;
    box-sizing: border-box;
}

@media screen and (max-width: 960px) {
    .Body {
        position: relative;
        right: 0;
        left: 0;
        margin: 0;
        padding: 0;
    }
}


.BodyContext {
    box-sizing: border-box;
    position: relative;
}


/*Fixed Cart Right Block*/

.fluidCartRightFixed {
    position: sticky;
    left: auto;
}

.fluidCartRightFixedBlock {
    background: #EEFFFA;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 16px;
}

.fluidCartRightFixedBlock .fluidCartHeading {
    margin-bottom: 18px;
}

.fluidCartRightFixedBlock .fluidCartHeading .fluidCartHeadingTitle {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.fluidCartRightFixedBlock .fluidCartParams {

}

.fluidCartRightFixedBlock .fluidCartParams .fluidCartParamsItem {
    margin-bottom: 24px;
}

.fluidCartRightFixed .fluidCartParamsItemColumn {
    display: flex;
}

.fluidCartRightFixed .fluidCartParamsItemColumn .fluidCartParamsItemColumnRow {
}

.fluidCartRightFixed .fluidCartRightFixedBlock .fluidCartParamsItemColumn .fluidCartParamsItemHeading {
    margin-right: 10px;
}

.fluidCartRightFixed .fluidCartRightFixedBlock .fluidCartParamsItemColumn .fluidCartParamsItemHeadingTitle {
    color: #686767;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.fluidCartRightFixed .fluidCartRightFixedBlock .fluidCartParamsItemColumn .fluidCartParamsItemValue {

}

.fluidCartRightFixed .fluidCartRightFixedBlock .fluidCartParamsItemColumn .fluidCartParamsItemValueTitle {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.fluidCartRightFixed .fluidCartBuy {

}

.fluidCartRightFixed .fluidCartBuy button.fluidCartBuyBtn {
    padding: 14px 24px;
    border-radius: 24px;
    background: #67FFD2;
    border: none;
    cursor: pointer;
}

.fluidCartRightFixed .fluidCartBuy button.fluidCartBuyBtn:hover,
.fluidCartRightFixed .fluidCartBuy button.fluidCartBuyBtn:focus {
    opacity: 0.7;
}

.fluidCartRightFixed .fluidCartBuy .fluidCartBuyBtn .fluidCartBuyBtnTitle {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

/* service Banner */

.bannerServiceCard {
    /*margin-top: 16px;*/
    background: #EEFFFA;
    border-radius: 16px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    margin: 0 16px 24px;
}

.bannerServiceCardMid {
    min-height: 245px;
    flex: 1;
    width: 100%;
}

.bannerServiceCard .bannerServiceCardWrapper {
    padding: 24px 24px;
}

.bannerServiceCard .bannerServiceCardWrapperMid {
    padding: 48px 36px;
}

.bannerServiceCard .bannerServiceCardHeading .bannerServiceCardHeadingTitle {
    color: #02271D;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 24px;
}

.bannerServiceCard .bannerServiceCardHeading .bannerServiceCardHeadingDesc {
    color: #0B4F3C;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.BodyContext {
    padding: 0 24px;
    height: 100%;
}

</style>