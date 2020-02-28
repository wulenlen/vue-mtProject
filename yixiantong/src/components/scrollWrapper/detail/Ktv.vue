<template>
  <div class="detail-wrapper">
    <detail-name :name="detailDatas.name" />
    <detail-stars :score="detailDatas.score" />
    <detail-address :address="detailDatas.address" />
    <detail-price :price="detailDatas.default_price" />
    <detail-service :service="detailDatas.service" />
  </div>
</template>

<script>
  import DetailName from './sub/Name'
  import DetailStars from './sub/Stars'
  import DetailAddress from './sub/Address'
  import DetailPrice from './sub/Price'
  import DetailService from './sub/Service'

  export default {
    name: 'DetailFood',
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailService
    },
    props: {
      detailDatas: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>
</style>
