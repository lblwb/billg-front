<template>
    <div class="dashboardHomeBonus">
        <div class="dashboardHomeBonusHeading">
            <div class="dashboardHomeBonusHeadingWrapper">
                <div class="dashboardHomeBonusHeadingTitle">
                    {{ $t('account_bonus_label') }}
                </div>
            </div>
        </div>
        <div class="dashboardHomeBonusActions" style="display: flex; flex-flow: column wrap;">
            <div class="dashboardHomeBonusActionsBtn" style="flex: 1; margin-bottom: 16px; box-sizing: border-box">
                <div style="padding: 20px 24px; width: 100%; background: transparent; border: 2px solid rgba(28, 222, 167, 0.40); opacity: 0.8; border-radius: 20px; cursor: pointer; box-sizing: border-box">
                                        <span class="dashboardHomeBonusActionsBtnWrapper"
                                              style="display: flex; align-items: center; justify-content: space-between">
                                             <span class="dashboardHomeBonusActionsBtnHeading">
                                              <span class="dashboardHomeBonusActionsBtnHeadingTitle"
                                                    style="color: #0B4F3C; font-size: 16px; font-weight: 500;">{{ $t('dashboard_account_bonus_action_btn') }}: 0 R$/B</span>
                                            </span>
<!--                                            <span class="dashboardHomeBonusActionsBtnIcon">-->
<!--                                                 <svg width="32" height="25" viewBox="0 0 40 25" fill="none"-->
<!--                                                      xmlns="http://www.w3.org/2000/svg">-->
<!--                                                    <path d="M1.3335 12.5H38.6668M38.6668 12.5L28.0002 23.1667M38.6668 12.5L28.0002 1.83333"-->
<!--                                                          stroke="#0B4F3C" stroke-width="2" stroke-linecap="round"-->
<!--                                                          stroke-linejoin="round"/>-->
<!--                                                </svg>-->
<!--                                            </span>-->
                                        </span>

                </div>
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
                        {
                            short_title: "Миграция",
                            desc: "23 августа плановое миграция в новый дата-центр Tier-3"
                        },
                        {
                            short_title: "Миграция",
                            desc: "23 августа плановое миграция в новый дата-центр Tier-3"
                        }, {
                            short_title: "Миграция",
                            desc: "23 августа плановое миграция в новый дата-центр Tier-3"
                        },
                        {
                            short_title: "Миграция",
                            desc: "23 августа плановое миграция в новый дата-центр Tier-3"
                        }
                    ]
                }
            }
        }
    }
}
</script>

<style scoped>
.dashboardHomeBonus {

}

.dashboardHomeBonus .dashboardHomeBonusHeading {
    margin-bottom: 24px;
}

.dashboardHomeBonus .dashboardHomeBonusHeading .dashboardHomeBonusHeadingWrapper {

}

.dashboardHomeBonus .dashboardHomeBonusHeading .dashboardHomeBonusHeadingTitle {
    font-size: 20px;
    font-weight: 500;
}

.dashboardHomeBonus .dashboardHomeBonusListing {
    margin-bottom: 24px;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingWrapper {

}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList {

}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListWrapper {
    display: flex;
    flex-flow: row wrap;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock {
    flex: auto;
    padding: 36px 24px;
    border-radius: 18px;
    cursor: pointer;
    max-width: calc((100% / 2) - 6vh);
    background: #FBFBFB;
    margin-bottom: 24px;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock:not(:first-child) {
    max-width: calc((100% / 2) - 6vh) !important;
    margin-left: 24px;
    margin-right: 0;
    background: #EEFFFA;
    flex: auto;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock:nth-of-type(3n) {
    margin-left: 0;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock .newsListingListBlockWrapper {

}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock .newsListingListBlockHeading {
    margin-bottom: 18px;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock .newsListingListBlockHeading .newsListingListBlockHeadingTitle {
    font-size: 20px;
    font-weight: 500;
}

.dashboardHomeBonus .dashboardHomeBonusListing .dashboardHomeBonusListingList .newsListingListBlock .newsListingListBlockHeadingDesc {
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    text-wrap: avoid
}
</style>