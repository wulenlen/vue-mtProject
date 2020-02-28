<template>
  <div class="scroll-wrapper" ref="wrapper">
  	<div class="scroll-content">
      <template v-if="!errorShow">
        <template v-if="!loadingShow">
          <view-list v-show="field==='view'" :viewDatas="listDatas[cityId]" />
          <food-list v-show="field==='food'" :foodDatas="listDatas[cityId]" />
          <hotel-list v-show="field==='hotel'" :hotelDatas="listDatas[cityId]" />
          <massage-list v-show="field==='massage'" :massageDatas="listDatas[cityId]" />
          <ktv-list v-show="field==='ktv'" :ktvDatas="listDatas[cityId]" />
        </template>
        <loading v-else />
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
  import { mapState } from 'vuex'
  import BetterScroll from 'better-scroll'
  import { ListModel } from '@/models/list'
  import tools from '@utils/tools'
  import Loading from './sub/Loading'
  import Error from './sub/Error'

  export default {
    name: 'ListScrollWrapper',
    components: {
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Loading,
      Error
    },
    data() {
      return {
        errorShow: false,
        loadingShow: true,
        listDatas: {}
      }
    },
    computed: {
      ...mapState(['field', 'cityId'])
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });

      this.getListDatas(this.cityId, this.field)
    },
    methods: {
      getListDatas(cityId, field) {
        if(this.listDatas[cityId]) {
          return
        }
        const listModel = new ListModel()
        this.loadingShow = true
        listModel.getListDatas(cityId, field).then(res => {
          if(res && res.status === 1) {
            let data = res.data

            this.errorShow = false

            if(this.field === 'food') {
              data = tools.formatJSON(data, 'keyword')
            }
            setTimeout(() => {
              this.listDatas[cityId] = data
              this.loadingShow = false
            }, 500)
          }else {
            this.errorShow = true
          }
        })
      }
    },
    watch: {
      cityId() {
        this.getListDatas(this.cityId, this.field)
      }
    }
  }
</script>

<style>
</style>
