export default {
    globals: {
        id: (globalName) => `RetryApp`,
        layoutId: (globalName) => `RetryAppWrapper`,
        // nuxt: (globalName) => `betMain`,
    },
    telemetry: false,

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Retry Hosting - Bill",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {hid: "description", name: "description", content: ""},
            {name: "format-detection", content: "telephone=no"},
        ],
        link: [{rel: "icon", type: "image/x-icon", href: "/fav-rh.svg"}],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/auth-next",
        "@nuxtjs/toast",
        "@nuxtjs/i18n",
    ],

    plugins: ["~/plugins/axios", "~/plugins/view-role"],

    loading: "~/components/LoadingBar.vue",

    i18n: {
        strategy: 'no_prefix',
        locales: [
            {
                code: 'ru',
                file: 'ru-RU.json',
                name: "Russia",
            },
            {
                code: 'en',
                file: 'en-EN.json',
                name: "English"
            },
        ],
        langDir: 'lang',
        lazy: true,
        defaultLocale: 'ru',
        differentDomains: false,
        vueI18n: {
            fallbackLocale: 'ru',
        },
        // detectBrowserLanguage: {
        //     useCookie: false,
        //     cookieKey: 'lang',
        // }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        // baseURL: "/",
        baseUrl:
        // process.env.NODE_ENV === "dev"
        // ? "http://localhost/"
        // : // ? "http://tubet.net/"
        // : "http://api.tubet.site/"
        // `/`,
            `http://localhost:7700/`,
        //     `http://beta.retry.host/`
        //     `http://beta.retry.host/`
        // "http://localhost/",
    },

    auth: {
        cookie: false,
        localStorage: {
            prefix: "auth."
        },
        redirect: {
            login: "/auth/singin",
            logout: "/auth/signin",
            home: '/' // домашняя страница
        },
        strategies: {
            ljwt: {
                provider: "laravel/jwt",
                url: "/",
                endpoints: {
                    login: {url: "/api/v1/auth/signin", method: "post"},
                    user: {url: "/api/v1/auth/user", method: "get", property: "user"},
                    logout: {url: "/api/v1/auth/logout", method: "post"}
                    // refresh: {url: "/api/v1/auth/refresh", method: "post"},
                },
                user: {
                    property: "user",
                    autoFetch: true,
                },
                token: {
                    property: "act",
                    type: "Bearer",
                    global: true,
                    // maxAge: 60 * 60,

                    enabled: true,
                    localStorage: true,
                    // name: 'ex',
                    cookie: false,
                    cookieName: "token"
                },

                refreshToken: {
                    // maxAge: 20160 * 60,
                }
            }
        },
        watchLoggedIn: true // Для автоматической проверки авторизации
    },

    toast: {
        position: "bottom-right",
        duration: 1800,
        register: [
            // Register custom toasts
            {
                name: "my-error",
                message: "Упс...Что-то пошло не так!",
                options: {
                    type: "error"
                }
            }
        ]
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
};
