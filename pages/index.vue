<template>
<div>
  <Header />
  <!-- Main -->
  <main class="pt-24">
    <div class="mx-auto max-w-6xl">
      <div class="">
        <h1 class="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">Gấu bông giá rẻ - Giá tại xưởng</h1>
        <p class="max-w-xl text-center px-2 mx-auto text-base text-gray-600"> Gấu bông giá rẻ, hợp túi tiền, mua gấu tại kho gấu bông của MIA shop bạn yên tâm về giá cả, chất lượng, hậu mãi tốt nhất. Shop có ship toàn quốc. 🐶</p>
        <div class="flex justify-center pt-6">
          <el-button type="primary" @click="drawerShare = true">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(9.84615,9.84615)"><path d="M21,0c-2.76172,0 -5,2.23828 -5,5c0,0.08594 0.02734,0.16406 0.03125,0.25l-7.84375,3.9375c-0.86719,-0.73047 -1.96484,-1.1875 -3.1875,-1.1875c-2.76172,0 -5,2.23828 -5,5c0,2.76172 2.23828,5 5,5c1.22266,0 2.32031,-0.45703 3.1875,-1.1875l7.84375,3.9375c-0.00391,0.08594 -0.03125,0.16406 -0.03125,0.25c0,2.76172 2.23828,5 5,5c2.76172,0 5,-2.23828 5,-5c0,-2.76172 -2.23828,-5 -5,-5c-1.22266,0 -2.32031,0.45703 -3.1875,1.1875l-7.84375,-3.9375c0.00391,-0.08594 0.03125,-0.16406 0.03125,-0.25c0,-0.08594 -0.02734,-0.16406 -0.03125,-0.25l7.84375,-3.9375c0.86719,0.73047 1.96484,1.1875 3.1875,1.1875c2.76172,0 5,-2.23828 5,-5c0,-2.76172 -2.23828,-5 -5,-5z"></path></g></g>
</svg> &nbsp;
           Chia sẻ
        </el-button>
        </div>
      </div>
        <div class="py-12 max-w-7xl mx-auto">
            <div class="relative pt-2 lg:pt-2 min-h-screen">

              <div class="bg-cover w-full flex justify-center items-center"
                  >
                  <div class="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
                      <div class="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">

                          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">

                              <article  v-for="(item,index) in dataShopTeddy" :key="index"
                                  class="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                                  <div
                                      class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></div>
                                  <div  class="relative mb-4 rounded-2xl">
                                    <nuxt-link @click="directToDetail(item)">
                                      <a :href="`/product/${item.sn}?name=${item.title}`">
                                      <el-image
                                      class="h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                        :src="`${useAsset(item.imageBg)}`"
                                        fit="cover"
                                        > </el-image>
                                      </a>
                                    </nuxt-link>
                                      <div
                                          class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                              stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-red-700">
                                              <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                          </svg>
                                          <span class="ml-1 text-sm text-slate-400">4</span>

                                      </div>

                                  </div>
                                  <div class="grid items-left w-full pb-4 mb-auto">
                                      <div class="w-full">
                                        <p class="text-base text-left  font-semibold line-clamp-1 " style="overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;">Size: {{ item.description }}</p>
                                      </div>
                                      <div class="w-full">
                                          <div class="text-sm flex items-center justify-end text-gray-500 ">
                                            Chỉ từ {{ formatMoney(item.minPrice) }} đ
                                                  <!-- <el-image
                                        fit="cover" src="@/assets/fish-svgrepo-com.svg" width="30" alt=""></el-image> -->
                                          </div>
                                      </div>
                                  </div>
                                  <h3 class="font-medium text-xl leading-8">
                                      <a :href="`/product/${item.sn}?name=${item.title}`"
                                          class="block cursor-pointer font-bold relative group-hover:text-red-700 transition-colors duration-200 line-clamp-2">
                                          {{ item.title }}
                                      </a>
                                  </h3>
                                  <div>
                                  </div>
                              </article>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        </div>
    </div>
  </main>
  <el-drawer class="custom-drawer" :withHeader="false" v-model="drawerShare" direction="btt">
    <template #default>
      <div>
        <p class="is-title-share py-4">Share QRCode Custom Generator Now!</p>
        <div class="md:flex md:justify-start grid grid-cols-7 gap-2">
          <img width="40" height="40" @click="onShareSocial('facebook')" src="@/assets/social/facebook.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('twitter')" src="@/assets/social/twitter.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('pinterest')" src="@/assets/social/pinterest.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('linkedin')" src="@/assets/social/linkedin.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('buffer')" src="@/assets/social/buffer.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('diggit')" src="@/assets/social/diggit.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('email')" src="@/assets/social/email.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('print')" src="@/assets/social/print.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('reddit')" src="@/assets/social/reddit.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('stumbleupon')" src="@/assets/social/stumbleupon.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('tumblr')" src="@/assets/social/tumblr.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('vk')" src="@/assets/social/vk.png" alt="" />
          <img width="40" height="40" @click="onShareSocial('yummly')" src="@/assets/social/yummly.png" alt="" />
        </div>
      </div>
    </template>
  </el-drawer>
  <Footer />
  <BackToTop />
</div>
</template>

<script setup lang="ts">
import {
  useMetaSeoIndex
} from '@/util/meta.ts'
import SchemaJson from '@/util/schema.json'
import {
  ref
} from 'vue'
const { formatMoney } = useFormat()

const useAsset = (path: string): string => {
  const assets: Record<string, string> = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  return assets['/assets/shop/' + path]
}
const fits = reactive(['fill', 'contain', 'cover', 'none', 'scale-down'])
const route = useRoute()
const router = useRouter()
console.log('router :>> ', router);
const dataShopTeddy = reactive([
  {
    sn:5,
    minPrice: 125000,
    title: 'Teddy mặc áo, ôm tim, thắt nơ, đủ màu',
    imageBg: 'teddy6.jpg',
    description: '45cm/ 60cm / 80cm / 1m / m2 / m4 / m6',
    listImages: [
      {
        name: 'teddy1',
        image: 'teddy1.jpg'
      },
      {
        name: 'teddy2',
        image: 'teddy2.jpg'
      },
      {
        name: 'teddy3',
        image: 'teddy3.jpg'
      },
      {
        name: 'teddy4',
        image: 'teddy4.jpg'
      },
      {
        name: 'teddy5',
        image: 'teddy5.jpg'
      },
      {
        name: '10',
        image: '10.jpg'
      },
      {
        name: '11',
        image: '11.jpg'
      },
      {
        name: '12',
        image: '12.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '45cm',
        price: 125000
      },
      {
        idPrice: 2,
        label: '60cm',
        price: 180000
      },
      {
        idPrice: 3,
        label: '80cm',
        price: 240000
      },
      {
        idPrice: 4,
        label: '1m',
        price: 340000
      },
      {
        idPrice: 5,
        label: '1m2',
        price: 420000
      },
      {
        idPrice: 6,
        label: '1m4',
        price: 490000
      },
      {
        idPrice: 7,
        label: '1m6',
        price: 540000
      },
    ]
  },
  {
    sn:10,
    minPrice: 135000,
    title: 'Capybara chảy mũi xanh 2 màu nâu / hồng',
    imageBg: 'capi1.jpg',
    description: '45cm/ 50cm/ 55cm/ 65cm',
    listImages: [
      {
        name: 'capi1',
        image: 'capi1.jpg'
      },
      {
        name: 'capi2',
        image: 'capi2.jpg'
      },
      {
        name: 'capi3',
        image: 'capi3.jpg'
      },
      {
        name: 'capi4',
        image: 'capi4.jpg'
      },
      {
        name: 'capi5',
        image: 'capi5.jpg'
      },
      {
        name: 'capi6',
        image: 'capi6.jpg'
      },
      {
        name: 'capi7',
        image: 'capi7.jpg'
      },
      {
        name: 'capi8',
        image: 'capi8.jpg'
      },
      {
        name: 'capi9',
        image: 'capi9.jpg'
      },
      {
        name: 'capi10',
        image: 'capi10.jpg'
      },
      {
        name: 'capi11',
        image: 'capi11.jpg'
      },
      {
        name: 'capi12',
        image: 'capi12.jpg'
      },
      {
        name: 'capi13',
        image: 'capi13.jpg'
      },
      {
        name: 'capi14',
        image: 'capi14.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '45cm',
        price: 135000
      },
      {
        idPrice: 2,
        label: '50cm',
        price: 155000
      },
      {
        idPrice: 3,
        label: '55cm',
        price: 195000
      },
      {
        idPrice: 4,
        label: '65cm',
        price: 245000
      }
    ]
  },
  {
    sn:11,
    minPrice: 140000,
    title: 'Sâu',
    imageBg: 'casau1.jpg',
    description: '80cm - 1m2',
    listImages: [
      {
        name: 'sau1',
        image: 'sau1.jpg'
      },
      {
        name: 'sau2',
        image: 'sau2.jpg'
      },
      {
        name: 'sau3',
        image: 'sau3.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '80cm',
        price: 140000
      },
      {
        idPrice: 2,
        label: '1m2',
        price: 210000
      }
    ]
  },
  {
    sn:12,
    minPrice: 180000,
    title: 'Sâu đủ màu',
    imageBg: 'sau2.jpg',
    description: '1m con này làm size bao nhiêu cũng được, 2m cũng làm',
    listImages: [
      {
        name: 'casau1',
        image: 'casau1.jpg'
      },
      {
        name: 'casau2',
        image: 'casau2.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '1m',
        price: 180000
      },
      {
        idPrice: 2,
        label: 'Size theo yêu cầu (2m cũng có liên hệ)',
        price: 0
      }
    ]
  },
  {
    sn:13,
    minPrice: 190000,
    title: 'Heo trùm',
    imageBg: 'thotaidai1.jpg',
    description: '2 size 55cm 65cm',
    listImages: [
      {
        name: 'heonontrum1',
        image: 'heonontrum1.jpg'
      },
      {
        name: 'heonontrum2',
        image: 'heonontrum2.jpg'
      },
      {
        name: 'heonontrum3',
        image: 'heonontrum3.jpg'
      },
      {
        name: 'heonontrum4',
        image: 'heonontrum4.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '55cm',
        price: 190000
      },
      {
        idPrice: 2,
        label: '65cm',
        price: 230000
      }
    ]
  },
  {
    sn:13,
    minPrice: 230000,
    title: 'Thỏ tai dài',
    imageBg: 'heonontrum1.jpg',
    description: '60cm / 70cm',
    listImages: [
      {
        name: 'thotaidai2',
        image: 'thotaidai2.jpg'
      },
      {
        name: 'thotaidai1',
        image: 'thotaidai1.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '60cm',
        price: 230000
      },
      {
        idPrice: 2,
        label: '70cm',
        price: 280000
      }
    ]
  },
  {
    sn:13,
    minPrice: 145000,
    title: 'Búp bê ôm bình',
    imageBg: 'bupbeombinh3.jpg',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
      {
        name: 'bupbeombinh3',
        image: 'bupbeombinh3.jpg'
      },
      {
        name: 'bupbeombinh1',
        image: 'bupbeombinh1.jpg'
      },
      {
        name: 'bupbeombinh2',
        image: 'bupbeombinh2.jpg'
      },
      {
        name: 'bupbeombinh4',
        image: 'bupbeombinh4.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '35cm',
        price: 145000
      },
      {
        idPrice: 2,
        label: '50cm',
        price: 180000
      },
      {
        idPrice: 3,
        label: '60cm',
        price: 210000
      },
      {
        idPrice: 4,
        label: '70cm',
        price: 270000
      }
    ]
  },
  {
    sn:14,
    minPrice: 140000,
    title: 'Kuromi',
    imageBg: 'kurumi2.jpg',
    description: '40cm / 50cm / 60cm',
    listImages: [
      {
        name: 'kurumi1',
        image: 'kurumi1.jpg'
      },
      {
        name: 'kurumi2',
        image: 'kurumi2.jpg'
      },
      {
        name: 'kurumi3',
        image: 'kurumi3.jpg'
      },
      {
        name: 'kurumi4',
        image: 'kurumi4.jpg'
      },
      {
        name: 'kurumi5',
        image: 'kurumi5.jpg'
      },
      {
        name: 'kurumi6',
        image: 'kurumi6.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '40cm',
        price: 140000
      },
      {
        idPrice: 2,
        label: '50cm',
        price: 170000
      },
      {
        idPrice: 3,
        label: '60cm',
        price: 200000
      }
    ]
  },
  {
    sn:15,
    minPrice: 65000,
    title: 'Doremon, nobita, xuka',
    imageBg: 'xuka3.jpg',
    description: '50cm / 60cm / 70cm / 80cm',
    listImages: [
      {
        name: 'doremon1',
        image: 'doremon1.jpg'
      },
      {
        name: 'doremon2',
        image: 'doremon2.jpg'
      },
      {
        name: 'doremon3',
        image: 'doremon3.jpg'
      },
      {
        name: 'doremon4',
        image: 'doremon4.jpg'
      },
      {
        name: 'doremon5',
        image: 'doremon5.jpg'
      },
      {
        name: 'doremon6',
        image: 'doremon6.jpg'
      },
      ,
      {
        name: 'xuka1',
        image: 'xuka1.jpg'
      },
      {
        name: 'xuka2',
        image: 'xuka2.jpg'
      },
      {
        name: 'xuka3',
        image: 'xuka3.jpg'
      },
      {
        name: 'xuka4',
        image: 'xuka4.jpg'
      },
      {
        name: 'xuka5',
        image: 'xuka5.jpg'
      },
      {
        name: 'xuka6',
        image: 'xuka6.jpg'
      },
      {
        name: 'xuka7',
        image: 'xuka7.jpg'
      },
      {
        name: 'nobita1',
        image: 'nobita1.jpg'
      },
      {
        name: 'nobita2',
        image: 'nobita2.jpg'
      },
      {
        name: 'nobita3',
        image: 'nobita3.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: 'Doremon 50cm',
        price: 160000
      },
      {
        idPrice: 2,
        label: 'Doremon 75cm',
        price: 230000
      },
      {
        idPrice: 3,
        label: 'Doremon 1m',
        price: 320000
      },
      {
        idPrice: 4,
        label: 'Nobita / xuka 50cm',
        price: 115000
      },
      {
        idPrice: 5,
        label: 'Nobita / xuka 60cm',
        price: 135000
      },
      {
        idPrice: 6,
        label: 'Nobita / xuka 70cm',
        price: 170000
      },
      {
        idPrice: 7,
        label: 'Nobita / xuka 80cm',
        price: 210000
      },
      {
        idPrice: 8,
        label: 'Doremon ôm bánh 50cm',
        price: 170000
      },
      {
        idPrice: 9,
        label: 'Doremon ôm bánh 75cm',
        price: 240000
      },
      {
        idPrice: 10,
        label: 'Doremon ôm bánh 1m',
        price: 330000
      }
    ]
  },
  {
    sn:16,
    minPrice: 130000,
    title: 'Gấu cosplay pikachu',
    imageBg: 'pikachu4.jpg',
    description: '35cm',
    listImages: [
      {
        name: 'pikachu1',
        image: 'pikachu1.jpg'
      },
      {
        name: 'pikachu2',
        image: 'pikachu2.jpg'
      },
      {
        name: 'pikachu3',
        image: 'pikachu3.jpg'
      },
      {
        name: 'pikachu4',
        image: 'pikachu4.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '35cm',
        price: 130000
      }
    ]
  },
  {
    sn:16,
    minPrice: 120000,
    title: 'Gấu dâu',
    imageBg: 'gaudau2.jpg',
    description: '45cm / 60cm / 80cm',
    listImages: [
      {
        name: 'gaudau1',
        image: 'gaudau1.jpg'
      },
      {
        name: 'gaudau2',
        image: 'gaudau2.jpg'
      },
      {
        name: 'gaudau3',
        image: 'gaudau3.jpg'
      },
      {
        name: 'gaudau4',
        image: 'gaudau4.jpg'
      }
    ]
  },
  {
    sn:1,
    minPrice: 140000,
    imageBg: '71.jpg',
    title: 'Gấu trúc ôm dâu',
    description: '2 size 60cm, 70cm',
    listImages: [
    {
        name: '71',
        image: '71.jpg'
      },
    ]
  },
  {
    sn:2,
    minPrice: 105000,
    imageBg: '101.jpg',
    title: 'Heo ôm bình',
    description: '45cm / 55cm / 65cm / 75cm',
    listImages: [
    {
        name: 'heoombinh9',
        image: 'heoombinh9.jpg'
      },
      {
        name: 'heoombinh8',
        image: 'heoombinh8.jpg'
      },
      {
        name: 'heoombinh7',
        image: 'heoombinh7.jpg'
      },
      {
        name: 'heoombinh6',
        image: 'heoombinh6.jpg'
      },
      {
        name: 'heoombinh5',
        image: 'heoombinh5.jpg'
      },
      {
        name: 'heoombinh4',
        image: 'heoombinh4.jpg'
      },
      {
        name: 'heoombinh3',
        image: 'heoombinh3.jpg'
      },
      {
        name: 'heoombinh2',
        image: 'heoombinh2.jpg'
      },
      {
        name: 'heoombinh1',
        image: 'heoombinh1.jpg'
      },
    ]
  },
  {
    sn:3,
    minPrice: 95000,
    imageBg: '81.jpg',
    title: 'Búp bê ôm bình',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
    {
        name: '81',
        image: '81.jpg'
      },
    ]
  },
  {
    sn:4,
    minPrice: 95000,
    imageBg: 'heobaby6.jpg',
    title: 'Heo baby ',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
      {
        name: 'heobaby1',
        image: 'heobaby1.jpg'
      },
      {
        name: 'heobaby2',
        image: 'heobaby2.jpg'
      },
      {
        name: 'heobaby3',
        image: 'heobaby3.jpg'
      },
      {
        name: 'heobaby4',
        image: 'heobaby4.jpg'
      },
      {
        name: 'heobaby5',
        image: 'heobaby5.jpg'
      },
      {
        name: 'heobaby6',
        image: 'heobaby6.jpg'
      },
      {
        name: 'heobaby7',
        image: 'heobaby7.jpg'
      },
      {
        name: 'heobaby8',
        image: 'heobaby8.jpg'
      },
      {
        name: 'heobaby9',
        image: 'heobaby9.jpg'
      },
    ]
  },

  {
    sn:7,
    minPrice: 120000,
    title: 'Doremon ôm bánh',
    imageBg: '99.jpg',
    description: '50cm / 75cm/ 1m',
    listImages: [
      {
        name: '99',
        image: '99.jpg'
      }
    ]
  },
  // {
  //   sn:8,
  //   minPrice: 'Rẻ như cho',
  //   title: 'Nobita / xuka',
  //   imageBg: '99.jpg',
  //   description: '50cm / 60cm / 70cm / 80cm',
  //   listImages: [
  //     {
  //       name: '99',
  //       image: '99.jpg'
  //     }
  //   ]
  // },
  {
    sn:8,
    minPrice: 90000,
    title: 'Báo hồng',
    imageBg: 'baohong3.jpg',
    description: '70cm / 1m / m3',
    listImages: [
      {
        name: 'baohong1',
        image: 'baohong1.jpg'
      },
      {
        name: 'baohong2',
        image: 'baohong2.jpg'
      },
      {
        name: 'baohong3',
        image: 'baohong3.jpg'
      },
      {
        name: 'baohong4',
        image: 'baohong4.jpg'
      }
    ]
  },
  {
    sn:9,
    minPrice: 100000,
    title: 'Hải ly cosplay gấu dâu',
    imageBg: '91.jpg',
    description: '40cm / 50cm / 60cm',
    listImages: [
      {
        name: '91',
        image: '91.jpg'
      },
      {
        name: '21',
        image: '21.jpg'
      },
      ,
      {
        name: 'loopy1',
        image: 'loopy1.jpg'
      },
      {
        name: 'loopy2',
        image: 'loopy2.jpg'
      },
      {
        name: 'loopy3',
        image: 'loopy3.jpg'
      },
      {
        name: 'loopy4',
        image: 'loopy4.jpg'
      },
      {
        name: 'loopy5',
        image: 'loopy5.jpg'
      },
      {
        name: 'loopy6',
        image: 'loopy6.jpg'
      }
    ]
  }

])
const drawerShare = ref(false)
const directToDetail = async (item: any) =>{
  await router.push({
    name:  'product-id',
    params: { id: item.sn},
    query: {name: item.title}
  })
}
const onShareSocial = (social: string) => {
  if (!social) {
    return
  }
  const link = document.createElement('a');
  switch (social) {
    case 'facebook':
      link.href = `https://www.facebook.com/sharer/sharer.php?u=https://gaubongmia.com/`
      break;
    case 'twitter':
      link.href = `https://twitter.com/share?url=https://gaubongmia.com/&text=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    case 'pinterest':
      link.href = `https://pinterest.com/pin/create/link/?url=https://gaubongmia.com/&media=https://gaubongmia.com/bg.png&description=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    case 'linkedin':
      link.href = `http://www.linkedin.com/shareArticle?mini=true&url=https://gaubongmia.com/`
      break;
    case 'bufferapp':
      link.href = `https://bufferapp.com/add?url=https://gaubongmia.com/&text=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    case 'diggit':
      link.href = `http://www.digg.com/submit?url=https://gaubongmia.com/`
      break;
    case 'email':
      link.href = `mailto:?Subject=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng&Body=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng https://gaubongmia.com/`
      break;
    case 'print':
      window.print()
      break;
    case 'reddit':
      link.href = `http://reddit.com/submit?url=https://gaubongmia.com/&title=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    case 'stumbleupon':
      link.href = `http://www.stumbleupon.com/submit?url=https://gaubongmia.com/&title=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    case 'tumblr':
      link.href = `https://www.tumblr.com/share/link?url=https://gaubongmia.com/&title=Xưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    case 'vk':
      link.href = `http://vkontakte.ru/share.php?url=https://gaubongmia.com/`
      break;
    case 'yummly':
      link.href = `http://www.yummly.com/urb/verify?url=https://gaubongmia.com/&title=TXưởng sản xuất gấu bông Mia chuyên sản xuất các loại gấu bông, gấu cử nhân, gối ôm HOT trên thị. Mia cam kết là xưởng sản xuất uy tín chất lượng`
      break;
    default:
      link.href = `https://www.facebook.com/sharer/sharer.php?url=https://gaubongmia.com/`
  }
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
onMounted(async () => {

})

useMetaSeoIndex()
useHead({
  script: [{
      type: 'application/ld+json',
      children: JSON.stringify(SchemaJson.schema1),
      async: true,
      defer: true
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(SchemaJson.schema2),
      async: true,
      defer: true
    }
  ]
})
</script>

<style>
.work-sans {
  font-family: 'Work Sans', sans-serif;
}
.style-image {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  box-sizing:border-box;
  padding:0;
  border:none;
  margin:auto;
  display:block;
  width:0;
  height:0;
  min-width:100%;
  max-width:100%;
  min-height:100%;
  max-height:100%
}
#menu-toggle:checked+#menu {
  display: block;
}

.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

.carousel-open:checked+.carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked~.control-1,
#carousel-2:checked~.control-2,
#carousel-3:checked~.control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #000;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
