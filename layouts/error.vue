<template>
    <div class="mainContainer" style="
      /* background: bottom; */
      /* background: url(http://new-sims4.ru/wp-content/uploads/2022/06/sa2-8.jpg),
        linear-gradient(#000, #d13531); */
      background-size: cover;
      height: 100vh;
    ">
        <!-- <slot name="body"> -->
        <!-- main content -->
        <main class="mainBody">
            <!-- sidebar left -->
            <!-- Preview page -->
            <div class="bodyView">
                <slot name="body_view">
                    <!-- <Nuxt /> -->
                    <div class="viewMessage">
                        <div class="viewMessageWrapper" style="
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: justify;
              ">
                            <div class="viewMessageErrorPage"
                                 style="margin-bottom: 36px; font-size: 28px; font-weight: 500">
                                <!--                {{-->
                                <!--    error.message === "Network Error"-->
                                <!--      ? ``-->
                                <!--      : `Действие не доступно! Обновите страницу!`-->
                                <!--                }}-->

                                <!--                  {{ 'Упс! Что-то пошло не по плану :('}}-->

                                {{ 'Упс! Цифровой лабиринт :(' }}
                                <!-- Страница не существует! -->
                            </div>
                            <div class="viewMessageErrorPage"
                                 style="margin-bottom: 36px; font-size: 18px; font-weight: 300; max-width: calc(100% / 3);">
                                <!--                {{-->
                                <!--    error.message === "Network Error"-->
                                <!--      ? ``-->
                                <!--      : `Действие не доступно! Обновите страницу!`-->
                                <!--                }}-->

                                <!--                    {{ 'Мы уже получили обратную связь, и работаем над этой проблемой!'}}-->

                                {{
                                'Вы попали в цифровой лабиринт. Не переживайте, наши инженеры ищут выход. Пока вы ждете, попробуйте найти свой собственный путь!"'
                                }}
                                <!-- Страница не существует! -->
                            </div>
                            <div class="viewMessageErrorAction">
                                <nuxt-link to="/">Найти выход -></nuxt-link>
                            </div>
                        </div>
                    </div>
                </slot>
            </div>
        </main>
        <!-- </slot> -->

        <!-- other -->
        <footer class="modules">
            <!-- Проверка досутпности интернета -->
            <!-- <OfflineAlert v-if="isOffline"></OfflineAlert> -->
        </footer>
    </div>
</template>

<script>
// import LeftSideBar from "~/components/bettingMain/sibebar/LeftSideBar.vue";
//
export default {
    name: "errorPage",
    // components: { HeadNavbar, LeftSideBar, RightSideBar, Footer, OfflineAlert },
    // components: { LeftSideBar },
    props: {
        error: {
            type: Object,
        },
        layountData: {
            default() {
                return {
                    panels: {
                        left_show: true,
                        right_show: true,
                    },
                };
            },
            type: Object,
        },
    },
    //
    watch: {
        // isOffline(status) {
        //   if (!status) {
        //     // this.showOnline = true;
        //     setTimeout(() => alert("Соединение потеряно!"), 3000);
        //   }
        // },
    },
    mounted() {
        if (this.error !== null) {
            console.error(this.error);
        }
        //
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 2000)
        })
    },
};
</script>
<style scoped>
/*@import url("~/assets/css/new/main.css");*/

.mainContainer {
    position: relative;
    /*background-image: url('https://media2.giphy.com/media/l2uBoH5AT2lOTH9ayR/giphy.gif?cid=ecf05e47w2i7l02epa50w0w14k8m2t0q70its61thegu34kx&ep=v1_gifs_search&rid=giphy.gif&ct=g');*/
    /*ackground-image: url('http://www.reactiongifs.com/wp-content/uploads/2013/11/ace1.gif');*/
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh; /* Высота экрана */
}

.mainContainer:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Цвет фона с непрозрачностью 0.5 */
}

.mainContainer .viewMessageErrorPage {
    color: #fff;
    z-index: 10;
}

.viewMessageErrorAction {
    text-align: center;
    font-size: 18px;
    z-index: 10;
}

.viewMessageErrorAction > a {
    /*color: #0B4F3C;*/
    color: #fff;
    text-decoration: none;
    opacity: 0.8;
}

.viewMessageErrorAction > a:focus,
.viewMessageErrorAction > a:hover {
    opacity: 0.6;
}
</style>
