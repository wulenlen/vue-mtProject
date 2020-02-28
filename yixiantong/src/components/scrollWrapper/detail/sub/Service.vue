<template>
  <div class="service">
    <detail-title icon="icon-service" title="商家服务" />
    <p class="text">停车场: {{service.parking ? '有' : '无'}}</p>
    <p class="text">WiFi: {{service.wifi ? '有' : '无'}}</p>
  </div>
</template>

<script>
  import DetailTitle from './Title'

  export default {
    name: 'DetailService',
    components: {
      DetailTitle
    },
    props: {
      service: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .service {
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .text {
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: 1.5;
    }
  }
</style>
