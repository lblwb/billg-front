<template>
    <AuthInterfaceLayout :layountData="{
        panels: {
            left_show: false, right_show: false
        }
    }">
        <template #body_view>
            <!-- Login -->
            Exit.
        </template>
    </AuthInterfaceLayout>
</template>
<script>
export default {
    middleware: ["auth"],
    async mounted() {
        //logout account
        await this.$auth.logout();
    },
}
</script>