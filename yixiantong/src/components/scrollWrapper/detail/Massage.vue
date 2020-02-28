<template>
  <div class="detail-wrapper">
    <detail-name :name="detailDatas.name" />
    <detail-stars :score="detailDatas.score" />
    <detail-address :address="detailDatas.address" />
    <detail-price :price="detailDatas.default_price" />
    <detail-open-time :openDateTime="detailDatas.open_datetime" />
    <detail-comment-keyword :commentKeyword="detailDatas.comment_keyword" />
    <detail-service :service="detailDatas.service" />
  </div>
</template>

<script>
  import DetailName from './sub/Name'
  import DetailStars from './sub/Stars'
  import DetailAddress from './sub/Address'
  import DetailPrice from './sub/Price'
  import DetailOpenTime from './sub/OpenTime'
  import DetailService from './sub/Service'
  import DetailCommentKeyword from './sub/CommentKeyword'

  export default {
    name: 'DetailFood',
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenTime,
      DetailService,
      DetailCommentKeyword
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
