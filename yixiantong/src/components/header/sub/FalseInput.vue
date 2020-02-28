<template>
  <div class="false-input">
    <router-link :to="{name: 'Search'}" tag="div" class="input">
      <span class="iconfont icon-header-search"></span>
      <span class="placeholder">{{placeholder}}</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'FalseInput',
    data() {
      return {
        placeholder: '美食 / 美景 / 酒店 / 按摩 / KTV'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .false-input {
    flex: 1;
    padding: .06rem .1rem .06rem 0;
    box-sizing: border-box;

    .input {
      height: 100%;
      @include vh-center;
      background: #fff;
      border-radius: 5px;

      .iconfont {
        font-size: .18rem;
        vertical-align: -.02rem;
      }

      .placeholder {
        font-size: .14rem;
        color: #999;
        margin-left: .05rem;
      }
    }
  }
</style>
