<template>
  <div class="address">
    <span class="iconfont icon-positioning"></span>
    <span class="addr-txt">{{address}}</span>
  </div>
</template>

<script>
  export default {
    name: 'DetailAddress',
    props: {
      address: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .address {
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

    .addr-txt {
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>
