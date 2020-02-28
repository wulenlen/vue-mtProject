<template>
  <div class="scroll-wrapper" ref="wrapper">
  	<div class="scroll-content">
      <category-icons />
      <template v-if="!errorShow">
        <home-title :title="homeTitle.viewTit" />
        <view-list :viewDatas="viewDatas" />
        <home-title :title="homeTitle.foodTit" />
        <food-list :foodDatas="foodDatas" />
        <home-title :title="homeTitle.hotelTit" />
        <hotel-list :hotelDatas="hotelDatas" />
        <home-title :title="homeTitle.massageTit" />
        <massage-list :massageDatas="massageDatas" />
        <home-title :title="homeTitle.ktvTit" />
        <ktv-list :ktvDatas="ktvDatas" />
      </template>
      <error v-else />
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  import CategoryIcons from '@components/scrollWrapper/categoryIcons'
  import { IndexModel } from '@/models/index'
  import { mapState } from 'vuex'
  import tools from '@utils/tools'
  import HomeTitle from './sub/HomeTitle'
  import ViewList from './viewList'
  import FoodList from './foodList'
  import HotelList from './hotelList'
  import MassageList from './massageList'
  import KtvList from './ktvList'
  import Error from './sub/Error'

  export default {
    name: 'HomeScrollWrapper',
    components: {
      CategoryIcons,
      HomeTitle,
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Error
    },
    data() {
      return {
        errorShow: false,
        homeTitle: {
          foodTit: '推荐美食',
          hotelTit: '推荐酒店',
          viewTit: '推荐景点',
          ktvTit: '推荐KTV',
          massageTit: '推荐按摩'
        },
        foodDatas: [],
        hotelDatas: [],
        massageDatas: [],
        viewDatas: [],
        ktvDatas: []
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
      this.currentCityId = this.cityId
      this.getHomeDatas(this.cityId)
    },
    activated() {
      if(this.currentCityId !== this.cityId) {
        this.currentCityId = this.cityId
        this.getHomeDatas(this.cityId)
      }
    },
    methods: {
      getHomeDatas(cityId) {
        const indexModel = new IndexModel();

        indexModel.getHomeDatas(cityId).then(res => {
          if(res && res.status === 1) {
            let { foodDatas, hotelDatas, massageDatas, viewDatas, ktvDatas} = res.data

            this.errorShow = false

            this.foodDatas = tools.formatJSON(foodDatas, 'keyword')
            this.hotelDatas = hotelDatas
            this.massageDatas = massageDatas
            this.viewDatas = viewDatas
            this.ktvDatas = ktvDatas
          }else {
            this.errorShow = true
          }
        })
      }
    }
  }
</script>

<style>
</style>
