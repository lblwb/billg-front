<template>
    <BillingLayout>
        <template #body_view>
            <div class="accountPartners">
                <div class="accountPartnerWrapper">
                    <div class="accountPartnerMain">
                        <DescBannerBlock>
                            <template #title>
                                {{ $t('bill_partner_alert_title') }}
                            </template>
                            <template #desc>
                                {{ $t('bill_partner_alert_desc') }}
                            </template>
                        </DescBannerBlock>
                    </div>

                    <!--                    {{ UserServices }}-->

                    <hr>
                    <br><br>

                    <div class="accountPartnerMainList">
                        <div class="accountPartnerMainListWrapper">
                            <h2>Проводятся профилактика раздела!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </BillingLayout>
</template>
<script>
import {defineComponent} from 'vue'
import BillingLayout from "~/layouts/BillingLayout.vue";
import DescBannerBlock from "~/components/pages/bill/DescBannerBlock.vue";

export default defineComponent({
    name: "index",
    components: {DescBannerBlock, BillingLayout}
})
</script>

<style scoped>
.accountPartnerWrapper {
    max-width: 62vw;
}

.accountPartnerMainHeadingBlock {
    box-sizing: border-box;
    background: #EEFFFA;
    color: #0B4F3C;
    padding: 56px 36px 72px;
    border-radius: 16px;
    margin-bottom: 36px;

}

[data-theme="dark"] .accountPartnerMainHeadingBlock {
    background: unset;
    color: var(--primaryBg);
    border: solid 1px var(--primaryBg);
}


.accountPartnerMainHeadingBlock .accountPartnerMainHeadingBlockTitle {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

.accountPartnerMainHeadingBlock .accountPartnerMainHeadingBlockDesc {
    font-size: 18px;
    font-weight: 300;

}
</style>