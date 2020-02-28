<template>
  <div class="title">
    <span :class="['iconfont', icon]"></span>
    <span class="text">{{title}}</span>
  </div>
</template>

<script>
  export default {
    name: 'DetailTitle',
    props: {
      icon: String,
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';

  .title {
    display: flex;
    height: .44rem;
    padding: 0 .15rem;
    background: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    align-items: center;
    font-size: .16rem;
    color: $defaultGreen;

    .iconfont {
      font-size: .18rem;
      margin-right: .1rem;
      margin-top: -.02rem;
    }
  }
</style>
