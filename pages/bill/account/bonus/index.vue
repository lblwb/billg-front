<template>
    <BillingLayout>
        <template #body_view>
            <div class="accountBonus">
                <div class="accountBonusWrapper">
                    <div class="accountBonusMain">

                        <DescBannerBlock>
                            <template #title>
                                Бонусная программа
                            </template>
                            <template #desc>
                                Участвуйте в акциях и получайте вознаграждения по нашей бонусной программе
                            </template>
                        </DescBannerBlock>

                        <!--                        <div class="accountBonusMainHeadingBlock">-->
                        <!--                            <div class="accountBonusMainHeadingBlockWrapper">-->
                        <!--                                <div class="accountBonusMainHeadingBlockTitle">-->
                        <!--                                    Бонусная программа-->
                        <!--                                    &lt;!&ndash;                                    {{ $t('bill_order_me_services_alert_title') }}&ndash;&gt;-->
                        <!--                                </div>-->
                        <!--                                <div class="accountBonusMainHeadingBlockDesc">-->
                        <!--                                    Участвуйте в акциях и получайте вознаграждения по нашей бонусной программе-->
                        <!--                                    &lt;!&ndash;                                    {{ $t('bill_order_me_services_alert_desc') }}&ndash;&gt;-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                    </div>

                    <!--                    {{ UserServices }}-->

                    <hr>

                    <br><br>

                    <div class="accountBonusMainList">
                        <div class="accountBonusMainListWrapper">
                            <!--    -->
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
.accountBonusWrapper {
    max-width: 62vw;
}

.accountBonusMainHeadingBlock {
    box-sizing: border-box;
    background: #EEFFFA;
    color: #0B4F3C;
    padding: 56px 36px 72px;
    border-radius: 16px;
    margin-bottom: 36px;

}

[data-theme="dark"] .accountBonusMainHeadingBlock {
    background: unset;
    color: var(--primaryBg);
    border: solid 1px var(--primaryBg);
}


.accountBonusMainHeadingBlock .accountBonusMainHeadingBlockTitle {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

.accountBonusMainHeadingBlock .accountBonusMainHeadingBlockDesc {
    font-size: 18px;
    font-weight: 300;

}
</style>