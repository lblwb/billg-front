<template>
    <BillingLayout :layountData="{
        panels: {
            left_show: false, right_show: false
        }
    }">
        <template #body_view>
            <div class="bonusWrapper">
                bonus content
            </div>
        </template>
    </BillingLayout>
</template>

<script>
import BillingLayout from '~/layouts/BillingLayout.vue';

export default {
    data() {
        return {}
    },
    components: {
        BillingLayout
    },
    mounted() {
        this.$router.push({
            name: "index"
        })
    },
}
</script>