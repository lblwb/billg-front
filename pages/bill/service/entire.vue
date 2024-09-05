<template>
    <BillingLayout>
        <template #body_view>
            <div class="serviceEntire">
                <div class="serviceEntireWrapper">
                    Тут список всех услуг! (Компонент отключен так как будет вариативен с бэком)
                </div>
            </div>
        </template>
    </BillingLayout>
</template>
<script>

import {defineComponent} from "vue";
import BillingLayout from "~/layouts/BillingLayout.vue";

export default defineComponent({
    components: {
        BillingLayout
    },
})
</script>
<style scoped>

</style>