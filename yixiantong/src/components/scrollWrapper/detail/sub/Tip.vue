
<template>
  <div class="tip">
    <span class="iconfont icon-tip"></span>
    <span class="text">{{tip}}</span>
  </div>
</template>

<script>
   export default {
    name: 'DetailTip',
    props: {
      tip: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>

<style lang='scss' scoped>
  .tip {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    align-items: center;
    font-size: .14rem;

    .iconfont {
      font-size: .18rem;
      color: #999;
      margin-right: .1rem;
    }
  }
</style>
