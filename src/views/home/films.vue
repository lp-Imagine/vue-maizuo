<template>
  <div class="page-banner">
    <!-- 轮播图 -->
    <lpSwiper :slides="bannerList" class="swiper"></lpSwiper>

    <!--table切换-->
    <lp-tabs
    :tabs="['正在热映', '即将上映']"></lp-tabs>

    <!--电影列表-->
    <router-view></router-view>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import TabCheck from '@/components/tabCheck'
import { getBannerList } from '../../api/movies'
export default {
  name: 'films',
  components: {
    lpSwiper: Swiper,
    lpTabs: TabCheck
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

<style lang="scss">
.page-banner {
  .swiper {
    .swiper-pagination-bullets {
      width: 170%;
    }

    .swiper-pagination-bullet-active {
      background: #ffffff;
    }
  }
}
</style>
