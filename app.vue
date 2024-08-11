<template>
  <div style="background-color: #f5f5f5;">
    <DelayHydration>

      <div>
        <nuxt-layout :name="$route.fullPath">
          <nuxt-page />
        </nuxt-layout>

      </div>

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
