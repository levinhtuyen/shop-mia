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
      </client-only>
    </DelayHydration>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

const { mounted } = useMounted()
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap');
* {
  font-family: 'Work Sans', sans-serif;
}

</style>
