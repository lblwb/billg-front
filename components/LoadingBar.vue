<template>
    <div v-if="loading" class="loadingDisplay">
        <div class="loadingDisplayWrapper">
            <div class="loadingDisplayContainer">
                <div class="loadingDisplayLogo" style="margin-bottom: 10px">
                    <img src="~/assets/images/logo.svg" alt="" style="max-width: 420px; max-height: 420px;">
                </div>

                <div class="loadingDisplayText">
                    {{ currentPhrase }}
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        phrases: [
            "Запускаем сервера! 😊",
            "Отвечаем в поддержке 😃",
            "Создаем сайты 😎",
            "Ищем вирусы 😷",
            "Пуленепробиваемый хостинг 💪",
            "Абузы не страшны! 👍",
            "Качество и стабильность 🌟",
            "Надежность в каждом байте 🛡️",
            "Онлайн безопасность 🔒",
            "Свобода в онлайне 🌐",
            "Инновации и развитие 🚀",
            "Бизнес на пике 📈",
            "Web3 и ваш бизнес 🌟",
            "Сервис, который вы заслуживаете 💯",
            "Эффективность и экономия 💰",
            "Реальные люди, настоящая поддержка 👨‍💻",
            "Управление ресурсами 🔄",
            "Эффективность и скорость ⚡",
            "Мощь в вашем дата-центре 💼",
            "(^_^ Лучшая поддержка ^_^)",
            "Web3 и ваше пространство 🌠",
            "{* Решения для вашего бизнеса *}",
            "Интернет без границ 🌍",
            "Серверы на пике! 💥",
            "{'retry'} => {'host'}",
            "Легко и надежно ✅",
            "Скорость и надежность 🚄",
            "Инновации в каждой фразе 🆕",
            "Поддержка, которой можно доверять 👍",
            "Звёздный хостинг 🌟",
            "Счастливых код: {'i':'love <3'}",
            "Мы с вами на каждом шагу 👣",
            "Интернет - это наше призвание 🌐",
            "Сияйте в онлайне! ✨",
            "Счастье в онлайне! 😄",
            "Хостинг с улетными смайлами! 😁",
            "Довольные клиенты - наша цель! 😃"
        ],
    }),
    methods: {

        getRandomUniquePhrase() {
            if (this.phrases.length === 0) {
                this.currentPhrase = "Все фразы использованы";
            } else {
                const randomIndex = Math.floor(Math.random() * this.phrases.length);
                this.currentPhrase = this.phrases[randomIndex];
                this.phrases.splice(randomIndex, 1);
            }
        },

        //

        disableScrolling() {
            var x = window.scrollX;
            var y = window.scrollY;
            window.onscroll = function () {
                window.scrollTo(x, y);
            };
        },
        enableScrolling() {
            window.onscroll = function () {
            };
        },
        start() {
            this.loading = true;
            this.disableScrolling();
        },
        finish() {
            this.loading = false;
            this.enableScrolling();
        },
    },
    created() {
        this.getRandomUniquePhrase(); // Вызываем метод при создании экземпляра Vue
    }
};
</script>

<style scoped>
.loadingDisplay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    text-align: center;
    /* padding-top: 200px; */
    font-size: 30px;
    font-family: sans-serif;
    z-index: 120;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loadingDisplay {

}

.loadingDisplayText {
    font-size: 18px;
}
</style>
