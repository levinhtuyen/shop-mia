import { onLoad } from '@/helpers/onLoad'

export default defineNuxtPlugin((nuxtApp) => {
  const { isBot } = useBotInfo()
  if (isBot) return
  onLoad(() => {
    const config = useRuntimeConfig()

    window.fbAsyncInit = function () {
      FB.init({
        appId: config.FB_APP_ID,
        appSecret: config.FB_APP_SECRET,
        cookie: true,
        xfbml: true,
        version: 'v3.3'
      })
      FB.AppEvents.logPageView()
    }
    ;(function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      const js = d.createElement(s)
      js.id = id
      js.crossorigin = 'anonymous'
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  })
})
