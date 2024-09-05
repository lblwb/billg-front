<template>
    <div class="dashboardHomeServiceBuy">
        <div class="dashboardHomeServiceBuyBtn">
            <!--            <button style="cursor:pointer;" @click="$router.push({name: 'bill-service-entire'})">-->
            <button style="cursor:pointer;" @click="$router.push({name: 'bill-order-me'})">
                                    <span class="dashboardHomeServiceBuyBtnWrapper">
                                        <span class="dashboardHomeServiceBuyBtnTitle">
                                            {{ $t('global_buy_new_service') }}
                                        </span>
                                        <span class="dashboardHomeServiceBuyBtnIcon">
                                            <svg class="tabler-icon-arrow-narrow-right"
                                                 width="64" height="65"
                                                 viewBox="0 0 64 65"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                        d="M13.3335 32.5H50.6668M50.6668 32.5L40.0002 43.1667M50.6668 32.5L40.0002 21.8333"
                                                        stroke="#0B4F3C"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </span>
            </button>
        </div>
    </div>
</template>

<style scoped>

.dashboardHomeServiceBuy {
    margin-bottom: 36px;
}

.dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button {
    align-items: center;
    border: solid #29BB92;
    width: 100%;
    background: transparent;
    border-radius: 20px;
}


.dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button .dashboardHomeServiceBuyBtnWrapper {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 28px 24px;
}

@media screen and (max-width: 560px) {
    .dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button .dashboardHomeServiceBuyBtnWrapper {
        padding: 20px 10px;
    }
}

.dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button .dashboardHomeServiceBuyBtnTitle {
    color: var(--primaryColorSecond);
    font-size: 20px;
    display: flex;
    align-items: center;
    font-weight: 500;
}

.dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button .dashboardHomeServiceBuyBtnIcon {
    display: flex;
    align-items: center;
}

.dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button:hover,
.dashboardHomeServiceBuy .dashboardHomeServiceBuyBtn button:focus {
    filter: blur(0.6px);
}

</style>