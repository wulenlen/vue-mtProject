<template>
  <div class="scroll-wrapper" ref="wrapper">
  	<div class="scroll-content">
      <no-data-tip v-show="
        (!listDatas.viewDatas || listDatas.viewDatas.length <= 0) &&
        (!listDatas.foodDatas || listDatas.foodDatas.length <= 0) &&
        (!listDatas.hotelDatas || listDatas.hotelDatas.length <= 0) &&
        (!listDatas.massageDatas || listDatas.massageDatas.length <= 0) &&
        (!listDatas.ktvDatas || listDatas.ktvDatas.length <= 0)
      "/>
      <template v-if="!errorShow">
        <template v-if="listDatas.viewDatas && listDatas.viewDatas.length > 0">
          <home-title :title="homeTitle.viewTit" />
          <view-list :viewDatas="listDatas.viewDatas" />
        </template>
        <template v-if="listDatas.foodDatas && listDatas.foodDatas.length > 0">
          <home-title :title="homeTitle.foodTit" />
          <food-list :foodDatas="listDatas.foodDatas" />
        </template>
        <template v-if="listDatas.hotelDatas && listDatas.hotelDatas.length > 0">
          <home-title :title="homeTitle.hotelTit" />
          <hotel-list :hotelDatas="listDatas.hotelDatas" />
        </template>
        <template v-if="listDatas.massageDatas && listDatas.massageDatas.length > 0">
          <home-title :title="homeTitle.massageTit" />
          <massage-list :massageDatas="listDatas.massageDatas" />
        </template>
        <template v-if="listDatas.ktvDatas && listDatas.ktvDatas.length > 0">
          <home-title :title="homeTitle.ktvTit" />
          <ktv-list :ktvDatas="listDatas.ktvDatas" />
        </template>
      </template>
      <error v-else />
    </div>
  </div>
</template>

<script>
  import ViewList from './viewList'
  import FoodList from './foodList'
  import HotelList from './hotelList'
  import MassageList from './massageList'
  import KtvList from './ktvList'
  import BetterScroll from 'better-scroll'
  import Error from './sub/Error'
  import HomeTitle from './sub/HomeTitle'
  import NoDataTip from './sub/NoDataTip'

  export default {
    name: 'List',
    components: {
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      HomeTitle,
      NoDataTip
    },
    props: {
      listDatas: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        errorShow: false,
        homeTitle: {
          foodTit: '美食结果',
          hotelTit: '酒店结果',
          viewTit: '景点结果',
          ktvTit: 'KTV结果',
          massageTit: '按摩结果'
        },
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
    }
}
</script>

<style>
</style>
