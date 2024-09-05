<template>
    <BillingLayout>
        <template #body_view>
            <div class="orderPanel" v-if="dnsInfo !== null">
                <!--                {{ $route.params }}-->
                <!--       -->


                <div class="orderPanelInfo">
                    <div class="orderPanelInfoWrapper">
                        <div class="orderPanelInfoBlock"
                             style="">
                            <!--                            {{ order }}-->

                            <div class="orderPanelInfoBlockName" style="margin-bottom: 24px">
                                <div class="orderPanelInfoBlockContent">
                                    <div class="orderPanelInfoBlockContentTitle" style="font-size: 16px;">
                                        Управление защитой:
                                    </div>
                                </div>
                            </div>

                            <div class="orderPanelInfoBlockWrapper" style="margin-bottom: 24px;">
                                <div class="orderPanelInfoBlockDnsName"
                                     style="font-size: 32px; font-weight: 700; color: var(--primaryBg); text-transform: uppercase; margin-bottom: 12px;">
                                    <div class="blockDnsNameWrapper" style="display: flex; align-items: center;">
                                        <div class="blockDnsNameIcon"
                                             style="margin-right: 10px; display: flex; align-items: center; justify-content: center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 class="icon icon-tabler icons-tabler-outline icon-tabler-sitemap">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                                                <path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                                                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>
                                                <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"/>
                                                <path d="M12 9l0 3"/>
                                            </svg>
                                        </div>
                                        <div class="blockDnsNameTitle">
                                            {{ dnsInfo.Name }}
                                        </div>
                                    </div>

                                </div>
                                <!--                                <div class="orderPanelInfoBlockDnsHostId">-->
                                <!--                                    {{ orderInfo.zone.Host }}-->
                                <!--                                </div>-->

                                <div class="orderPanelInfoBlockDnsHostOrigNs"
                                     v-if="dnsInfo.original_ns !== null" style="margin-bottom: 16px;">
                                    <div class="dnsHostOrigNsWrapper">
                                        <div class="dnsHostOrigNsItem __Head">
                                            NS:
                                        </div>
                                        <div class="dnsHostOrigNsItem"
                                             v-for="ns in parseOrigNs(dnsInfo.original_ns)">
                                            {{ ns }}
                                        </div>
                                        <div class="dnsHostOrigNsItem __Head"
                                             style="display: flex;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/>
                                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/>
                                                <path d="M16 5l3 3"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <div class="orderPanelInfoBlockDnsDateCreate"
                                     v-if="dnsInfo.CreatedOn !== null">
                                    <div class="dnsHostOrigNsWrapper">
                                        <div class="dnsHostOrigNsItem"
                                             style="border-radius: 8px; color: #fff;">
                                            Дата создания:
                                        </div>
                                        <div class="dnsHostOrigNsItem">
                                            {{ dateToInfo(dnsInfo.CreatedOn) }}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!--                            {{ orderInfo.zone }}-->
                            <!--                            {{ orderInfo.zone.Name }}-->
                            <!--                            {{ dnsInfo.NameServers }}-->


                            <!--    -->
                            <!--                            {{ dnsInfo.OriginalDNSHost }}-->
                            <!--                            {{ dnsInfo.OriginalRegistrar }}-->
                            <!--                            {{ orderInfo.zone.original_ns }}-->

                            <hr style="margin-bottom: 16px; color: #222; border: solid 1px rgb(34, 34, 34);"/>

                            <div class="orderPanelInfoBlockName" style="margin-bottom: 10px">
                                <div class="orderPanelInfoBlockContent">
                                    <div class="orderPanelInfoBlockContentTitle" style="font-size: 16px;">
                                        DNS Записи:
                                    </div>
                                </div>
                            </div>


                            <div class="orderPanelTable" style="margin-bottom: 14px;">
                                <table v-if="dnsRecords !== null">
                                    <thead>
                                    <tr>
                                        <td v-for="rec in dnsRecTableHead" class="yet">
                                            {{ rec }}
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="rec in dnsRecords">
                                        <td class="yet">
                                            {{ rec.type }}
                                        </td>
                                        <td>
                                            {{ parseSubDomain(rec) }}
                                        </td>
                                        <td>
                                            {{ rec.content }}
                                        </td>
                                        <td class="yet">
                                            {{ rec.ttl }}
                                        </td>
                                        <td>
                                            {{
                                            rec.proxied ? "Выполняеться" : "Отсутствует"
                                            }}
                                        </td>
                                        <td class="btnEdit" @click="modalDnsRecEdit(rec)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                 stroke-linecap="round" stroke-linejoin="round"
                                                 class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/>
                                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/>
                                                <path d="M16 5l3 3"/>
                                            </svg>
                                        </td>
                                    </tr>
                                    </tbody>

                                </table>
                            </div>
                            <div class="orderPanelTableAdd">
                                <button @click="createNewDnsRec(dnsInfo)"
                                        style="width: 100%; padding: 12px 16px; border-radius: 10px; background: var(--primaryBlurBg); font-size: 13px; border: none; color: var(--primaryColor);">
                                    Создать новую
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="orderPanelModals">
                    <!--  {{ dnsRecModalShow }} -->
                    <ModalEditDnsRec/>
                    <ModalCreateDnsRec/>
                </div>

            </div>
            <div class="orderPanel" v-else style="color: var(--primaryColor)">
                <h2>Не доступно!</h2>
            </div>
        </template>
    </BillingLayout>
</template>
<script>

import {defineComponent} from "vue";
import BillingLayout from "~/layouts/BillingLayout.vue";
import ModalEditDnsRec from "~/components/pages/bill/dashboard/order/info/dns/ModalEditDnsRec.vue";
import ModalCreateDnsRec from "~/components/pages/bill/dashboard/order/info/dns/ModalCreateDnsRec.vue";
import modalCreateDnsRec from "~/components/pages/bill/dashboard/order/info/dns/ModalCreateDnsRec.vue";

export default defineComponent({
    data() {
        return {
            order: null,
            dnsRecTableHead: ["Тип", "Уровень", "Ресурс", "TTL.СЕК", "Проксирование", "Редакт."]
        }
    },
    async asyncData({params, $axios, app}) {
        const slug = params.slug;
        const respDnsInfo = await $axios.$get(`/api/v1/bill/services/${slug}/info`);
        const orderData = respDnsInfo.order;
        const orderDnsInfoData = respDnsInfo.order_dns;
        const orderDnsRecData = respDnsInfo.order_dns_rec;

        if (respDnsInfo.success) {
            return {order: orderData, dnsInfo: orderDnsInfoData, dnsRecords: orderDnsRecData}
        } else {
            console.log(app);
            app.$toast.info(app.i18n.t("global_not_avail"));
            app.router.back();
        }

    },
    methods: {
        createNewDnsRec(itemRec) {
            console.log(itemRec);
            this.$store.dispatch('billing/order/info/dns/new/showDnsRecModal', {status: true});
            this.$store.dispatch("billing/order/info/dns/new/setDataDnsRecModal", {
                data: {
                    zone_name: itemRec.Name,
                    ttl: 60
                }
            })
            // this.$store.dispatch("billing/order/info/dns/rec/showDnsRecModal", {status: true});
            // this.$store.dispatch("billing/order/info/dns/rec/setDataDnsRecModal", {data: itemRec})
        },
        parseOrigNs(origNsStr) {
            try {
                // original_ns
                return JSON.parse(origNsStr)
            } catch (e) {
                return [];
            }
        },
        parseSubDomain(itemRec) {
            try {
                console.log(itemRec.name, itemRec.zone_name);
                return itemRec.name ? itemRec.name.replace("." + itemRec.zone_name, "") : ""
            } catch (e) {
                return ""
            }
        },
        dateToInfo(date_str) {
            try {
                const date = new Date(date_str);
                return date.toLocaleString();
            } catch (e) {
                return ""
            }
        },
        modalDnsRecEdit(itemRec) {
            this.$store.dispatch("billing/order/info/dns/rec/showDnsRecModal", {status: true});
            this.$store.dispatch("billing/order/info/dns/rec/setDataDnsRecModal", {data: itemRec})
            // alert(JSON.stringify(itemRec));
            // const idRec = itemRec.id;
            // itemRec
        },
    },
    computed: {
        modalCreateDnsRec() {
            return modalCreateDnsRec
        }
    },
    components: {
        ModalCreateDnsRec,
        ModalEditDnsRec,
        BillingLayout
    }
})
</script>
<style scoped>

.orderPanelInfoBlock {
    background: var(--primaryBlurBg);
    max-width: 48vw;
    padding: 16px;
    color: #222;
    border-radius: 10px;
}

[data-theme="dark"] .orderPanelInfoBlock {
    background: #0E0E0E;

    color: #fff;
}


.orderServiceWrapper {
    max-width: 62vw;
}

.dnsHostOrigNsWrapper {
    display: flex;
    flex-flow: row wrap;
    gap: 6px;
}

.dnsHostOrigNsItem {
    padding: 6px 8px;
    border-radius: 16px;
    border: solid 1px #444;
    /*background: var(--primaryBlurBg);*/
    color: var(--primaryColor);
    opacity: 1;
}

.dnsHostOrigNsItem.__Head {
    color: #333;
    border-radius: 6px;
    opacity: 0.7;
}

[data-theme="dark"] .dnsHostOrigNsItem.__Head {
    color: #fff;
}


[data-theme="dark"] .dnsHostOrigNsItem {
    color: var(--primaryBg);
}

table {
    border-collapse: separate;
    border-spacing: 10px;
}

table tr {
}

table thead td {
    border-radius: 8px;
    color: #fff;
    border: solid 1px #333;
    background: #fff;
    padding: 6px 8px;
}

[data-theme="dark"] table thead td {
    background: #222;
}

table tbody td {
    border-radius: 8px;
    color: var(--primaryColor);
    border: solid 1px #444;
    padding: 6px 8px;
}


[data-theme="dark"] table tbody td {
    color: var(--primaryColor);
    border: solid 1px #222;
}


table tr > td.yet {
    text-transform: uppercase;
    text-align: center;
    color: #222;
}

[data-theme="dark"] table tr > td.yet {
    color: #eee;
}

table tr > td.btnEdit {
    text-align: center;
    cursor: pointer;
    color: #222;
}

[data-theme="dark"] table tr > td.btnEdit {
    color: #eee;
}

table tr > td.btnEdit:hover,
table tr > td.btnEdit:focus {
    opacity: 0.7;
    color: var(--primaryColor);
}


.orderPanelTableAdd button {
    cursor: pointer;
}

.orderPanelTableAdd button:hover {
    opacity: 0.7;
}

</style>