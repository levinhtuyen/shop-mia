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
                        <el-image
                       fit="cover"
                      @click="showImage(imageShow)"
                      style="height: 100%"
                      :alt="imageShow.name"
                      :src="useAsset(imageShow.image)"
                    ></el-image>
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
                            <el-image
                          fit="cover"
                          style="height: 75px;width: 75px"
                          :alt="image.name"
                          :src="useAsset(image.image)"
                        ></el-image>
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
                    <!-- <span class="text-indigo-400 mr-1 mt-1"
                      >
                      <el-image
                         fit="cover"
                          src="@/assets/fish-svgrepo-com.svg"
                          width="30"
                          alt=""
                      ></el-image>
                    </span> -->
                    <span class="font-bold text-indigo-600 text-3xl"
                      >{{ formatMoney(priceShow) }} đ</span
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
                    <el-option
                      v-for="item in listNumbersProduct"
                      :key="item.value"
                      :label="item.label + ' Sản phẩm'"
                      :value="item.value"
                    >
                      <span style="float: left; font-weight: 600">{{
                        item.label
                      }} sản phẩm</span>
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
                <a
                  :href="`/product/${item.sn}?name=${item.title}`"
                  class="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                ></a>
                <div class="relative mb-4 rounded-2xl">
                      <el-image
                      fit="cover"
                    :src="`${useAsset(item.imageBg)}`"
                    class="max-h-80 min-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  ></el-image>
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
                <div
                  class="flex justify-between items-left w-full pb-4 mb-auto"
                >
                  <div class="w-full">
                    <p
                      class="text-base text-left w-52 font-semibold line-clamp-1"
                      style="
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                      "
                    >
                      Size: {{ item.description }}
                    </p>
                  </div>
                  <div class="w-full">
                    <div class="text-sm flex items-center text-gray-500 w-20">
                      Chỉ từ {{ formatMoney(item.minPrice) }}
                          <!-- <el-image
                         fit="cover"
                        :src="`@/assets/fish-svgrepo-com.svg`"
                        width="30"
                        alt=""
                      ></el-image> -->
                    </div>
                  </div>
                </div>
                <h3 class="font-medium text-xl leading-8">
                  <a
                   :href="`/product/${item.sn}`" class="block relative group-hover:text-red-700 transition-colors duration-200 line-clamp-1" style="
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
const chooseNumProduct = ref(1)
const listNumbersProduct = reactive([
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' }
])
const dataShopTeddy = reactive([
  {
    sn: 5,
    minPrice: 75000,
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
    ]
  },
  {
    sn: 10,
    minPrice: 85000,
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
    ]
  },
  {
    sn: 11,
    minPrice: 90000,
    title: 'Cá sấu',
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
    ]
  },
  {
    sn: 12,
    minPrice: 130000,
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
    ]
  },
  {
    sn: 13,
    minPrice: 140000,
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
    ]
  },
  {
    sn: 13,
    minPrice: 180000,
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
    ]
  },
  {
    sn: 13,
    minPrice: 95000,
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
    ]
  },
  {
    sn: 14,
    minPrice: 90000,
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
    ]
  },
  {
    sn: 15,
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
    ]
  },
  {
    sn: 16,
    minPrice: 80000,
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
    ]
  },
  {
    sn: 16,
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
    sn: 1,
    minPrice: 140000,
    imageBg: '71.jpg',
    title: 'Gấu trúc ôm dâu',
    description: '2 size 60cm, 70cm',
    listImages: [
      {
        name: '71',
        image: '71.jpg'
      }
    ]
  },
  {
    sn: 2,
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
      }
    ]
  },
  {
    sn: 3,
    minPrice: 95000,
    imageBg: '81.jpg',
    title: 'Búp bê ôm bình',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
      {
        name: '81',
        image: '81.jpg'
      }
    ]
  },
  {
    sn: 4,
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
      }
    ]
  },

  {
    sn: 7,
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
    sn: 8,
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
    sn: 9,
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
  priceShow.value = productById.value.minPrice
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
