<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import ModalEdit from "~/components/pages/bill/dashboard/order/modalEdit.vue";

export default defineComponent({
    name: "ModalEditDnsRec",
    methods: {

        modalDnsHidden() {
            this.$store.dispatch("billing/order/info/dns/edit/showDnsRecModal", {status: false});
            this.$store.dispatch("billing/order/info/dns/edit/setDataDnsRecModal", {data: null});
        },
        parseSubDomain(itemRec) {
            try {
                console.log(itemRec.name, itemRec.zone_name);
                return itemRec.name ? itemRec.name.replace("." + itemRec.zone_name, "") : ""
            } catch (e) {
                return ""
            }
        },
    },
    computed: {
        ...mapGetters({
            dnsRecEditModalShow: "billing/order/info/dns/edit/getDnsRecModalShow",
            dnsRecEditModalData: "billing/order/info/dns/edit/getDnsRecModalData"
        })
    },
    components: {
        ModalEdit,
    }
})
</script>

<template>
    <ModalEdit :isOpen="dnsRecEditModalShow" @close="modalDnsHidden">
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecEditModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                Название [[subadr]].{{ dnsRecEditModalData.zone_name }}
            </div>
            <input type="url" placeholder="" :value="parseSubDomain(dnsRecEditModalData)"
                   style="width: 100%; padding: 12px 16px; border: solid 1px #333; border-radius: 8px; box-sizing: border-box; background: transparent; color: #fff;">
        </div>
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecEditModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                Ресурс —> IP Адрес
            </div>
            <input type="text" placeholder="" :value="dnsRecEditModalData.content"
                   style="width: 100%; padding: 12px 16px; border: solid 1px #333; border-radius: 8px; box-sizing: border-box; background: transparent; color: #fff;">
        </div>
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecEditModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                TTL / Задержка обновления.
            </div>
            <input type="number" min="1" max="9000" placeholder="" :value="dnsRecEditModalData.ttl"
                   style="width: 100%; padding: 12px 16px; border: solid 1px #333; border-radius: 8px; box-sizing: border-box; background: transparent; color: #fff;">
        </div>

        <button style="width: 100%; padding: 12px 16px; border-radius: 10px; background: var(--primaryBlurBg); font-size: 13px; border: none; color: var(--primaryColor)">
            Записать
        </button>

        <!--                        {{ dnsRecModalData }}-->
    </ModalEdit>
</template>

<style scoped>

</style>