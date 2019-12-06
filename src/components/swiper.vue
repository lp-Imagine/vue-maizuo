<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in slides" :key="item">
        <img :src="item" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'lpSwiper',
  props: {
    slides: {
      type: Array,
      default () {
        return []
      }
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    slides () {
      this.$nextTick(() => {
        this.mySwiper.update()
      })
    }
  },

  mounted () {
    this.mySwiper = new Swiper(this.$el, {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 210px;

  img {
    width: 100%;
  }
}
</style>
