<template >
  <div>
    <el-drawer class="custom-drawer" :withHeader="false" v-model="drawerShare" direction="btt">
      <template #default>
        <div>
          <p class="is-title-share py-4">Share DowntikApp Now!</p>
          <div class="md:flex md:justify-start grid grid-cols-7 gap-2">
            <img width="40" height="40" @click="onShareSocial('facebook')"  src="@/assets/social/facebook.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('twitter')"  src="@/assets/social/twitter.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('pinterest')"  src="@/assets/social/pinterest.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('linkedin')"  src="@/assets/social/linkedin.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('buffer')"  src="@/assets/social/buffer.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('diggit')"  src="@/assets/social/diggit.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('email')"  src="@/assets/social/email.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('print')"  src="@/assets/social/print.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('reddit')"  src="@/assets/social/reddit.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('stumbleupon')"  src="@/assets/social/stumbleupon.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('tumblr')"  src="@/assets/social/tumblr.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('vk')"  src="@/assets/social/vk.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('yummly')"  src="@/assets/social/yummly.png" alt=""/>
          </div>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import
  {
    ref
  } from 'vue'
const drawerShare = ref(false)
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
</script>
<style lang="scss" scoped>

</style>
