<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "DescBannerBlock",
    props: {
        title: {
            default: ""
        },
        desc: {
            default: ""
        }
    }
})
</script>

<template>
    <div class="BannerHeadingBlock">
        <div class="BannerHeadingBlockWrapper">
            <div class="BannerHeadingBlockTitle">
                <slot name="title"/>
                <!--                                    {{ $t('bill_order_me_services_alert_title') }}-->
            </div>
            <div class="BannerHeadingBlockDesc">
                <slot name="desc"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

.BannerHeadingBlock {
    box-sizing: border-box;
    background: #EEFFFA;
    color: #0B4F3C;
    padding: 56px 36px 72px;
    border-radius: 16px;
    margin-bottom: 36px;
}

[data-theme="dark"] .BannerHeadingBlock {
    background: #010E0E;
    color: var(--primaryBg);
    /*border: solid 1px var(--primaryBg);*/
}


.BannerHeadingBlock .BannerHeadingBlockTitle {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

.BannerHeadingBlock .BannerHeadingBlockDesc {
    font-size: 18px;
    font-weight: 300;

}
</style>