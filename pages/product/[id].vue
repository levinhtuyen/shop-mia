<template>
  <div>
    <Header />
    <!-- Main -->
    <main class="pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div >
              <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <div v-if="image === 1" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span class="text-5xl">1</span>
                </div>

                <div v-if="image === 2" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span class="text-5xl">2</span>
                </div>

                <div v-if="image === 3" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span class="text-5xl">3</span>
                </div>

                <div v-if="image === 4" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <span class="text-5xl">4</span>
                </div>
              </div>

              <div class="flex -mx-2 mb-4">
                <template v-for="(i, index) in 4" :key="index">
                  <div class="flex-1 px-2">
                    <button   @click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                      <span  class="text-2xl">{{ i }}</span>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">Info product</h2>
            <p class="text-gray-500 text-sm">By <a href="#" class="text-indigo-600 hover:underline">Loai</a></p>

            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-indigo-400 mr-1 mt-1"><img src="@/assets/fish-svgrepo-com.svg" width="30" alt=""></span>
                  <span class="font-bold text-indigo-600 text-3xl">3000.000 đ</span>
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
                    v-model="numProduct"
                    placeholder="Chọn số lượng"
                    size="large"
                    style="width: 240px;height: 56px"
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

              <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const image = ref(1)
const listNumbersProduct =reactive([
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

const numProduct = ref(1)
</script>

<style lang="scss" scoped>
:deep(.el-select__wrapper) {
  height: 56px;
}
</style>
