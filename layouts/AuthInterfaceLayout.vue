<template>
    <div class="body">
        <div class="BodyNavbar">
            <slot name="header">
                <div class="BodyNavbarWrapper">
                    <div class="BodyNavbarRow">
                        <img src="~/assets/images/logo.svg" alt="Retry Host"/>
                        <!-- TODO: HTML / NAVBAR - Тут скоро что-то будет! -->
                    </div>
                    <div class="BodyNavbarRow">
                    </div>
                </div>
            </slot>
        </div>
        <div class="BodyContext">
            <slot name="body_view"></slot>
        </div>
        <footer>

        </footer>
    </div>
</template>
<script>
// import { mapGetters } from "vuex";
//
export default {
    name: "AuthInterfaceLayout",
    // components: { HeadNavbar, LeftSideBar, RightSideBar, Footer, OfflineAlert },
    components: {
        // OfflineAlert,
    },
    methods: {},
    mounted() {
        // const user = this.$store.js.state.auth.user;
        // if (user) {
        //     this.autofetchUser(true);
        // } else {
        //     this.autofetchUser(false);
        // }
    },
    computed: {},
};
</script>
<style>
@import url("~/assets/css/main.css");
</style>
<style scoped>

.body {
    height: 100% !important;
}

/*Navbar*/

.BodyNavbar {

}

.BodyNavbarWrapper {
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.BodyNavbarRow {
    display: flex;
    align-items: center;
    flex: auto;
}

.BodyNavbarRow:last-child {
    display: flex;
    justify-content: flex-end;
}

.BodyContext {
    padding: 0 24px;
    height: 100%;
}
</style>