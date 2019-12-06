<template>
  <div class="page-banner">
    <lpSwiper :slides="bannerList"></lpSwiper>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import { getBannerList } from '../../api/movies'
export default {
  name: 'films',
  components: {
    lpSwiper: Swiper
  },

  data () {
    return {
      bannerList: []
    }
  },

  created () {
    getBannerList({
      type: 2,
      cityId: 440300,
      k: 9309244
    }).then(response => {
      let res = response.data
      if (res.status === 0) {
        this.bannerList = res.data.map(item => item.imgUrl)
      }
    })
  }
}
</script>

<style></style>
