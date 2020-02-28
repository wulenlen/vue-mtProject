<template>
  <div class="price-detail">
    <span class="iconfont icon-price"></span>
    <span class="price">￥{{price}} 元起</span>
  </div>
</template>

<script>
  export default {
    name: 'DetailPrice',
    props: {
      price: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';

  .price-detail {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    align-items: center;

    .iconfont {
      font-size: .18rem;
      color: #999;
      margin-right: .1rem;
    }

    .price {
      font-size: .14rem;
      color: $defaultOrange;
    }
  }
</style>
