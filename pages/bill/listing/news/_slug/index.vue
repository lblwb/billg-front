<script>
import {defineComponent} from 'vue'
import BillingLayout from "~/layouts/BillingLayout.vue";

export default defineComponent({
    components: {BillingLayout},
    async asyncData({params, $axios}) {
        const {news} = await $axios.$get(`api/v1/pub/news/listing/${params.slug}/show`);
        return {newsData: news};
    },
    computed: {
        getTimePub() {
            try {
                if (this.newsData !== null && this.newsData.created_at !== null && typeof this.newsData.created_at == 'string') {
                    return new Date(this.newsData.created_at).toLocaleDateString({});
                } else {
                    return "";
                }
            } catch (e) {
                console.error('[error][news][show][data-time]', e);
                return "";
            }

        }
    }
})
</script>

<template>
    <BillingLayout>
        <template #body_view>
            <!--            Dashboard-->
            <div class="dashboardNews">
                <div class="dashboardNewsContainer">
                    <div class="dashboardNewsMain">
                        <div class="dashboardNewsMainHeading" style="margin-bottom: 36px">
                            <div class="dashboardNewsMainHeadingTitle">
                                <h1>{{ $i18n.locale !== "ru" ? newsData['full_title_' + $i18n.locale] : newsData.full_title }}</h1>
                            </div>
                            <div class="dashboardNewsMainHeadingSub">
                                <div class="dashboardNewsMainHeadingSubWrapper">
                                    <div class="dashboardNewsMainHeadingSubTime">
                                        {{ getTimePub }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dashboardNewsMainWrapper" style="margin-bottom: 24px">
                            <div class="dashboardNewsMainContainer">
                                <div class="dashboardNewsMainContent" v-if="newsData.full_desc !== null" style="">
                                    <div class="dashboardNewsMainContentBlock" v-html="$i18n.locale !== 'ru' ? newsData['full_desc_' + $i18n.locale] : newsData.full_desc"
                                         style="line-height: clamp(2.2vh, 4.4vh, 3.6vh);font-size: clamp(0.8vh, 2.1vh, 2.1vh);"></div>
                                </div>
                            </div>
                        </div>
                        <!--                        <br><br>-->
                        <!--                        {{newsData}}-->
                    </div>
                </div>
            </div>
        </template>
    </BillingLayout>
</template>

<style scoped>
</style>