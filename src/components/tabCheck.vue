//table选项切换组件
<template>
  <ul class="lp-tabs">
    <li
      class="lp-tabs__item"
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ 'active': isValue === index }"
      @click="isValue = index"
    >
      {{ tab }}
    </li>

    <div class="lp-tabs__boredr" :style="borderStyle">
      <span style="width: 56px;"></span>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'lp-tabs',

  props: {
    tabs: {
      type: Array,
      default () {
        return ['film', 'cinema']
      }
    },

    value: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      isValue: this.value
    }
  },

  computed: {
    borderStyle () {
      return {
        transform: `translateX(${this.isValue * 100}%)`
      }
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/mixins.scss';

.lp-tabs {
  @include border-bottom;
  height: 50px;
  display: flex;
  transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  position: sticky;
  top: 0;
  z-index: 3;
  background: #fff;

  &__item {
    flex: 1;
    line-height: 50px;
    text-align: center;

    &.active {
      color: #ff5f16;
    }
  }

  .lp-tabs__boredr {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 2px;
    transition: transform 0.2s ease-in;

    span {
      background: #ff5f16;
    }
  }
}
</style>
