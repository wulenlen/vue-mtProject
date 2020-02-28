<template>
  <div class="scroll-wrapper" ref="wrapper">
  	<div class="scroll-content">
      <template v-if="!errorShow">
        <detail-swiper :picDatas="detailDatas.pics" />
        <detail-food v-show="field === 'food'" :detailDatas="detailDatas" />
        <detail-view v-show="field === 'view'" :detailDatas="detailDatas" />
        <detail-massage v-show="field === 'massage'" :detailDatas="detailDatas" />
        <detail-ktv v-show="field === 'ktv'" :detailDatas="detailDatas" />
        <detail-hotel v-show="field === 'hotel'" :detailDatas="detailDatas" />
      </template>
      <error v-else />
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  import { DetailModel } from '@/models/detail'
  import tools from '@utils/tools'
  import DetailSwiper from './sub/Swiper'
  import DetailFood from './detail/Food'
  import DetailView from './detail/View'
  import DetailMassage from './detail/Massage'
  import DetailKtv from './detail/Ktv'
  import DetailHotel from './detail/Hotel'
  import Error from './sub/Error'

  export default {
    name: 'DetailScrollWrapper',
    components: {
      DetailSwiper,
      DetailFood,
      DetailView,
      DetailHotel,
      DetailKtv,
      DetailMassage,
      Error
    },
    data() {
      return {
        errorShow: false,
        field: '',
        id: '',
        detailDatas: {}
      }
    },
    mounted() {
      console.log(1)
      let {field, id} = this.$route.query
      this.field = field
      this.id = id

      this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });

      this.getDetail(field, id);
    },
    activated() {
      let {field, id} = this.$route.query

      if(this.field != field || this.id != id) {
        this.getDetail(field, id);
        this.field = field
        this.id = id
      }
    },
    methods: {
      getDetail(field, id) {
        const detailModel = new DetailModel()

        detailModel.getDetail(field, id).then(res => {
          if(res && res.status === 1) {
            const data = res.data
            this.errorShow = false

            data.pics && (data.pics = tools.jsonToArr(data.pics));
            data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword, ','))
            data.recom && (data.recom = tools.replaceToSpace(data.recom))
            data.service && (data.service = tools.jsonToArr(data.service))

            this.detailDatas = data

            console.log(data)
          }else {
            this.errorShow = true
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
