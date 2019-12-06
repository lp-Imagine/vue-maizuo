<template>
  <div class="page-home">
    <div class="page-home__view">
      <router-view></router-view>
    </div>

    <mt-tabbar v-model="selected">
      <mt-tab-item
        v-for="tab in tabs"
        :key="tab.id"
        :id="tab.id"
        :href="tab.href"
      >
        <i slot="icon" :class="['iconfont', tab.icon]"></i>
        {{ tab.name }}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  name: 'home',
  components: {
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem
  },

  data () {
    return {
      selected: 1,
      tabs: [
        {
          id: 1,
          name: '电影',
          icon: 'icon-films',
          href: '/#/films'
        },
        {
          id: 2,
          name: '影院',
          icon: 'icon-cinemas',
          href: '/#/cinemas'
        },
        {
          id: 3,
          name: '资讯',
          icon: 'icon-sales',
          href: 'https://m.maizuo.com/mz-act/active/ElzMZU125260'
        },
        {
          id: 4,
          name: '我的',
          icon: 'icon-center',
          href: '/#/center'
        }
      ]
    }
  },

  watch: {
    $route: {
      handler (newVal) {
        this.selected = newVal.meta.tabId
      }
    }
  }
}
</script>

<style lang="scss">
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__view {
    flex: 1;
    overflow-y: auto;
  }

  .mint-tabbar {
    position: static;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .mint-tab-item {
      color: #797d82;
      text-align: center;
      margin-bottom: 5px;
      text-decoration: none;

      .mint-tab-item-icon {
        margin-bottom: 5px;
      }

      &.is-selected {
        background-color: transparent;
        color: #ff5f16;
      }
    }

    .iconfont {
      font-size: 24px;
    }
  }
}
</style>
