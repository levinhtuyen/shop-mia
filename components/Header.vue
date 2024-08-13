<template>
  <div class="style-header fixed w-full z-20">
    <!--Nav-->
    <header class="border-b border-palette-lighter sticky top-0 z-20 bg-[#fbf3f4]">
      <div
        class="flex items-center justify-between mx-auto max-w-6xl"
      >
        <a class="cursor-pointer" href="/">
          <h1 class="flex no-underline items-center gap-2">
            <img width="145" height="145"
              class="w-[145px] rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                src="@/assets/logo.webp"
                lazy
                alt="Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh"
                fit="cover"/> 
          </h1>
        </a>

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
