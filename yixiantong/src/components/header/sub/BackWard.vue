<template>
  <div class="back-ward" @click="onRouterBack">
    <span class="iconfont icon-header-arrow-left"></span>
  </div>
</template>

<script>
  export default {
    name: 'BackWard',
    methods: {
      onRouterBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';
  @import '~@styles/mixins.scss';

  .back-ward {
    position: absolute;
    top: 0;
    left: 0;
    width: $headerHeight;
    height: 100%;
    @include vh-center;

    .iconfont {
      font-size: .2rem;
    }
  }
</style>
