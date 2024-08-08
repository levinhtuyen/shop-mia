<template>
  <div>
    <Header />
    <!-- Main -->
    <main class="pt-24" >
      <client-only >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6" >
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div >
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div  class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                    <img  style="height: 100%;" :alt="imageShow.name" :src="imageShow.image"/>
                  </div>

                </div>

                <div class="flex -mx-2 mb-4">
                  <template v-for="(image, index) in productById.listImages" :key="index">
                    <div class="flex-1 px-2">
                      <button  @click="changeImageShow(image)" :class="{ 'ring-2 ring-indigo-300 ring-inset': image.name === imageShow.name }" class="focus:outline-none w-full rounded-lg h-24 md:h-[75px] bg-gray-100 flex items-center justify-center">
                        <img style="height: 75px;" :alt="image.name"
                          :src="image.image"/>
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{{ productById.title }}</h2>
              <p class="text-gray-500 text-sm">{{ productById.description }}</p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span class="text-indigo-400 mr-1 mt-1"><img src="@/assets/fish-svgrepo-com.svg" width="30" alt=""></span>
                    <span class="font-bold text-indigo-600 text-3xl">{{ formatMoney(productById.minPrice) }} đ</span>
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
                  <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                  <el-select
                      v-model="chooseNumProduct"
                      placeholder="Chọn số lượng"
                      size="large"
                      style="width: 240px;height: 56px"
                      @change="changeNumberProduct"
                    >
                      <el-option
                        v-for="item in listNumbersProduct"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      <span style="float: left;font-weight: 600;">{{ item.label }}</span>
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
      </client-only>
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const { formatMoney } = useFormat()

const useAsset = (path: string): string => {
  const assets: Record<string, string> = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  return assets['/assets/shop/' + path]
}
const route = useRoute()
let imageShow = ref<any>({
  name: '',
  image: `${useAsset('')}`
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
  { value: 14, label: '14' },
])
const dataShopTeddy = reactive([
{
    sn:5,
    minPrice: 75000,
    title: 'Teddy mặc áo, ôm tim, thắt nơ, đủ màu',
    imageBg: 'teddy6.jpg',
    description: '45cm/ 60cm / 80cm / 1m / m2 / m4 / m6',
    listImages: [
      {
        name: 'teddy1',
        image: `${useAsset('teddy1.jpg')}`
      },
      {
        name: 'teddy2',
        image: `${useAsset('teddy2.jpg')}`
      },
      {
        name: 'teddy3',
        image: `${useAsset('teddy3.jpg')}`
      },
      {
        name: 'teddy4',
        image: `${useAsset('teddy4.jpg')}`
      },
      {
        name: 'teddy5',
        image: `${useAsset('teddy5.jpg')}`
      },
      {
        name: '10',
        image: `${useAsset('10.jpg')}`
      },
      {
        name: '11',
        image: `${useAsset('11.jpg')}`
      },
      {
        name: '12',
        image: `${useAsset('12.jpg')}`
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
        image: `${useAsset('71.jpg')}`
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
        name: '69',
        image: `${useAsset('69.jpg')}`
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
        image: `${useAsset('81.jpg')}`
      },
    ]
  },
  {
    sn:4,
    minPrice: 95000,
    imageBg: '20.jpg',
    title: 'Heo baby ',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
      {
        name: '69',
        image: `${useAsset('69.jpg')}`
      },
      {
        name: '20',
        image: `${useAsset('20.jpg')}`
      },
      {
        name: '21',
        image: `${useAsset('21.jpg')}`
      },
      {
        name: '22',
        image: `${useAsset('22.jpg')}`
      },
      {
        name: '66',
        image: `${useAsset('66.jpg')}`
      },
      {
        name: '67',
        image: `${useAsset('67.jpg')}`
      },
      {
        name: '69',
        image: `${useAsset('69.jpg')}`
      },
      {
        name: '84',
        image: `${useAsset('84.jpg')}`
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
        image: `${useAsset('99.jpg')}`
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
  //       image: `${useAsset('99.jpg')}`
  //     }
  //   ]
  // },
  {
    sn:8,
    minPrice: 120000,
    title: 'Gấu dâu',
    imageBg: '63.jpg',
    description: '45cm / 60cm / 80cm',
    listImages: [
      {
        name: '63',
        image: `${useAsset('63.jpg')}`
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
        image: `${useAsset('91.jpg')}`
      },
      {
        name: '21',
        image: `${useAsset('21.jpg')}`
      }
    ]
  }

])
let productById = ref<any>({})
const numIdProduct = ref(route.params.id ? Number(route.params.id): 1)

const getProductInStore = () => {
  productById.value = dataShopTeddy.filter((item:any) => {
    if(item.sn === numIdProduct.value) {
      return item
    }
  })[0]
  imageShow.value = productById.value.listImages[0]
}
const changeNumberProduct = () => {
  if(!numIdProduct) {
    return
  }
  productById.value.minPrice = productById.value.minPrice * numIdProduct.value
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
</style>
