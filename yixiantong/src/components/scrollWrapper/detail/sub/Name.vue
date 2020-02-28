<template>
  <div class="name">
    <span class="iconfont icon-name"></span>
    <span class="name-txt">{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: 'DetailName',
    props: {
      name: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .name {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    line-height: .39rem;

    .icon-name {
      font-size: .18rem;
      color: #000;
    }

    .name-txt {
      font-size: .14rem;
      margin-left: .1rem;
    }
  }
</style>
