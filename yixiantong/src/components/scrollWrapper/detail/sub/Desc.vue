<template>
  <div class="desc">
    <detail-title icon="icon-intro" title="详细介绍" />
    <p class="intro">{{intro}}</p>
  </div>
</template>

<script>
  import DetailTitle from './Title'

  export default {
    name: 'DetailDesc',
    components: {
      DetailTitle
    },
    props: {
      intro: {
        type: String,
        default: '加载中...'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .desc {
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .intro {
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: 1.5;
      text-indent: 2em;
    }
  }
</style>
