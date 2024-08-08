<template>
<div>
  <Header />
  <!-- Main -->
  <main class="pt-24">
    <div class="mx-auto max-w-6xl">
      <div class="">
        <h1 class="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">Gấu bông giá rẻ - Giá tại xưởng</h1>
        <p class="max-w-xl text-center px-2 mx-auto text-base text-gray-600"> Gấu bông giá rẻ, hợp túi tiền, mua gấu tại kho gấu bông của MIA shop bạn yên tâm về giá cả, chất lượng, hậu mãi tốt nhất. Shop có ship toàn quốc. 🐶</p>
      </div>
      <div class="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div v-for="(item,index) in dataShopTeddy" :key="index" class="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" >
          <div class="h-72 border-b-2 border-palette-lighter relative">
            <div style="display:block;overflow:hidden;position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;margin:0">
              <a :href="`/product/${item.sn}`">
                <img  :alt="item.title"
              :src="`${useAsset(item.imageBg)}`"
              class="transform duration-500 ease-in-out hover:scale-110 style-image" />
              </a>
            </div>
          </div>
          <div class="h-48 relative">
            <div class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold" >
              <a :href="`/product/${item.sn}`">
                {{ item.title }}
              </a>
            </div>
            <div class="text-lg text-gray-600 p-4 font-primary font-light">{{ item.description }}</div>
            <div class="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter  rounded-tl-sm triangle flex gap-2"><span class="text-lg">Chỉ từ {{ formatMoney(item.minPrice) }}</span><img src="@/assets/fish-svgrepo-com.svg" width="30" alt=""></div>
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
const route = useRoute()
const router = useRouter()
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
        name: '69',
        image: '69.jpg'
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
    imageBg: '20.jpg',
    title: 'Heo baby ',
    description: '35cm / 50cm / 60cm / 70cm',
    listImages: [
      {
        name: '69',
        image: '69.jpg'
      },
      {
        name: '20',
        image: '20.jpg'
      },
      {
        name: '21',
        image: '21.jpg'
      },
      {
        name: '22',
        image: '22.jpg'
      },
      {
        name: '66',
        image: '66.jpg'
      },
      {
        name: '67',
        image: '67.jpg'
      },
      {
        name: '69',
        image: '69.jpg'
      },
      {
        name: '84',
        image: '84.jpg'
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
    minPrice: 120000,
    title: 'Gấu dâu',
    imageBg: '63.jpg',
    description: '45cm / 60cm / 80cm',
    listImages: [
      {
        name: '63',
        image: '63.jpg'
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
      }
    ]
  }

])
const drawerShare = ref(false)

const onShareSocial = (social: string) => {
  if (!social) {
    return
  }
  const link = document.createElement('a');
  switch (social) {
    case 'facebook':
      link.href = `https://www.facebook.com/sharer/sharer.php?u=https://qrcode-custom.com/`
      break;
    case 'twitter':
      link.href = `https://twitter.com/share?url=https://qrcode-custom.com/&text=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!`
      break;
    case 'pinterest':
      link.href = `https://pinterest.com/pin/create/link/?url=https://qrcode-custom.com/&media=https://qrcode-custom.com/bg.png&description=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!`
      break;
    case 'linkedin':
      link.href = `http://www.linkedin.com/shareArticle?mini=true&url=https://qrcode-custom.com/`
      break;
    case 'bufferapp':
      link.href = `https://bufferapp.com/add?url=https://qrcode-custom.com/&text=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!`
      break;
    case 'diggit':
      link.href = `http://www.digg.com/submit?url=https://qrcode-custom.com/`
      break;
    case 'email':
      link.href = `mailto:?Subject=Free QR Code Generator - Create QR codes custom with logo&Body=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now! https://qrcode-custom.com/`
      break;
    case 'print':
      window.print()
      break;
    case 'reddit':
      link.href = `http://reddit.com/submit?url=https://qrcode-custom.com/&title=Free QR Code Generator - Create QR codes custom with logo`
      break;
    case 'stumbleupon':
      link.href = `http://www.stumbleupon.com/submit?url=https://qrcode-custom.com/&title=Free QR Code Generator - Create QR codes custom with logo`
      break;
    case 'tumblr':
      link.href = `https://www.tumblr.com/share/link?url=https://qrcode-custom.com/&title=Free QR Code Generator - Create QR codes custom with logo`
      break;
    case 'vk':
      link.href = `http://vkontakte.ru/share.php?url=https://qrcode-custom.com/`
      break;
    case 'yummly':
      link.href = `http://www.yummly.com/urb/verify?url=https://qrcode-custom.com/&title=TFree QR Code Generator - Create QR codes custom with logo`
      break;
    default:
      link.href = `https://www.facebook.com/sharer/sharer.php?url=https://qrcode-custom.com/`
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
