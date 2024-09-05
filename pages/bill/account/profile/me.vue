<script>
import {defineComponent} from 'vue'
import BillingLayout from "~/layouts/BillingLayout.vue";

export default defineComponent({
    name: "me",
    components: {BillingLayout}
})
</script>

<template>
    <BillingLayout>
        <template #body_view>
            <div class="accountProfile">
                <!--  Аккаунт клиента  -->
            </div>
        </template>
    </BillingLayout>
</template>

<style scoped>

</style>