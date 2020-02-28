<template>
  <div class="recom">
    <detail-title icon="icon-recom" title="推荐菜品" />
    <p class="recom-content">{{recom}}</p>
  </div>
</template>

<script>
  import DetailTitle from './Title'

  export default {
    name: 'DetailRecom',
    components: {
      DetailTitle
    },
    props: {
      recom: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .recom {
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .recom-content {
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: 1.5;
      text-indent: 2em;
    }
  }
</style>
