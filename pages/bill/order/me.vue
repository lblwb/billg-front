<template>
    <BillingLayout>
        <template #body_view>
            <div class="orderServices">
                <div class="orderServiceWrapper">
                    <div class="orderServiceMain">
                        <DescBannerBlock>
                            <template #title>
                                {{ $t('bill_order_me_services_alert_title') }}
                            </template>
                            <template #desc>
                                {{ $t('bill_order_me_services_alert_desc') }}
                            </template>
                        </DescBannerBlock>
                    </div>

                    <!--                    {{ UserServices }}-->

                    <hr>

                    <br><br>

                    <div class="orderServiceMainList">
                        <div class="orderServiceMainListWrapper">
                            <div class="orderServiceMainListTable">
                                <div class="orderServiceMainListTableHeaderColumn"
                                     style="background: #D6FFF3; padding: 14px 36px; border-radius: 10px 10px 0 0;">
                                    <div class="orderServiceMainListTableHeaderWrapper"
                                         style="display: flex; flex-flow: row; justify-content: left; align-items: center">
                                        <div class="orderServiceMainListTableHeaderRow" style="min-width: 170px;">
                                            Наименование
                                        </div>
                                        <div class="orderServiceMainListTableHeaderRow"
                                             style="min-width: 170px; margin-left: 20px">
                                            Тарифный план
                                        </div>
                                        <div class="orderServiceMainListTableHeaderRow"
                                             style="min-width: 170px; margin-left: 20px">
                                            Тип
                                        </div>
                                        <div class="orderServiceMainListTableHeaderRow"
                                             style="min-width: 170px; margin-left: 20px">
                                            Сумма
                                        </div>
                                        <div class="orderServiceMainListTableHeaderRow"
                                             style="min-width: 170px; margin-left: 20px">
                                            Ресурс
                                        </div>
                                        <div class="orderServiceMainListTableHeaderRow"
                                             style="min-width: 170px; margin-left: 20px">
                                            Инструкция
                                        </div>
                                    </div>
                                </div>
                                <div class="orderServiceMainListTableOrderWrapper">
                                    <div class="orderServiceMainListTableOrderColumn"
                                         v-for="service in UserServices.services" style="padding: 14px 36px;">
                                        <div class="orderServiceMainListTableOrderWrapper"
                                             style="display: flex; flex-flow: row; justify-content: left; align-items: center">
                                            <div class="orderServiceMainListTableOrderRow"
                                                 style="min-width: 170px; max-width: 170px;box-sizing: border-box;">
                                                {{ service.service_tariff.slug + " " }}
                                            </div>
                                            <div class="orderServiceMainListTableOrderRow"
                                                 style="min-width: 170px; margin-left: 20px;max-width: 170px; box-sizing: border-box;">
                                                {{ service.service_tariff.full_name }}
                                            </div>
                                            <div class="orderServiceMainListTableOrderRow"
                                                 style="min-width: 170px; margin-left: 20px;max-width: 170px; box-sizing: border-box;">
                                                {{ service.service_info.full_name }}
                                            </div>
                                            <div class="orderServiceMainListTableOrderRow"
                                                 style="min-width: 170px; margin-left: 20px;max-width: 170px; box-sizing: border-box;">
                                                {{ service.order_info.total_amount }} Руб. / Мес
                                            </div>

                                            <div class="orderServiceMainListTableOrderRow"
                                                 style="min-width: 170px; margin-left: 20px;max-width: 170px; box-sizing: border-box;">
                                                {{ service.resource ? service.resource : "-" }}
                                            </div>

                                            <div class="orderServiceMainListTableOrderRow"
                                                 style="min-width: 170px; margin-left: 20px;max-width: 170px; box-sizing: border-box;">

                                                <template
                                                        v-if="service !== null && service.vw !== 4">
                                                    <button style="padding: 4px 0; font-size: 14px; font-weight: 500; color: #167e61; background: none; border:none; border-radius: 6px; cursor: pointer;">
                                                        Ознакомиться
                                                    </button>
                                                </template>
                                                <template v-else>
                                                    <button @click="showService(service)"
                                                            style="padding: 4px 0; font-size: 14px; font-weight: 500; color: var(--primaryColor); background: none; border:none; border-radius: 6px; cursor: pointer;">
                                                        Управление
                                                    </button>
                                                </template>


                                                <!--                                                {{ service.service_about }}-->
                                            </div>
                                        </div>
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

import {defineComponent} from "vue";
import BillingLayout from "~/layouts/BillingLayout.vue";
import DescBannerBlock from "~/components/pages/bill/DescBannerBlock.vue";

export default defineComponent({
    async asyncData({params, $axios}) {
        try {
            const UserServices = await $axios.$get(`/api/v1/bill/orders/services/entire`);
            return {UserServices}
        } catch (e) {
            console.error("error! load by service data")
        }
    },
    methods: {
        async showService(service) {
            await this.$router.push({
                name: 'bill-order-info-slug',
                params: {
                    slug: service.order_info.slug
                }
            })
        }
    },
    components: {
        DescBannerBlock,
        BillingLayout
    }
})
</script>
<style scoped>
.orderServiceWrapper {
    /*max-width: 62vw;*/
}

.orderServiceMainHeadingBlock {
    box-sizing: border-box;
    background: #EEFFFA;
    color: #0B4F3C;
    padding: 56px 36px 72px;
    border-radius: 16px;
    margin-bottom: 36px;

}


[data-theme="dark"] .orderServiceMainHeadingBlock {
    background: none;
    border: solid 1px var(--primaryBlackBg);
    color: var(--primaryColor) !important;
}


[data-theme="dark"] .orderServiceMainHeadingBlock {
    background: none;
    border: solid 1px var(--primaryBlackBg);
    color: var(--primaryColor) !important;
}

[data-theme="dark"] .orderServiceMainListTableHeaderColumn {
    background: var(--primaryColor) !important;
    color: var(--bg-color);
    font-weight: 500;
}

[data-theme="dark"] .orderServiceMainListTableOrderColumn {
    border: solid 1px var(--blackColor);
    color: var(--primaryColor);
}

[data-theme="dark"] .orderServiceMainListTableOrderColumn:hover {
    border: solid 1px var(--primaryColor);
}

.orderServiceMainHeadingBlock .orderServiceMainHeadingBlockTitle {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

.orderServiceMainHeadingBlock .orderServiceMainHeadingBlockDesc {
    font-size: 18px;
    font-weight: 300;

}
</style>