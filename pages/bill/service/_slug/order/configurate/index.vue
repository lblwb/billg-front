<template>
    <BillingLayout :layountData="{
        panels: {
            left_show: false, right_show: false
        }
    }">
        <template #body_view>
            <div class="dashboardServiceConfigure">
                <div class="dashboardServiceConfigureContainer">
                    <div class="serviceConfigureMain">


                        <DescBannerBlock v-if="ServiceData.service !== null">
                            <template #title>
                                {{
                                $i18n.locale !== null && $i18n.locale !== "ru" ? ServiceData.service["full_name_" + $i18n.locale] : ServiceData.service.full_name
                                }}
                            </template>
                            <template #desc>
                                {{
                                $i18n.locale !== null && $i18n.locale !== "ru" ? ServiceData.service["banner_desc_" + $i18n.locale] : ServiceData.service.banner_desc
                                }}
                            </template>
                        </DescBannerBlock>

                        <!--                        <div class="serviceConfigureMainHeadingBlock" v-if="ServiceData.service !== null">-->
                        <!--                            <div class="serviceConfigureMainHeadingBlockWrapper">-->
                        <!--                                <div class="serviceConfigureMainHeadingBlockTitle">-->
                        <!--                                    &lt;!&ndash;                                    {{ ServiceData.service.full_name !== null ? ServiceData.service.full_name : "" }}&ndash;&gt;-->

                        <!--                                    {{-->
                        <!--                                    $i18n.locale !== null && $i18n.locale !== "ru" ? ServiceData.service["full_name_" + $i18n.locale] : ServiceData.service.full_name-->
                        <!--                                    }}-->
                        <!--                                </div>-->
                        <!--                                <div class="serviceConfigureMainHeadingBlockDesc">-->
                        <!--                                    {{-->
                        <!--                                    $i18n.locale !== null && $i18n.locale !== "ru" ? ServiceData.service["banner_desc_" + $i18n.locale] : ServiceData.service.banner_desc-->
                        <!--                                    }}-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->

                        <div class="serviceConfigureMainTariffs">

                            <div class="serviceConfigureMainTariffsHeading" style="margin-bottom: 24px">
                                <div class="serviceConfigureMainTariffsHeadingTitle" style="font-size: 18px;">
                                    {{ $t('service_order_conf_part_tariff_plans') }}
                                </div>
                            </div>

                            <div class="serviceConfigureMainTariffsWrapper"
                                 v-if="ServiceData.service && ServiceData.service.tariffs">
                                <div class="serviceConfigureMainTariffsList" style="margin-bottom: 16px;">
                                    <div class="mainTariffsListItem" v-for="tariffItem in ServiceData.service.tariffs"
                                         @click="selectTariff(tariffItem)"
                                         :class="{'Active': tariffItem.slug === select.trarff.slug }"
                                    >
                                        <div class="mainTariffsListItemWrapper">
                                            <div class="mainTariffsListItemTitle">
                                                {{ tariffItem.full_name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--                                {{ currentSelectTariff }}-->

                                <div class="serviceConfigureMainTariffsSelectDesc" style="display: flex;">
                                    <div class="serviceConfigureMainTariffsSelectDescAlert"
                                         style=""
                                         v-if="currentSelectTariff !== undefined && currentSelectTariff.desc_alert !== undefined && currentSelectTariff.desc_alert !== null && currentSelectTariff.desc_alert.length > 0">
                                        <div class="serviceConfigureMainTariffsSelectDescWrapper">
                                            <div class="tariffsSelectDescAlertTitle">
                                                <!--                                                {{ currentSelectTariff.desc_alert }}-->
                                                <!--                                                {{currentSelectTariff.desc_alert_en}}-->
                                                {{
                                                $i18n.locale !== null && $i18n.locale !== "ru" ? currentSelectTariff["desc_alert_" + $i18n.locale] : currentSelectTariff.desc_alert
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="serviceConfigureMainTariffsSlidersConf"
                                     v-if="currentSelectTariff !== undefined && currentSelectTariff.params !== undefined && currentSelectTariff.params !== null && currentSelectTariff.params !== {}"
                                     style="display: flex">
                                    <div class="serviceConfigureMainTariffsSlidersConfWrapper">
                                        <div class="tariffsSliderConfHeading" style="margin-bottom: 24px">
                                            <div class="tariffsSliderConfHeadingTitle" style="font-size: 18px;">
                                                {{ $t('service_order_conf_part_configure_service') }}
                                            </div>
                                        </div>

                                        <div class="tariffsSliderConfBlock">
                                            <!--                                            {{ currentSelectTariff.params }}-->
                                            <div class="tariffsSlidersConfBlockSlider"
                                                 v-for="paramInput in currentSelectTariff.params">
                                                <div class="tariffsSlidersConfBlockSliderLabel"
                                                     style="margin-bottom: 10px;color: #686767;font-size: 14px;font-weight: 500;">
                                                    <!--                                                    {{ form.tariff.params[paramInput.option_name.toLowerCase()].price ?? form.tariff.params[paramInput.option_name.toLowerCase()].price }}-->
                                                    {{ paramInput.option_name }}
                                                    <!--                                                    {{ paramInput.type_param === 'range' ? '/  Руб.' : '' }}-->
                                                </div>
                                                <div class="tariffsSliderConfBlockSliderInput custom-slider"
                                                     style="margin-bottom: 20px"
                                                     v-if="paramInput !== null && paramInput.type_param === 'range'">
                                                    <!--                                                    {{ paramInput.params.step }}-->
                                                    {{ paramInput.step }}
                                                    <SliderRangeInput
                                                            v-model="form.tariff.params[paramInput.option_name.toLowerCase()]"
                                                            :minValue="paramInput.params.min"
                                                            :maxValue="paramInput.params.max"
                                                            :count_text="paramInput.unit_name"
                                                            :price_unit="paramInput.price_unit['rub']"
                                                            :step="paramInput.params.step"
                                                    />

                                                </div>
                                                <div class="tariffsSliderConfBlockSlideInput"
                                                     v-if="paramInput !== null && paramInput.type_param === 'input'"
                                                     style="margin-bottom: 20px">
                                                    <TextInput :placeholder="paramInput.unit_name"
                                                               :price_unit="paramInput.price_unit['rub']"
                                                               v-model="form.tariff.params[paramInput.option_name.toLowerCase()]"
                                                               :optionSlug="paramInput.option_slug"
                                                               :optionInputType="paramInput.type_param === 'input' && paramInput.form_input_type !== undefined ? paramInput.form_input_type : ''"
                                                               :optionInputPattern="paramInput.type_param === 'input' && paramInput.form_input_pattern !== undefined ? paramInput.form_input_pattern : ''"
                                                    />


                                                </div>
                                            </div>

                                            <!--                                            {{ form.tariff.params }}-->

                                            <!--                                            <br><br>-->
                                            <!--                                            {{ form.tariff }}-->
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="serviceConfigureInfo">
                        <div class="tariffInfoBlock">
                            <div class="tariffInfoBlockWrapper">
                                <div class="tariffInfoBlockHeading" style="margin-bottom: 18px;">
                                    <div class="tariffInfoBlockHeadingTitle" style="margin-bottom: 12px">
                                        Итог
                                    </div>
                                    <div class="tariffInfoBlockHeadingLine">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2"
                                             viewBox="0 0 297 2"
                                             fill="none">
                                            <path d="M0 1H297" stroke="#AAF9E1"/>
                                        </svg>
                                    </div>
                                </div>


                                <div class="tariffInfoBlockOrderList">
                                    <div class="tariffInfoBlockOrderListItem"
                                         v-for="paramInput in select.trarff.params" style="margin-bottom: 24px">
                                        <div class="tariffInfoBlockOrderListItemWrapper"
                                             style="display: flex; flex-flow: row wrap;">
                                            <div class="tariffInfoBlockOrderListItemHeading" style="margin-right: 10px">
                                                <div class="tariffInfoBlockOrderListItemHeadingTitle">
                                                    <span style="font-size: 18px;font-weight: 500; color: #686767; text-transform: uppercase;">{{
                                                        paramInput.option_name
                                                        }} – </span>
                                                </div>

                                            </div>
                                            <div class="tariffInfoBlockOrderListItemValue"
                                                 v-if="form.tariff.params !== null && paramInput.option_name !== null && form.tariff.params[paramInput.option_name.toLowerCase()]"
                                                 style="font-size: 18px; font-weight: bold; color: #000;">
                                                <!--                                                {{ params }}-->
                                                <!--                                                {{paramInput}}-->
                                                {{
                                                form.tariff.params[paramInput.option_name.toLowerCase()].value !== null ? form.tariff.params[paramInput.option_name.toLowerCase()].value : ""
                                                }}
                                                <!--  Проверяем есть тип ввод    -->
                                                {{ paramInput.type_param !== "input" ? paramInput.unit_name : "" }}

                                            </div>
                                        </div>

                                    </div>
                                    <!--                                    {{ select.trarff.params }}-->
                                </div>

                                <!--                                {{ select.trarff }}-->
                            </div>

                        </div>

                        <div class="tariffInfoBlockCheckout">
                            <button @click="submitService"
                                    style="background: #67FFD2; border-radius: 24px; padding: 14px 18px; width: 100%; border: none; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; cursor: pointer"
                                    v-if="currentService !== null && currentService.device_name.length > 0 || totalParamsPrice !== 0 || totalConfParamStore !== null && totalConfParamStore">
                                                        <span class="btnPriceWrapper"
                                                              style="display: flex; align-items: center; justify-content: center; text-align: center;">
                                                            <span style="color: #000; margin-right: 6px;">Заказать {{
                                                                currentService.device_name.toLowerCase()
                                                                }} - </span> <span
                                                                style="color: #057856;">{{
                                                            totalParamsPrice
                                                            }}  Р / МЕС</span>
                                                        </span>
                            </button>
                        </div>

                        <!--                        {{ totalConfParamStore }}-->
                    </div>
                </div>
            </div>
            <!--            Услуга: {{ $route.params }}-->
        </template>
    </BillingLayout>
</template>

<script>
// Страница заказа и конфигурации сборки / сервера / услуги
import {defineComponent} from 'vue'
import BillingLayout from "~/layouts/BillingLayout.vue";
import SliderRangeInput from "~/components/pages/bill/service/tariffs/SliderRangeInput.vue";
import TextInput from "~/components/pages/bill/service/tariffs/TextInput.vue";
import DescBannerBlock from "~/components/pages/bill/DescBannerBlock.vue";

export default defineComponent({
    // middleware: 'auth',
    data() {
        return {
            form: {
                tariff: {
                    name: null,
                    slug: null,
                    params: {}
                },
            },
            select: {
                trarff: {}
            }
        }
    },
    methods: {
        selectTariff(tariff_data) {
            try {
                if (tariff_data !== null) {
                    this.select.trarff = tariff_data;
                    this.form.tariff = {name: tariff_data.name, slug: tariff_data.slug, ...this.form.tariff};
                } else {
                    this.select.trarff = null;
                }
            } catch (e) {
                console.error("[select-service-tariff] Error Show First Tariff-1", e);
                this.select.trarff = null;
            }

        },
        async startSelectFirstTariff() {
            try {
                const service = await this.ServiceData.service;
                const service_tariffs = await service.tariffs;
                //
                if (service_tariffs !== null && service_tariffs[0] !== null) {
                    this.select.trarff = service_tariffs[0];
                    this.form.tariff = {
                        name: service_tariffs[0].name,
                        slug: service_tariffs[0].slug, ...this.form.tariff
                    };
                } else {
                    this.select.trarff = {};
                }
            } catch (e) {
                this.select.trarff = {};
                console.warn(new Error("[order-configurate][select-service-tariff] Error Show First Tariff-2", e));
            }

        },
        // Create Order
        async fetchCreateNewOrder() {
            try {
                console.log("[order-configurate] service-tariff", this.currentSelectTariff);
                console.log("[order-configurate] services", this.totalConfParamStore);
                console.log("[order-configurate][create] Success!");


                // Convert the JSON string to a Uint8Array
                // var encoder = new TextEncoder('utf-8');
                const jsonData = {
                    pe: JSON.stringify(this.totalConfParamStore),
                    td: this.currentSelectTariff.slug
                }

                //
                const response = await this.$axios.$post("/api/v1/bill/services/configure/request", jsonData, {});
                console.log(response);

                if (response.error !== null) {
                    const user_name = this.$auth.user.username;
                    await this.loadingBarTimeout();
                    //
                    setTimeout(() => {
                        this.$auth.fetchUser();
                        this.$toast.success(`Поздравляем @${user_name}! — Ваша услуга создана ✅`, {
                            duration: 4000,
                            position: "bottom-right"
                        })
                    }, 2000);

                }
            } catch (e) {
                console.error(new Error("[order-configurate][create-new]", e));
                this.$toast.show("Упс :( что-то пошло не так уже решаем!", {
                    duration: 4000,
                    position: "bottom-right"
                });
            }
        },
        async submitService() {
            await this.$auth.check();
            //update user data
            await this.$auth.fetchUser();
            //
            try {
                const userBalance = parseFloat(this.$auth.$state.user.balance.amount);
                const serviceOrderParams = this.totalConfParamStore;
                const totalParamsPrice = parseFloat(this.totalParamsPrice);
                // console.log("Test", serviceOrderParams);
                // console.log("balance", userBalance, "total", totalParamsPrice, "status", userBalance >= totalParamsPrice)

                console.log("serviceOrderParams", serviceOrderParams, serviceOrderParams.length)

                if (userBalance <= 0) {
                    this.$toast.error("Баланс равен нулю")
                    //>=
                } else if (userBalance < totalParamsPrice) {
                    this.$toast.info("Пополните баланс для оформления услуги!", {
                        duration: 4000,
                        position: "bottom-right"
                    })
                    console.warn("Не достаточный баланс для создания услуги!")
                } else if (serviceOrderParams.length === 0) {
                    this.$toast.error("Услуга не создана. Выберите нужную конфигурацию!", {
                        duration: 4000,
                        position: "bottom-right"
                    })
                    console.warn("Параметры услуги не выбраны!")
                } else {
                    console.log('Заказано: ', serviceOrderParams);
                    await this.fetchCreateNewOrder();
                }
            } catch (e) {
                this.$toast.show("Упс :( что-то пошло не так уже решаем!", {
                    duration: 4000,
                    position: "bottom-right"
                });
                console.log(new Error("Проблема при создании заказа!"))
            }
        },
        async loadingBarTimeout() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 2000)
            });
        }
    },
    //
    async asyncData({params, $axios}) {
        try {
            const ServiceData = await $axios.$get(`/api/v1/bill/service/${params.slug}/show`);
            return {ServiceData}
        } catch (e) {
            console.error("error! load by service data")
        }
    },
    computed: {
        currentService() {
            if (this.ServiceData !== null && this.ServiceData.service !== null) {
                return this.ServiceData.service;
            } else {
                return null;
            }
        },
        currentSelectTariff() {
            // console.log(this.ServiceData.service.tariffs);
            if (this.ServiceData !== null && this.ServiceData.service !== null && this.ServiceData.service.tariffs !== null) {
                return this.ServiceData.service.tariffs.find(
                    (tariff) => tariff.slug === this.select.trarff.slug
                )
            } else {
                return null;
            }

        },
        totalParamsPrice() {
            let count_amount = 0;
            // console.log(this.form.tariff.params);
            // this.form.tariff
            // this.form.tariff.params.forEach((param) => {
            //     count_amount += param.price
            // })

            // Используем Object.values() для получения массива значений параметров
            const paramValues = Object.values(this.form.tariff.params);

            // * param.value

            // Используем метод reduce() для вычисления общей стоимости
            count_amount = paramValues.reduce((total, param) => total + param.price, 0);

            return count_amount.toFixed(-0);
        },
        totalConfParamStore() {
            let serviceConf = {};
            console.log(this.form.tariff.params);
            if (this.form.tariff.params !== undefined && this.form.tariff.params !== null) {
                // this.form.tariff.params.forEach((item) => {
                //     console.log("totalConfParamStore:", item);
                // })

                for (let serviceParamConf in this.form.tariff.params) {
                    // serviceConf[serviceParamConf] = this.form.tariff.params[serviceParamConf];

                    serviceConf[serviceParamConf] = this.form.tariff.params[serviceParamConf];
                    // console.log(serviceConf);
                    // console.log("serviceParamConf: ", serviceParamConf);
                }

                // console.log("Tarrifs-Info", serviceConf)
                return serviceConf;
            }

            return serviceConf;
            // const paramValues = Object.values(this.form.tariff.params);

            // console.log("totalConfParamStore:", this.form.tariff.params);

            // serviceConf = paramValues.reduce((param) => param, 0);
        }
    },
    async mounted() {
        await this.startSelectFirstTariff();
        // this.form.tariff.params["11213"] = "test";
    },
    components: {
        DescBannerBlock,
        TextInput, SliderRangeInput, BillingLayout
    }
})
</script>


<style scoped>

.dashboardServiceConfigure .dashboardServiceConfigureContainer {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 960px) {
    .dashboardServiceConfigure .dashboardServiceConfigureContainer {
        display: flex;
        flex-flow: row wrap;
    }
}

@media screen and (max-width: 560px) {
    .dashboardServiceConfigure .dashboardServiceConfigureContainer {
        display: flex;
        flex-flow: column;
        width: 100%;
        justify-content: left;
    }
}

.dashboardServiceConfigure .serviceConfigureMain {
    flex: 1;
    margin-right: 24px;
    /**/
}


.serviceConfigureMainHeadingBlock {
    box-sizing: border-box;
    background: #EEFFFA;
    color: #0B4F3C;
    padding: 56px 36px 72px;
    border-radius: 16px;
    margin-bottom: 36px;
}

[data-theme="dark"] .serviceConfigureMainHeadingBlock {
    background: none;
    border: solid 1px var(--blackColor);
    color: var(--primaryBg);
}

.serviceConfigureMainHeadingBlock .serviceConfigureMainHeadingBlockTitle {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

.serviceConfigureMainHeadingBlock .serviceConfigureMainHeadingBlockDesc {
    font-size: 18px;
    font-weight: 300;
}

.serviceConfigureMainTariffs {

}

.serviceConfigureMainTariffsWrapper {

}

.serviceConfigureMainTariffs .serviceConfigureMainTariffsList {
    display: flex;
    flex-flow: row wrap;
}

.serviceConfigureMainTariffs .serviceConfigureMainTariffsList .mainTariffsListItem {
    border-radius: 10px;
    border: 2px solid #EFEFEF;
    padding: 14px 48px;
    margin-right: 18px;
    cursor: pointer
}


[data-theme="dark"] .serviceConfigureMainTariffs .serviceConfigureMainTariffsList .mainTariffsListItem {
    border: 1px solid #121212;
    color: var(--primaryColorSecond);
}

.serviceConfigureMainTariffs .serviceConfigureMainTariffsList .mainTariffsListItem.Active {
    background: #67FFD2;
    border: 2px solid #67FFD2;
}

[data-theme="dark"] .serviceConfigureMainTariffs .serviceConfigureMainTariffsList .mainTariffsListItem.Active{
    color: #000;
}

.dashboardServiceConfigure .serviceConfigureInfo {
    max-width: 297px;
    flex: auto;
}


.dashboardServiceConfigure .tariffInfoBlock {
    background: #EEFFFA;
    border-radius: 24px;
    padding: 28px 24px;
    margin-bottom: 18px
}

[data-theme="dark"] .dashboardServiceConfigure .tariffInfoBlock {
    background: none;
    border: solid 1px var(--primaryBlackBg);
}

[data-theme="dark"] .tariffInfoBlockOrderListItemValue {
    color: var(--primaryColor) !important;
}


@media screen and (max-width: 960px) {
    .serviceConfigureMain {
        width: 100%;
    }

    .serviceConfigureMainHeadingBlock {
        width: 100%;
    }

    .dashboardServiceConfigure .serviceConfigureInfo {
        width: 100%;
        max-width: unset;
        flex: auto;
    }

    .dashboardServiceConfigure .tariffInfoBlock {
        width: 100%;
    }

}

</style>

<style scoped>
.custom-slider {
    --trackHeight: 0.5rem;
    --thumbRadius: 1rem;
}

/* style the input element with type "range" */
.custom-slider input[type="range"] {
    position: relative;
    appearance: none;
    /* pointer-events: none; */
    border-radius: 999px;
    z-index: 0;
}

/* ::before element to replace the slider track */
.custom-slider input[type="range"]::before {
    content: "";
    position: absolute;
    width: var(--ProgressPercent, 100%);
    height: 100%;
    background: #00865a;
    /* z-index: -1; */
    pointer-events: none;
    border-radius: 999px;
}

/* `::-webkit-slider-runnable-track` targets the track (background) of a range slider in chrome and safari browsers. */
.custom-slider input[type="range"]::-webkit-slider-runnable-track {
    appearance: none;
    background: #005a3c;
    height: var(--trackHeight);
    border-radius: 999px;
}

/* `::-moz-range-track` targets the track (background) of a range slider in Mozilla Firefox. */
.custom-slider input[type="range"]::-moz-range-track {
    appearance: none;
    background: #005a3c;
    height: var(--trackHeight);
    border-radius: 999px;
}

.custom-slider input[type="range"]::-webkit-slider-thumb {
    position: relative;
    /* top: 50%;
    transform: translate(0, -50%);
    */
    width: var(--thumbRadius);
    height: var(--thumbRadius);
    margin-top: calc((var(--trackHeight) - var(--thumbRadius)) / 2);
    background: #00bd7e;
    border-radius: 999px;
    pointer-events: all;
    appearance: none;
    z-index: 1;
}

.serviceConfigureMainTariffsSelectDescAlert {
    background: #FAFAFA;
    padding: 18px 16px;
    margin-bottom: 36px;
    display: block;
    box-sizing: border-box;
    min-width: 70.5vh;
    border-radius: 10px
}


[data-theme="dark"] .serviceConfigureMainTariffsSelectDescAlert {
    background: none;
    border: solid 1px var(--blackColor);
    color: var(--primaryBg);
}
</style>