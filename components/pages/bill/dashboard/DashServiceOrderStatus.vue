<template>
    <div class="dashboardHomeServiceStatus">
        <div class="dashboardHomeServiceStatusWrapper">
            <div class="dashboardHomeServiceStatusBlock serviceStatusBlockSuccess"
                 v-if="user.services_status.active > 0">
                <div class="serviceStatusBlockSuccessWrapper">
                    <div class="serviceStatusBlockSuccessCount">
                        {{ user.services_status.active }}
                    </div>
                    <div class="serviceStatusBlockSuccessTitle">
                        {{ getActiveServicesLabel(user.services_status.active) }}
<!--                        {{ getServiceLabel(user.services_status.active) }}-->
                    </div>
                </div>
            </div>
            <div class="dashboardHomeServiceStatusBlock serviceStatusBlockDanger"
                 v-if="user.services_status.not_paid > 0">
                <div class="serviceStatusBlockDangerWrapper">
                    <div class="serviceStatusBlockDangerCount">
                        {{ user.services_status.not_paid }}
                    </div>
                    <div class="serviceStatusBlockDangerTitle">
                        {{ getPaymentStatusLabel(user.services_status.not_paid) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!--     -->
</template>

<script>
export default {
    data() {
        return {
            user: {
                services_status: {
                    active: 1,
                    not_paid: 1
                }
            }
        }
    },
    methods: {
        getActiveServicesLabel(count) {
            let one = this.$i18n.t('dashboard_order_status_active_status_label');
            return count === 1 ? one : this.$t('dashboard_order_status_actives_status_label');
        },
        getPaymentStatusLabel(count) {
            let one = this.$i18n.t('dashboard_order_status_payment_status_label');
            return count === 1 ? one : this.$t('dashboard_order_status_payments_status_label');
        },
        getServiceLabel(count) {
            if (count === 1) {
                return 'услуга';
            } else if (count > 1 && count < 5) {
                return 'услуги';
            } else {
                return 'услуг';
            }
        }
    }
}
</script>

<style scoped>

.dashboardHomeServiceStatus {
    margin-bottom: 36px;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusWrapper {
    display: flex;
    justify-content: space-between;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock {
    flex: 1;
    cursor: pointer;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock {

}


.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock:focus,
.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock:hover {
    filter: blur(1px);
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock:not(:first-child) {
    margin-left: 24px !important;
    margin-right: 0;
}


.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockSuccess {
    border-radius: 20px;
    background: var(--primaryBlurBg);
    box-sizing: border-box;
    padding: 38px 36px;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockSuccess .serviceStatusBlockSuccessWrapper {
    display: flex;
    align-items: center;
}


.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockSuccess .serviceStatusBlockSuccessCount {
    margin-right: 16px;
    color: var(--primaryColor);
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockSuccess .serviceStatusBlockSuccessTitle {
    color: var(--primaryColor);
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockDanger {
    border-radius: 20px;
    background: var(--dangerBlurBg);
    box-sizing: border-box;
    padding: 38px 36px;
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockDanger .serviceStatusBlockDangerWrapper {
    display: flex;
    align-items: center;
}


.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockDanger .serviceStatusBlockDangerCount {
    margin-right: 16px;
    color: var(--dangerColor);
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal
}

.dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock.serviceStatusBlockDanger .serviceStatusBlockDangerTitle {
    color: var(--dangerColor);
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}


@media screen and (max-width: 960px) {
    .dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock {
        padding: 28px 24px !important;
    }

    .dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock:not(:first-child) {
        margin-left: 6px !important;
    }
}

@media screen and (max-width: 400px) {
    .dashboardHomeServiceStatus {
        margin-bottom: 14px;
    }

    .dashboardHomeServiceStatus .dashboardHomeServiceStatusWrapper {
        display: flex;
        flex-flow: column;
    }

    .dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock {
        padding: 18px 24px !important;
        width: 100%;
        margin-left: 0 !important;
        margin-bottom: 12px;
    }

    .dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock:not(:first-child) {
        margin-left: 0 !important;
    }

    .dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock .serviceStatusBlockSuccessCount,
    .dashboardHomeServiceStatus .dashboardHomeServiceStatusBlock .serviceStatusBlockDangerCount {
        font-size: 20px;
    }
}
</style>