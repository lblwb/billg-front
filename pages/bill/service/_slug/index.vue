<script>
// На данной странице проверяем есть у клиента уже заказы данной услуги, если есть то показыаем список / list
// Если нет, то переводим его на страницу конфигурации
import {defineComponent} from 'vue'

export default defineComponent({
    async asyncData({route, app, $axios}) {
        try {
            const orders_previous = await $axios.$get(`api/v1/bill/service/${route.params.slug}/previous`);

            if (orders_previous.count > 0) {
                await app.router.push({
                    name: "bill-service-slug-order-list",
                    params: {
                        slug: route.params.slug
                    },
                    propsData: {
                        previous: orders_previous.services
                    }
                })
            } else {
                await app.router.push({
                    name: "bill-service-slug-order-configurate",
                    params: {
                        slug: route.params.slug
                    }
                })
            }

            return {orders_previous}
        } catch (e) {
            await app.router.push({
                name: "bill-service-entire",
            })
        }
    }
})
</script>

<template>

</template>

<style scoped>

</style>