<script>
import {defineComponent} from 'vue'
import {mapGetters} from "vuex";
import ModalEdit from "~/components/pages/bill/dashboard/order/modalEdit.vue";

export default defineComponent({
    name: "ModalCreateDnsRec",
    data() {
        return {
            rec: {
                dns: {
                    host_name: ""
                }
            }

        }
    },
    methods: {
        modalDnsHidden() {
            this.$store.dispatch("billing/order/info/dns/new/showDnsRecModal", {status: false});
            this.$store.dispatch("billing/order/info/dns/new/setDataDnsRecModal", {data: null});
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
            dnsRecCreateModalShow: "billing/order/info/dns/new/getDnsNewModalShow",
            dnsRecCreateModalData: "billing/order/info/dns/new/getDnsNewModalData"
        })
    },
    components: {
        ModalEdit,
    }
})
</script>

<template>
    <ModalEdit :isOpen="dnsRecCreateModalShow" @close="modalDnsHidden">
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecCreateModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                Название - {{ rec.dns.host_name !== "" ? rec.dns.host_name  : '[[subadr]]' }}.{{
                dnsRecCreateModalData !== null && dnsRecCreateModalData.zone_name !== null ? dnsRecCreateModalData.zone_name : "domain-name.com"
                }}
            </div>
            <input type="url" placeholder="Пример: ftp"
                   style="width: 100%; padding: 12px 16px; border: solid 1px #333; border-radius: 8px; box-sizing: border-box; background: transparent; color: #fff;"
                   v-model="rec.dns.host_name">
        </div>
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecCreateModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                Тип-записи
            </div>
            <select style="width: 100%; padding: 12px 16px; border: solid 1px #333; border-radius: 8px; box-sizing: border-box; background: transparent; color: #fff;">
                <option selected disabled>Выберите тип записи</option>
                <!-- Types  -->
                <option value="A">A</option>
                <option value="AAAA">AAAA</option>
                <option value="CNAME">CNAME</option>
                <option value="MX">MX</option>
                <option value="TXT">TXT</option>
                <option value="SRV">SRV</option>
                <option value="PTR">PTR</option>
                <option value="NS">NS</option>
            </select>
        </div>
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecCreateModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                Ресурс —> IP Адрес
            </div>
            <input type="text" placeholder="Пример: 37.188.18.75"
                   :value="dnsRecCreateModalData !== null ? dnsRecCreateModalData.content: ''"
                   style="width: 100%; padding: 12px 16px; border: solid 1px #333; border-radius: 8px; box-sizing: border-box; background: transparent; color: #fff;">
        </div>
        <div class="box" style="margin-bottom: 14px" v-if="dnsRecCreateModalShow">
            <div class="boxLabel" style="margin-bottom: 8px">
                TTL / Задержка обновления.
            </div>
            <input type="number" min="60" max="9000" placeholder=""
                   :value="dnsRecCreateModalData !== null ? dnsRecCreateModalData.ttl : 60"
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