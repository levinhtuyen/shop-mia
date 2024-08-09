// @ts-ignore

import { reactive, computed } from 'vue'
export const  useMetaSeoIndex = () => {
  const siteData = reactive({
    title:
      'Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh',
    description:
      'Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng',
    content:
      'Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh',
    ogTitle:
      'Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh',
    ogDescription:
      'Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng',
    ogImage: 'https://gaubongmia.com/logo.png',
    ogType: 'article',
    ogLink: 'https://gaubongmia.com/',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'qrcode-custom.com',
    ogImageHeight: '628'
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content:
          'Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng'
      },
      {
        property: 'og:title',
        content:
          'Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh'
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink)
      },
      {
        property: 'og:type',
        content: computed(() => 'website')
      },
      {
        property: 'og:description',
        content:
          'Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng'
      },

      {
        property: 'og:image',
        content: 'https://gaubongmia.com/logo.png'
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots)
      },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website')
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight)
      },
      {
        property: 'msvalidate.01',
        content: computed(() => '11B70B71EB4BE19284312ADFF0011957')
      }
    ],

    link: [
      { rel: 'canonical', href: 'https://gaubongmia.com', id: 'canonical' }
    ]
  })
  return useHead
}
