<template>
  <div style="background-color: #f5f5f5;">
    <DelayHydration>

      <div>
        <nuxt-layout :name="$route.fullPath">
          <nuxt-page />
        </nuxt-layout>

      </div>
      <client-only>
        <div id="fb-root"></div> <div id="fb-customer-chat" class="fb-customerchat"></div>
        <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1578128459777697&ev=PageView&noscript=1"
    />
      </client-only>
    </DelayHydration>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap');
* {
  font-family: 'Work Sans', sans-serif;
}

</style>
