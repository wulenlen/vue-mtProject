<template>
  <div class="loading">
    <img src="~@/assets/images/loading.gif" class="loading-img">
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .loading {
    @include vh-center;
    height: 3rem;

    .loading-img {
      width: .8rem;
      height: .8rem;
    }
  }
</style>
