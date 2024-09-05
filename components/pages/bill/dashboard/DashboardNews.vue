<template>
    <div class="dashboardHomeNews">
        <div class="dashboardHomeNewsHeading">
            <div class="dashboardHomeNewsHeadingWrapper">
                <div class="dashboardHomeNewsHeadingTitle">
                    {{ $t('news_label') }}
                </div>
            </div>
        </div>
        <div class="dashboardHomeNewsListing">
            <div class="dashboardHomeNewsListingWrapper">
                <div class="dashboardHomeNewsListingList">
                    <div class="newsListingListWrapper">
                        <div class="newsListingListBlock" v-for="news_item in news.listing.list.slice(0,2)"
                             @click="$router.push({name:'bill-listing-news-slug', params:{slug: news_item.slug}})">
                            <div class="newsListingListBlockWrapper">
                                <div class="newsListingListBlockHeading">
                                    <div class="newsListingListBlockHeadingTitle">
                                        {{
                                        $i18n.locale !== "ru" ? news_item['full_title_' + $i18n.locale] : news_item.full_title
                                        }}
                                    </div>

                                </div>
                                <div class="newsListingListBlockHeadingDesc">
                                    {{
                                    $i18n.locale !== "ru" ? news_item['short_desc_' + $i18n.locale] : news_item.short_desc
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="dashboardHomeNewsActions" style="display: flex; flex-flow: column wrap; margin-bottom: 36px">
            <div class="dashboardHomeNewsActionsBtn" style="flex: 1; margin-bottom: 16px; ">
                <button style="padding: 14px 24px; width: 100%; background: transparent; border: 2px solid rgba(28, 222, 167, 0.40); opacity: 0.8; border-radius: 20px; cursor: pointer"
                        @click="openTelegramChannel">
                                        <span class="dashboardHomeNewsActionsBtnWrapper"
                                              style="display: flex; align-items: center; justify-content: space-between">
                                             <span class="dashboardHomeNewsActionsBtnHeading">
                                              <span class="dashboardHomeNewsActionsBtnHeadingTitle"
                                                    style="color: var(--primaryColorSecond); font-size: 16px; font-weight: 500;">{{
                                                  $t('dashboard_news_listing_link_tg_chan')
                                                  }}</span>
                                            </span>
                                            <span class="dashboardHomeNewsActionsBtnIcon">
                                                 <svg width="32" height="25" viewBox="0 0 40 25" fill="none"
                                                      xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.3335 12.5H38.6668M38.6668 12.5L28.0002 23.1667M38.6668 12.5L28.0002 1.83333"
                                                          stroke="#0B4F3C" stroke-width="2" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                        </span>

                </button>
            </div>
            <div class="dashboardHomeNewsActionsBtn" style="flex: 1;">
                <button style="padding: 14px 24px; width: 100%; background: transparent; border: 2px solid var(--primaryBlurBg); border-radius: 20px; cursor: pointer"
                        @click="archiveNews">
                                        <span class="dashboardHomeNewsActionsBtnWrapper"
                                              style="display: flex; align-items: center; justify-content: space-between">
                                             <span class="dashboardHomeNewsActionsBtnHeading">
                                              <span class="dashboardHomeNewsActionsBtnHeadingTitle"
                                                    style="color: #6A6868; font-size: 16px; font-weight: 500;">{{
                                                  $t('dashboard_news_listing_btn_archive')
                                                  }}</span>
                                            </span>
                                            <span class="dashboardHomeNewsActionsBtnIcon">
                                                <svg width="32" height="25" viewBox="0 0 40 25" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.3335 12.5H38.6668M38.6668 12.5L28.0002 23.1667M38.6668 12.5L28.0002 1.83333"
                                                          stroke="#9C9797" stroke-width="2" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                </svg>

                                            </span>
                                        </span>

                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: {
                listing: {
                    list: [
                        // {
                        //     short_title: "Миграция",
                        //     desc: "23 августа плановое миграция в новый дата-центр Tier-3",
                        //     slug: "news_1"
                        // },
                        // {
                        //     short_title: "Миграция",
                        //     desc: "23 августа плановое миграция в новый дата-центр Tier-3",
                        //     slug: "news_2"
                        // }, {
                        //     short_title: "Миграция",
                        //     desc: "23 августа плановое миграция в новый дата-центр Tier-3",
                        //     slug: "news_3"
                        // },
                        // {
                        //     short_title: "Миграция",
                        //     desc: "23 августа плановое миграция в новый дата-центр Tier-3",
                        //     slug: "news_4"
                        // }
                    ]
                }
            }
        }
    },
    methods: {
        async fetchListingNews() {
            try {
                const {list_news} = await this.$axios.$get('/api/v1/pub/news/listing/all');
                this.news.listing.list = list_news;
            } catch (e) {
                console.error('[error][news]', "not listing_news")
            }

        },
        async archiveNews() {
            await this.$router.push({
                name: "bill-listing-news-archive"
            });
        },
        async openTelegramChannel() {
            window.open('https://t.me/retrynews', '_blank');
        }
    },
    mounted() {
        this.fetchListingNews();
    }
}
</script>

<style scoped>
.dashboardHomeNews {

}

.dashboardHomeNews .dashboardHomeNewsHeading {
    margin-bottom: 24px;
}

.dashboardHomeNews .dashboardHomeNewsHeading .dashboardHomeNewsHeadingWrapper {

}

.dashboardHomeNews .dashboardHomeNewsHeading .dashboardHomeNewsHeadingTitle {
    font-size: 20px;
    font-weight: 500;
}

.dashboardHomeNews .dashboardHomeNewsListing {
    margin-bottom: 24px;
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingWrapper {

}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList {

}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListWrapper {
    display: flex;
    flex-flow: row wrap;
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock {
    flex: auto;
    padding: 36px 24px;
    border-radius: 18px;
    cursor: pointer;
    max-width: calc((100% / 2) - 6vh);
    margin-bottom: 24px;
    /*background: #FBFBFB;*/
    background: var(--primaryBlurBg);
    color: var(--primaryColor);
}

[data-theme="dark"] .dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock:first-child {
    background: none;
    border:solid 1px var(--primaryBlackBg);
}


.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock:first-child {
    /*background: #EEFFFA !important;*/
    background: var(--primaryBg);
    /*color: var(--primarySecond);*/
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock:not(:first-child) {
    max-width: calc((100% / 2) - 6vh);
    margin-left: 24px;
    margin-right: 0;
    flex: auto;
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock:nth-of-type(3n) {
    margin-left: 0;
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock .newsListingListBlockWrapper {

}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock .newsListingListBlockHeading {
    margin-bottom: 18px;
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock .newsListingListBlockHeading .newsListingListBlockHeadingTitle {
    font-size: 20px;
    font-weight: 500;
}

.dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock .newsListingListBlockHeadingDesc {
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    text-wrap: avoid
}

@media screen and (max-width: 960px) {
    .dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock {
        max-width: 100% !important;
        width: 100%;
    }

    .dashboardHomeNews .dashboardHomeNewsListing .dashboardHomeNewsListingList .newsListingListBlock:not(:first-child) {
        margin-left: 6px !important;
    }
}
</style>