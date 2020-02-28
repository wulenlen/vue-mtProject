<template>
  <div class="desc">
    <detail-title icon="icon-intro" title="购票信息" />
    <p class="tip">{{ticketInfo}}</p>
  </div>
</template>

<script>
  import DetailTitle from './Title'

  export default {
    name: 'DetailTicketInfo',
    components: {
      DetailTitle
    },
    props: {
      ticketInfo: {
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

    .tip {
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: 1.5;
      text-indent: 2em;
    }
  }
</style>
