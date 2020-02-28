<template>
  <div class="detail-wrapper">
    <detail-name :name="detailDatas.name" />
    <detail-stars :score="detailDatas.score" />
    <detail-address :address="detailDatas.address" />
    <detail-price :price="detailDatas.default_price" />
    <detail-open-time :openDateTime="detailDatas.open_datetime" />
    <detail-tip :tip="detailDatas.tip" />
    <detail-desc :intro="detailDatas.intro" />
    <detail-ticket-info :ticketInfo="detailDatas.ticket_info" />
  </div>
</template>

<script>
  import DetailName from './sub/Name'
  import DetailStars from './sub/Stars'
  import DetailAddress from './sub/Address'
  import DetailPrice from './sub/Price'
  import DetailOpenTime from './sub/OpenTime'
  import DetailTip from './sub/Tip'
  import DetailDesc from './sub/Desc'
  import DetailTicketInfo from './sub/TicketInfo'

  export default {
    name: 'DetailView',
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenTime,
      DetailTip,
      DetailDesc,
      DetailTicketInfo
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
