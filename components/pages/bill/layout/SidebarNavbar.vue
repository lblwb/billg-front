<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "SidebarNavbar",
    data() {
        return {
            isDarkTheme: false,
            billState: {
                services: []
            }
        }
    },
    methods: {
        async fetchEntireService() {
            const request = this.$axios;
            const data = await request.$get("/api/v1/bill/service/entire");

            if (data.services != null) {
                // console.log(data);
                this.billState.services = data.services;
                console.log(this.billState.services);
            }
        },
    },
    async mounted() {
        await this.fetchEntireService();
    }
})
</script>

<template>
    <div class="Sidebar">
        <div class="SidebarWrapper">
            <div class="SidebarLogo" style="cursor:pointer;">
                <div class="SidebarLogoWrapper">
                    <a @click.prevent="$router.push({name:'bill'})">
                        <img src="~/assets/images/logo.svg" alt="Retry Host">
                    </a>
                </div>
            </div>
            <div class="SidebarNavbar">
                <!--                    {{billState}}-->
                <div class="SidebarNavbarChap" v-if="billState.services && billState.services.length > 0">
                    <div class="SidebarNavbarHeading">
                        <div class="SidebarNavbarHeadingTitle">
                            {{ $t('sidebar_link_part_services') }}
                        </div>
                    </div>
                    <div class="SidebarNavbarWrapper">
                        <div class="SidebarNavbarItem" v-for="service in billState.services">
                            <a @click="$router.push({name:'bill-service-slug', params:{
                                    slug: service.slug
                                }})" class="SidebarNavbarItemLink"
                               :class="{'Active': ($route.params.slug === service.slug)}">
                                <div class="SidebarNavbarItemLinkHeading">
                                    <div class="SidebarNavbarItemLinkHeadingTitle">
                                        <!--                                            {{ $i18n.locale }}-->
                                        <!--                                            {{ "full_name_" + $i18n.locale }}-->
                                        <!--         -->
                                        {{
                                        $i18n.locale !== null && $i18n.locale !== "ru" ? service["full_name_" + $i18n.locale] : service["full_name"]
                                        }}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="SidebarNavbarChap" v-if="billState.services && billState.services.length > 0">
                    <div class="SidebarNavbarHeading">
                        <div class="SidebarNavbarHeadingTitle">
                            {{ $t('sidebar_link_part_management') }}
                        </div>
                    </div>
                    <div class="SidebarNavbarWrapper">
                        <div class="SidebarNavbarItem">
                            <a @click="$router.push({name:'bill-order-me'})"
                               :class="{'Active': ($route.name === 'bill-order-me')}"
                               class="SidebarNavbarItemLink">
                                <div class="SidebarNavbarItemLinkHeading">
                                    <div class="SidebarNavbarItemLinkHeadingTitle">
                                        {{ $t('sidebar_link_my_services') }}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="SidebarNavbarItem">
                            <a @click="$router.push({name:'bill-invoices-me'})"
                               :class="{'Active': ($route.name === 'bill-invoices-me')}"
                               class="SidebarNavbarItemLink">
                                <div class="SidebarNavbarItemLinkHeading">
                                    <div class="SidebarNavbarItemLinkHeadingTitle">
                                        {{ $t('sidebar_link_invoices') }}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="SidebarNavbarItem">
                            <a @click="$router.push({name:'bill-account-partner-share'})"
                               :class="{'Active': ($route.name === 'bill-account-partner-share')}"
                               class="SidebarNavbarItemLink">
                                <div class="SidebarNavbarItemLinkHeading">
                                    <div class="SidebarNavbarItemLinkHeadingTitle">
                                        {{ $t('sidebar_link_partner') }}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <!--                            <div class="SidebarNavbarItem">-->
                        <!--                                <a @click="$router.push({name:'bill-account-bonus'})"-->
                        <!--                                   :class="{'Active': ($route.name === 'bill-account-bonus')}"-->
                        <!--                                   class="SidebarNavbarItemLink">-->
                        <!--                                    <div class="SidebarNavbarItemLinkHeading">-->
                        <!--                                        <div class="SidebarNavbarItemLinkHeadingTitle">-->
                        <!--                                            {{ $t('sidebar_link_bonus') }}-->
                        <!--                                        </div>-->
                        <!--                                    </div>-->
                        <!--                                </a>-->
                        <!--                            </div>-->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>


.Sidebar {
    min-width: 320px;
    max-width: 320px;
    height: 100vh;
    max-height: 100%;
    flex-shrink: 0;
    background: #f3f9ff;
    position: fixed;
    top: 0;
    left: 0;
    /* margin-right: 24px; */
}

.Sidebar .SidebarWrapper {
    padding: 24px 36px;
    height: 100%;
}

.Sidebar .SidebarLogo {
    margin-bottom: 36px;
}

.Sidebar .SidebarNavbarHeading {
    margin-bottom: 48px;
}

.Sidebar .SidebarNavbarHeading .SidebarNavbarHeadingTitle {
    color: #3a3939;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.SidebarNavbarItem {
    margin-bottom: 48px;
}

.SidebarNavbarItem .SidebarNavbarItemLink {
    text-decoration: none;
}


.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading {

}

.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading {

}

.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: #8B8585;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
}

/*Active*/
.SidebarNavbarItem .SidebarNavbarItemLink.Active .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: #0B4F3C;
}

.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle:hover {
    color: var(--primaryColor);
}


.SidebarNavbarItem .SidebarNavbarItemLink._Active .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: black;
}

@media screen and (max-width: 960px) {
    .Sidebar {
        transform: translateX(-100%);
    }

    .Sidebar.MobileShow {
        transform: translateX(0%);
    }
}

.Sidebar {
    min-width: 320px;
    max-width: 320px;
    height: 100vh;
    max-height: 100%;
    flex-shrink: 0;
    background: #F3FFFB;

    /*background: #F3FFFB; background: var(--primarySecond); position: fixed; top: 0; left: 0;*/
    /* margin-right: 24px; */
}

[data-theme="dark"] .Sidebar {
    background: #0E0E0E;
}

.Sidebar .SidebarWrapper {
    padding: 24px 16px;
    height: 100%;
}

.Sidebar .SidebarLogo {
    margin-bottom: 36px;
}

.Sidebar .SidebarNavbarHeading {
    margin-bottom: 48px;
}

.Sidebar .SidebarNavbarHeading .SidebarNavbarHeadingTitle {
    color: #4E4E4E;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.SidebarNavbarItem {
    margin-bottom: 28px;
    padding: 10px;
    border-radius: 12px;
    border: solid 1px #f9f1fd;
    cursor: pointer;
    background: transparent;
}

.SidebarNavbarItem:hover,
.SidebarNavbarItem:focus {
    background: none;
    border: solid 1px #00bd7e;
    color: var(--primaryColor);
}

[data-theme="dark"] .SidebarNavbarItem {
    background: #0F0F0F;
    border: solid 1px transparent;
}

[data-theme="dark"] .SidebarNavbarItem:hover,
[data-theme="dark"] .SidebarNavbarItem:focus {
    background: #1D1E1C;
    color: var(--primaryColor) !important;
    border: solid 1px transparent;
}

.SidebarNavbarItem .SidebarNavbarItemLink {
    text-decoration: none;
}


.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading {

}

.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading {

}

.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: currentColor;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

/*Active*/
/*.SidebarNavbarItem .SidebarNavbarItemLink.Active .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: #0B4F3C;
}*/


[data-theme="dark"] .SidebarNavbarItem:hover .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle,
[data-theme="dark"] .SidebarNavbarItem:focus .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: currentColor;
}

/*.SidebarNavbarItem .SidebarNavbarItemLink .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle:hover {
    color: var(--primaryColor);
}
 */


.SidebarNavbarItem .SidebarNavbarItemLink._Active .SidebarNavbarItemLinkHeading .SidebarNavbarItemLinkHeadingTitle {
    color: currentColor;
}

@media screen and (max-width: 960px) {
    .Sidebar {
        transform: translateX(-100%);
    }

    .Sidebar.MobileShow {
        transform: translateX(0%);
    }
}
</style>