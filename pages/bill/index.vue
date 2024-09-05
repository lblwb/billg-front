<template>
    <BillingLayout>
        <template #body_view>
            <!--            Dashboard-->
            <div class="dashboardHome">
                <div class="dashboardHomeContainer">
                    <div class="dashboardHomeMain">

                        <DashServiceOrderStatus/>
                        <DashboardServiceBuyBtn/>
                        <!-- Fresh-News -->
                        <DashboardNews/>
                        <DashboardBonus/>

                    </div>
                    <div class="dashboardHomeInfo">
                        <div class="dashboardHomeInfoWrapper">
                            <div class="dashboardHomeInfoAlertBlock">
                                <div class="dashboardHomeInfoAlertBlockWrapper">
                                    <div class="dashboardHomeInfoAlertBlockHeading">
                                        <div class="dashboardHomeInfoAlertBlockHeadingTitle">
                                            Акция
                                        </div>
                                        <div class="dashboardHomeInfoAlertBlockHeadingLine">
                                            <svg width="297" height="1" viewBox="0 0 297 1" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0.5H297" stroke="#AAF9E1"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="dashboardHomeInfoAlertBlockDesc">
                                        Успей поучаствовать в акции 2 сервера по цене одного, предложение ограничено!
                                    </div>
                                    <div class="dashboardHomeInfoAlertBlockAction">
                                        <div class="dashboardHomeInfoAlertBlockActionBtn" @click="$toast.info('Акция скоро будет доступна!')">
                                            <button class="">
                                                <span class="alertBlockActionBtnTitle">
                                                    Участвовать
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboardHomeInfoAlertBlock">
                                <div class="dashboardHomeInfoAlertBlockWrapper">
                                    <div class="dashboardHomeInfoAlertBlockHeading">
                                        <div class="dashboardHomeInfoAlertBlockHeadingTitle">
                                            Партнерская программа
                                        </div>
                                        <div class="dashboardHomeInfoAlertBlockHeadingLine">
                                            <svg width="297" height="1" viewBox="0 0 297 1" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0.5H297" stroke="#AAF9E1"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="dashboardHomeInfoAlertBlockDesc">
                                        Приглашай друзей и зарабатывай с нами, получай вознаграждения!
                                    </div>
                                    <div class="dashboardHomeInfoAlertBlockAction">
                                        <div class="dashboardHomeInfoAlertBlockActionBtn">
                                            <button class="">
                                                <span class="alertBlockActionBtnTitle" @click="$router.push({name:'bill-account-partner-share'})">
                                                    Стать партнером
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
<!--                            <div class="dashboardHomeInfoAlertBlock">-->
<!--                                <div class="dashboardHomeInfoAlertBlockWrapper">-->
<!--                                    <div class="dashboardHomeInfoAlertBlockHeading">-->
<!--                                        <div class="dashboardHomeInfoAlertBlockHeadingTitle">-->
<!--                                            Ресселинг-->
<!--                                        </div>-->
<!--                                        <div class="dashboardHomeInfoAlertBlockHeadingLine">-->
<!--                                            <svg width="297" height="1" viewBox="0 0 297 1" fill="none"-->
<!--                                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                                <path d="M0 0.5H297" stroke="#AAF9E1"/>-->
<!--                                            </svg>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="dashboardHomeInfoAlertBlockDesc">-->
<!--                                        Раскрой свой потенциал прямо сейчас - подключайся к нашему ресселингу хостинга и-->
<!--                                        достигай новых высот, зарабатывая!-->
<!--                                    </div>-->
<!--                                    <div class="dashboardHomeInfoAlertBlockAction">-->
<!--                                        <div class="dashboardHomeInfoAlertBlockActionBtn">-->
<!--                                            <button class="">-->
<!--                                                <span class="alertBlockActionBtnTitle">-->
<!--                                                    Подключиться-->
<!--                                                </span>-->
<!--                                            </button>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="dashboardHomeInfoAlertBlock">-->
<!--                                <div class="dashboardHomeInfoAlertBlockWrapper">-->
<!--                                    <div class="dashboardHomeInfoAlertBlockHeading">-->
<!--                                        <div class="dashboardHomeInfoAlertBlockHeadingTitle">-->
<!--                                            Bot Telegram-->
<!--                                        </div>-->
<!--                                        <div class="dashboardHomeInfoAlertBlockHeadingLine">-->
<!--                                            <svg width="297" height="1" viewBox="0 0 297 1" fill="none"-->
<!--                                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                                <path d="M0 0.5H297" stroke="#AAF9E1"/>-->
<!--                                            </svg>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="dashboardHomeInfoAlertBlockDesc">-->
<!--                                        Бот уведомит тебя об состоянии услуг, за пару дней до конца аренды!-->
<!--                                        Заказывай когда где угодно и когда угодно!-->
<!--                                        Будь всегда на связи с нами. Даже с телефона :)- -->
<!--                                    </div>-->
<!--                                    <div class="dashboardHomeInfoAlertBlockAction">-->
<!--                                        <div class="dashboardHomeInfoAlertBlockActionBtn">-->
<!--                                            <button class="">-->
<!--                                                <span class="alertBlockActionBtnTitle">-->
<!--                                                    Подключиться-->
<!--                                                </span>-->
<!--                                            </button>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
                        </div>

                    </div>
                </div>
            </div>
        </template>
    </BillingLayout>
</template>
<script>
import BillingLayout from "~/layouts/BillingLayout.vue";
import DashboardNews from "~/components/pages/bill/dashboard/DashboardNews.vue";
import DashboardServiceBuyBtn from "~/components/pages/bill/dashboard/DashboardServiceBuyBtn.vue";
import DashServiceOrderStatus from "~/components/pages/bill/dashboard/DashServiceOrderStatus.vue";
import DashboardBonus from "~/components/pages/bill/dashboard/DashboardBonus.vue";

export default {
    components: {
        DashboardBonus,
        DashServiceOrderStatus,
        DashboardServiceBuyBtn,
        DashboardNews,
        BillingLayout
    }
}

</script>

<style scoped>
.dashboardHome {
    overflow-y: auto;
}

@media screen and (max-width: 960px) {
    .dashboardHome {
        overflow: unset;
    }
}

.dashboardHome .dashboardHomeContainer {
    display: flex;
    justify-content: space-between;
}

.dashboardHome .dashboardHomeMain {
    flex: 1;
    margin-right: 24px;
    /**/
}

@media screen and (max-width: 960px) {
    .dashboardHome .dashboardHomeMain {
        margin-right: 0;
        /**/
    }
}


.dashboardHome .dashboardHomeInfo {
    max-width: 297px;
    flex: auto;
}

@media screen and (max-width: 960px) {
    .dashboardHome .dashboardHomeContainer {
        display: flex;
        flex-flow: row wrap;
    }

    .dashboardHome .dashboardHomeInfo {
        position: relative;
        right: 0;
        left: 0;
        max-width: 100%;
    }
}

/* Alert Block */

.dashboardHomeInfo {

}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock {
    border-radius: 24px;
    background: var(--primaryBlurBg);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 24px;
    padding-bottom: 14px;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 24px;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockHeading {
    margin-bottom: 14px;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockHeading .dashboardHomeInfoAlertBlockHeadingTitle {
    color: var(--primaryColor);
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 12px;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockHeading .dashboardHomeInfoAlertBlockHeadingLine {
    display: flex;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockDesc {
    margin-bottom: 14px;
    /**/
    color: var(--primaryColorSecond);
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.3px;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockAction {

}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockAction .dashboardHomeInfoAlertBlockActionBtn {

}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockAction .dashboardHomeInfoAlertBlockActionBtn button {
    display: flex;
    padding: 10px 26px;
    border-radius: 18px;
    background: var(--primaryBlackBg);
    border: none;
    cursor: pointer;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockAction .dashboardHomeInfoAlertBlockActionBtn button .alertBlockActionBtnTitle {
    color: #02271D;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockAction .dashboardHomeInfoAlertBlockActionBtn button:hover,
.dashboardHomeInfo .dashboardHomeInfoAlertBlock .dashboardHomeInfoAlertBlockAction .dashboardHomeInfoAlertBlockActionBtn button:focus {
    filter: blur(0.6px);
}
</style>