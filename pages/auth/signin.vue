<template>
    <AuthInterfaceLayout :layountData="{
        panels: {
            left_show: false, right_show: false
        }
    }">
        <template #body_view>
            <div class="authWrapper">
                <div class="authBlock">
                    <div class="authBlockHeading">
                        <div class="authBlockHeadingWrapper">
                            <div class="authBlockHead">
                                <div class="authBlockHeadTitle">
                                    Авторизация
                                </div>
                            </div>
                            <div class="authBlockMore">
                                <div class="authBlockMoreWrapper">
                                    <div class="authBlockMoreBtn">
                                        <button @click="$router.push({name:'auth-signup'})">
                                            Регистрация
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="authBlockForm">
                        <form class="authBlockFormBlock" @submit.prevent="submitAuth">
                            <div class="authBlockFormInputWrapper">
                                <div class="authBlockFormInput">
                                    <input v-model="signInForm.loginOrEmail" placeholder="Логин или e-mail">
                                </div>
                                <div class="authBlockFormInput">
                                    <input v-model="signInForm.secure_password" placeholder="Пароль" type="password">
                                </div>
                            </div>
                            <div class="authBlockFormCaptchaWrapper">
                                <div class="authBlockFormCaptchaBlock">
                                    <div class="authBlockFormCaptchaHeading">
                                        <div class="authBlockFormCaptchaHeadingTitle">
                                            Капча
                                        </div>
                                    </div>
                                    <div class="authBlockFormCaptchaFrame">
                                        <!--                                        <VueHcaptcha sitekey="73554620-7770-42cd-be26-99e7c77f3eec" language="ru"/>-->
                                    </div>
                                </div>
                            </div>

                            <div class="authBlockFormSubmitWrapper">
                                <div class="authBlockFormSubmitBtn">
                                    <button type="submit">
                                        <span class="authBlockFormSubmitBtnWrapper">
                                            <span class="authBlockFormSubmitBtnTitle">
                                                Войти
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </AuthInterfaceLayout>
</template>

<script>
import AuthInterfaceLayout from '~/layouts/AuthInterfaceLayout.vue';

export default {
    // middleware: ["guest"],
    data() {
        return {
            signInForm: {
                loginOrEmail: null,
                secure_password: null
            }
        }
    },
    components: {
        // AuthLayout, VueHcaptcha,
        AuthInterfaceLayout
    },
    methods: {
        async submitAuth() {
            if (this.signInForm.loginOrEmail && this.signInForm.loginOrEmail.length > 1 ||
                this.signInForm.secure_password && this.signInForm.secure_password.length > 1) {

                try {
                    const {data, status} = await this.$auth.loginWith('ljwt', {
                        data: {
                            login_email: this.signInForm.loginOrEmail,
                            password: this.signInForm.secure_password
                        }
                    });

                    if (data !== null && data.act !== null) {
                        const username_str = data.user.username ? "@" + data.user.username : "";
                        this.$toast.success(`Успех! Вы вошли как — ${username_str}`, {
                            position: "bottom-right",
                            duration: 1800,
                        });
                    } else if (status === 401 && data !== null && data.error !== null && data.error.length > 0) {
                        this.$toast.info('Проверьте правильность введенных данных!', {
                            position: "bottom-right",
                            duration: 1800,
                        });
                    } else {
                        await this.$router.push({
                            name: "bill"
                        });
                    }
                    // console.log(response);

                    // console.log(this.auth);

                    //
                } catch (err) {

                    if (err.toString().includes("401")) {
                        this.$toast.info('Проверьте правильность введенных данных!', {
                            position: "bottom-right",
                            duration: 1800,
                        });
                        await this.$router.push({
                            name: "auth-signin"
                        });
                    } else {
                        // console.log(err);
                        this.$toast.show('Усп! Что-то пошло не по плану :u. Но мы уже разбираемся в этом!', {
                            position: "bottom-right",
                            // duration: 1800,
                            duration: 4800,
                            className: "warn"
                        });
                        //
                        await this.$router.push({
                            name: "auth-signin"
                        });
                    }
                }
                // not input data
            } else {
                this.$toast.info('Проверьте правильность введенных данных!', {
                    position: "bottom-right",
                    duration: 1800,
                });
            }
        },
        // userAccountLogout() {
        //     this.$toast.info('Успешный выход!');
        //     this.$auth.logout();
        // },
    },

    async mounted() {
        if (this.$auth.loggedIn) {
            await this.$router.push({
                name: "bill"
            })
        } else {
            await console.debug('[auth] not.')
        }
    },
}
</script>

<style>

.authWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 100px);
}

.authBlock {
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    padding: 18px;
    /*background: aliceblue; border-radius: 16px;*/
}

.authBlock .authBlockHeading {
    margin-bottom: 24px;
}

.authBlock .authBlockHeading .authBlockHeadingWrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
}

.authBlock .authBlockHeading .authBlockHead {

}

.authBlock .authBlockHeading .authBlockHead .authBlockHeadTitle {
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.authBlock .authBlockHeading .authBlockMore {

}

.authBlock .authBlockHeading .authBlockMore .authBlockMoreBtn {

}

.authBlock .authBlockHeading .authBlockMore .authBlockMoreBtn button {
    border: none;
    background: transparent;
    /* */
    color: #29BB92;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* */
    cursor: pointer;
}


/* Form */

.authBlock .authBlockForm {

}

.authBlock .authBlockForm .authBlockFormBlock {

}

.authBlock .authBlockForm .authBlockFormBlock .authBlockFormInputWrapper {
    margin-bottom: 24px;
}

.authBlock .authBlockForm .authBlockFormBlock .authBlockFormInput {
    margin-bottom: 16px;
}

.authBlock .authBlockForm .authBlockFormBlock .authBlockFormInput input {
    padding: 18px 24px;
    /**/
    color: #0B4F3C;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    /**/
    box-sizing: border-box;
    /**/
    border-radius: 12px;
    border: 2px solid #EFEFEF;
}


.authBlock .authBlockForm .authBlockFormCaptchaWrapper {
    margin-bottom: 24px;
}

.authBlock .authBlockForm .authBlockFormCaptchaBlock {
    border-radius: 20px;
    border: 2px solid #EFEFEF;
    padding: 16px 24px;
}

.authBlock .authBlockForm .authBlockFormCaptchaBlock:focus {
    border: 2px solid #1CDEA7;
}

.authBlock .authBlockForm .authBlockFormCaptchaBlock .authBlockFormCaptchaHeading {
    margin-bottom: 16px;
}

.authBlock .authBlockForm .authBlockFormCaptchaBlock .authBlockFormCaptchaHeading .authBlockFormCaptchaHeadingTitle {
    color: #6A6868;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.authBlock .authBlockFormCaptchaFrame {
    width: 100%;
}


.authBlock .authBlockForm .authBlockFormSubmitWrapper {
    color: #0B4F3C;
}

.authBlock .authBlockForm .authBlockFormSubmitBtn button {
    border-radius: 18px;
    background: #1CDEA7;
    width: 100%;
    border: none;
    padding: 16px 24px;
    cursor: pointer;
}

.authBlock .authBlockForm .authBlockFormSubmitBtn button:focus,
.authBlock .authBlockForm .authBlockFormSubmitBtn button:hover {
    filter: chroma();
}


.authBlock .authBlockForm .authBlockFormSubmitBtn button .authBlockFormSubmitBtnTitle {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>