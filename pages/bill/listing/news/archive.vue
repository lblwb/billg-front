<template>
    <BillingLayout>
        <template #body_view>
            <!--            Dashboard-->
            <div class="dashboardNews">
                <div class="dashboardNewsContainer">
                    <div class="dashboardNewsMain">
                        <div class="dashboardNewsMainHeading" style="margin-bottom: 36px">
                            <div class="dashboardNewsMainHeadingTitle">
                                <h1>Архив новостей</h1>
                            </div>
                        </div>


                        <div class="dashboardHomeNewsListing">
                            <div class="dashboardHomeNewsListingWrapper">
                                <div class="dashboardHomeNewsListingList">
                                    <div class="newsListingListWrapper" v-if="newsData">
                                        <div class="newsListingListBlock"
                                             style="padding: 16px; background: #FBFBFB; margin-bottom: 24px; border-radius: 6px"
                                             v-for="news_item in newsData"
                                             @click="$router.push({name:'bill-listing-news-slug', params:{slug: news_item.slug}})" v-if="news_item['full_title'] !== '' && news_item['full_title_' + $i18n.locale] !== ''">
                                            <div class="newsListingListBlockWrapper">
                                                <div class="newsListingListBlockHeading">
                                                    <div class="newsListingListBlockHeadingTitle"
                                                         style="font-size: 16px; font-weight: 500; cursor: pointer;">
                                                        {{
                                                        $i18n.locale !== "ru" ? news_item['full_title_' + $i18n.locale] : news_item.full_title
                                                        }}
                                                    </div>

                                                </div>
                                                <!--                                                <div class="newsListingListBlockHeadingDesc">-->
                                                <!--                                                    {{-->
                                                <!--                                                    $i18n.locale !== "ru" ? news_item['short_desc_' + $i18n.locale] : news_item.short_desc-->
                                                <!--                                                    }}-->
                                                <!--                                                </div>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="newsListingListWrapper" v-else>
                                        <h2>Новостей сейчас нет :B. Но скоро будут!</h2>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <!--                        <div class="dashboardNewsMainWrapper" style="margin-bottom: 24px">-->
                        <!--                            <div class="dashboardNewsMainContainer">-->
                        <!--                                <div class="dashboardNewsMainContent" v-if="newsData.full_desc !== null" style="">-->
                        <!--                                    <div class="dashboardNewsMainContentBlock"-->
                        <!--                                         v-html="$i18n.locale !== 'ru' ? newsData['full_desc_' + $i18n.locale] : newsData.full_desc"-->
                        <!--                                         style="line-height: clamp(2.2vh, 4.4vh, 3.6vh);font-size: clamp(0.8vh, 2.1vh, 2.1vh);"></div>-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <!--                        <br><br>-->
                        <!--                        {{newsData}}-->
                    </div>
                </div>
            </div>
        </template>
    </BillingLayout>
</template>

<script>
import {defineComponent} from 'vue'
import BillingLayout from "~/layouts/BillingLayout.vue";

export default defineComponent({
    components: {BillingLayout},
    async asyncData({params, $axios}) {
        const news = await $axios.$get('/api/v1/pub/news/listing/all');
        const listNews = news !== null && news.list_news !== undefined && news.list_news !== null ? news.list_news : [];
        return {newsData: listNews};
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

<style scoped>
</style>