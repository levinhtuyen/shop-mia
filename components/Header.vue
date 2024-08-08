<template>
  <div class="style-header fixed w-full z-20">
    <!--Nav-->
    <header class="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div
        class="flex items-center justify-between mx-auto max-w-6xl py-4"
      >
        <a class="cursor-pointer" href="/">
          <h1 class="flex no-underline items-center gap-2">
            <img
              height="45"
              width="45"
              alt="logo"
              class="object-contain"
              src="@/assets/logo.png"
            /><span class="text-xl font-primary font-bold tracking-tight pt-1"
              >MIA shop</span
            >
          </h1>
        </a>
        <!-- <div>
          <a class="relative" aria-label="cart" href="/cart"
            ><svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-cart"
              class="svg-inline--fa fa-shopping-cart fa-w-18 text-palette-primary w-6 m-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
              ></path></svg
          ></a>
        </div> -->
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const isShow = ref(false)
const { locale } = useI18n()
const countryChoose = ref({
  name: 'Indo',
  code: 'ID',
  emoji: '🇮🇩',
  lang: 'in',
  unicode: 'U+1F1EE U+1F1E9',
  image: 'indo.png'
})
const useAsset = (path: string): string => {
  const assets: Record<string, string> = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  return assets['/assets/' + path]
}
const changeLanguage = (item: any) => {
  if (!item) {
    return
  }
  locale.value = item.lang
  countryChoose.value = item
}
const countries = reactive<any>([
  {
    name: 'VN',
    emoji: '🇻🇳',
    lang: 'vi',
    unicode: 'U+1F1FB U+1F1F3',
    image: 'vn.png'
  },
  {
    name: 'En',
    code: 'GB',
    emoji: '🇬🇧',
    lang: 'en',
    unicode: 'U+1F1EC U+1F1E7',
    image: 'us.png'
  },
  {
    name: 'Indo',
    code: 'ID',
    emoji: '🇮🇩',
    lang: 'in',
    unicode: 'U+1F1EE U+1F1E9',
    image: 'indo.png'
  },
  {
    name: 'Fr',
    code: 'FR',
    emoji: 'FE',
    lang: 'fr',
    unicode: 'U+1F1EE U+1F1E9',
    image: 'fr.png'
  }
])

// Function for mobile menu
const hamburgerMenu = () => {
  isShow.value = !isShow
}
</script>

<style lang="scss" scoped>
.style-header {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
}
</style>
