<template>
  <div>
    <Header />
    <!-- Main -->
    <main class="pt-24 min-h-5xl">
      <client-only>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:grid md:grid-cols-2 -mx-4">
            <div class="md:flex-1 px-4">
              <div>
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center cursor-pointer"
                  >
                    <NuxtImg
                      @click="showImage(imageShow)"
                      :src="imageShow.image"
                      fit="cover"
                      class="h-64 md:h-80"
                      loading="lazy" 
                      alt="Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh"
                          sizes="100vw sm:50vw md:400px"
                      /> 
                  </div>
                </div>

                <div class="flex -mx-2 mb-4 overflow-x-scroll style-scroll">
                  <template
                    v-for="(image, index) in productById.listImages"
                    :key="index"
                  >
                    <div class="flex-1 px-2">
                      <button
                        @click="changeImageShow(image)"
                        :class="{
                          'ring-2 ring-indigo-300 ring-inset':
                            image.name === imageShow.name
                        }"
                        class="focus:outline-none w-full rounded-lg h-24 md:h-[75px] bg-gray-100 flex items-center justify-center"
                      >  
                        <NuxtImg
                          :src="image.image"
                          width="100" height="150"
                          fit="cover"
                          loading="lazy" 
                          alt="Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh"
                              sizes="100vw sm:50vw md:400px lg:400px"
                          /> 
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2
                class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
              >
                {{ productById.title }}
              </h2>
              <p class="text-gray-500 text-sm">{{ productById.description }}</p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
        
                    <span class="font-bold text-indigo-600 text-3xl"
                      >{{ formatMoney(chooseNumProduct.price) }} đ</span
                    >
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-green-500 text-xl font-semibold">Giảm 12%</p>
                  <p class="text-gray-400 text-sm">Không free ship</p>
                </div>
              </div>

              <p class="text-gray-500">Thông tin chi tiết sản phẩm</p>

              <div class="flex py-4 space-x-4">
                <div class="relative">

                  <el-select
                    v-model="chooseNumProduct"
                    placeholder="Chọn số lượng"
                    size="large"
                    style="width: 240px; height: 56px"
                    @change="changeNumberProduct"
                  >
                    <template #label="{ label, value }">
                      <span class="hidden">{{ label.label }}: </span>
                      <span style="font-weight: bold; text-[24px]">{{ value.label }}</span>
                    </template>
                    <el-option
                      v-for="item in productById.priceOption"
                      :key="item.label"
                      :label="item.label "
                      :value="item"
                    >
                      <span style="float: left; font-weight: 600; text-indigo-600">{{
                        item.label
                      }}</span>
                    </el-option>
                  </el-select>
                </div>
                <!--
                <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                  Add to Cart
                </button> -->
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <swiper
              :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              770: {
                slidesPerView: 2,
                spaceBetween: 20
              },

              771: {
                slidesPerView: 4,
                spaceBetween: 30
              }}"
              :slides-per-view="3"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
            <swiper-slide v-for="(item, index) in dataShopTeddy" :key="index">
              <article
                class="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border"
              >

                <div class="relative mb-4 rounded-2xl">
                  <a :href="`/product/${item.sn}?name=${item.title}`" :aria-label="item.title" :rel="item.title" class="w-full block h-full">
                    <NuxtImg
                    class="h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    :src="item.imageBg"
                    width="200" height="100"
                    fit="cover"
                    loading="lazy" 
                    alt="Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh"
                        sizes="100vw sm:50vw md:400px"
                    /> 
                </a>
                  <div
                    class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-5 w-5 text-red-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
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
                  <a :href="`/product/${item.sn}?name=${item.title}`" :aria-label="item.title" :rel="item.title" class="block relative group-hover:text-red-700 transition-colors duration-200 line-clamp-1" style="
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                      "
                  >
                    {{ item.title }}
                  </a>
                </h3>
                <div></div>
              </article>
            </swiper-slide>
          </swiper>
        </div>
      </client-only>
    </main>
    <el-dialog v-model="dialogShowVisible" width="800">
      <div slots="header">
        <div class="font-bold text-[24px] pb-5">Ảnh full không che</div>
      </div>
      <div class="flex align-middle justify-center">
        <img class="max-h-screen-md" :src="useAsset(imageShowFull.image)" alt="" />
      </div>
    </el-dialog>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const { formatMoney } = useFormat()
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
const useAsset = (path: string): string => {
  const assets: Record<string, string> = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  return assets['/assets/shop/' + path]
}
const onSwiper = (swiper:any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
const route = useRoute()
const router = useRouter()
console.log('router :>> ', router);
console.log('route :>> ', route);
let imageShow = ref<any>({
  name: '',
  image: ''
})
const directToDetail = async (item: any) =>{
  await router.push({
    name:  'product-id',
    params: { id: item.sn},
    query: {name: item.title}
  })
}
const chooseNumProduct = ref({})

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
    minPrice: 170000,
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
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '45cm',
        price: 170000
      },
      {
        idPrice: 1,
        label: '60cm',
        price: 230000
      },
      {
        idPrice: 1,
        label: '80cm',
        price: 280000
      }
    ]
  },
  {
    sn:1,
    minPrice: 190000,
    imageBg: '71.jpg',
    title: 'Gấu trúc ôm dâu',
    description: '2 size 60cm, 70cm',
    listImages: [
    {
        name: '71',
        image: '71.jpg'
      },
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '60cm',
        price: 190000
      },
      {
        idPrice: 1,
        label: '70cm',
        price: 225000
      }
    ]
  },
  {
    sn:2,
    minPrice: 155000,
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
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '45cm',
        price: 155000
      },
      {
        idPrice: 1,
        label: '55cm',
        price: 195000
      },
      {
        idPrice: 1,
        label: '65cm',
        price: 250000
      },
      {
        idPrice: 1,
        label: '75cm',
        price: 320000
      }
    ]
  },
  {
    sn:3,
    minPrice: 145000,
    imageBg: '81.jpg',
    title: 'Búp bê ôm bình',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
    {
        name: '81',
        image: '81.jpg'
      },
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '35cm',
        price: 145000
      },
      {
        idPrice: 1,
        label: '50cm',
        price: 180000
      },
      {
        idPrice: 1,
        label: '60cm',
        price: 210000
      },
      {
        idPrice: 1,
        label: '70cm',
        price: 270000
      }
    ]
  },
  {
    sn:4,
    minPrice: 145000,
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
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '35cm',
        price: 145000
      },
      {
        idPrice: 1,
        label: '50cm',
        price: 180000
      },
      {
        idPrice: 1,
        label: '60cm',
        price: 210000
      },
      {
        idPrice: 1,
        label: '70cm',
        price: 270000
      }
    ]
  },

  {
    sn:7,
    minPrice: 170000,
    title: 'Doremon ôm bánh',
    imageBg: '99.jpg',
    description: '50cm / 75cm/ 1m',
    listImages: [
      {
        name: '99',
        image: '99.jpg'
      }
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '50cm',
        price: 170000
      },
      {
        idPrice: 1,
        label: '75cm',
        price: 240000
      },
      {
        idPrice: 1,
        label: '1m',
        price: 330000
      }
    ]
  },
  {
    sn:8,
    minPrice: 140000,
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
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '70cm',
        price: 140000
      },
      {
        idPrice: 1,
        label: '1m',
        price: 190000
      },
      {
        idPrice: 1,
        label: '1m3',
        price: 220000
      }
    ]
  },
  {
    sn:9,
    minPrice: 150000,
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
    ],
    priceOption: [
      {
        idPrice: 1,
        label: '50cm',
        price: 150000
      }
    ]
  }

])
let productById = ref<any>({})
const numIdProduct = ref(route.params.id ? Number(route.params.id) : 1)
let imageShowFull = ref<any>({})
let priceShow = ref<number>(0)
const dialogShowVisible = ref<any>(false)
const showImage = (image: any) => {
  imageShowFull.value = image
  dialogShowVisible.value = true
}
const getProductInStore = () => {
  productById.value = dataShopTeddy.filter((item: any) => {
    if (item.sn === numIdProduct.value) {
      return item
    }
  })[0]
  imageShow.value = productById.value.listImages[0]
  chooseNumProduct.value = productById.value.priceOption[0]
}
const changeNumberProduct = (numberProduct: number) => {
  if (!numberProduct) {
    return
  }
  priceShow.value = numberProduct * productById.value.minPrice
}
const changeImageShow = (image: any) => {
  imageShow.value = image
}
getProductInStore()
</script>

<style lang="scss" scoped>
:deep(.el-select__wrapper) {
  height: 56px;
}
:deep(.style-scroll) {
  padding: 8px 0 3px 0;
  overflow: auto;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    margin: 5px 0;
    background-color: #DCDFE6;
  }
  &::-webkit-scrollbar-thumb:hover {
    width: 8px;
    background: #999999;
  }
}
</style>
