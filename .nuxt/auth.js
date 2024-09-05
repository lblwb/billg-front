import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LaravelJWTScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/auth/singin",
    "logout": "/auth/signin",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": false,
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "ljwt"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // ljwt
  $auth.registerStrategy('ljwt', new LaravelJWTScheme($auth, {
  "url": "/",
  "endpoints": {
    "login": {
      "url": "/api/v1/auth/signin",
      "method": "post"
    },
    "refresh": {
      "url": "//api/auth/refresh"
    },
    "logout": {
      "url": "/api/v1/auth/logout",
      "method": "post"
    },
    "user": {
      "url": "/api/v1/auth/user",
      "method": "get",
      "property": "user"
    }
  },
  "user": {
    "property": "user",
    "autoFetch": true
  },
  "token": {
    "property": "act",
    "maxAge": 3600,
    "type": "Bearer",
    "global": true,
    "enabled": true,
    "localStorage": true,
    "cookie": false,
    "cookieName": "token"
  },
  "refreshToken": {
    "property": false,
    "data": false,
    "maxAge": 1209600,
    "required": false,
    "tokenRequired": true
  },
  "name": "ljwt",
  "clientId": false,
  "grantType": false
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
