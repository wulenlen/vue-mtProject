<template>
  <div class="search">
    <div class="input-wrap">
      <span class="iconfont icon-header-search"></span>
      <input type="text" class="input"
        :placeholder="placeholder"
        v-model="keyword"
        @input="onSearch" />
    </div>
  </div>
</template>

<script>
  import tools from '@utils/tools'
  import { SearchModel } from '@/models/search'
  import {mapState} from 'vuex'

  export default {
    name: 'SearchInput',
    data() {
      return {
        keyword: '',
        placeholder: '美食 / 景点 / 酒店 / 按摩 / KTV'
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    methods: {
      onSearch: tools.throttle(function() {
        let keyword = tools.trimSpace(this.keyword)

        if(keyword.length <= 0) {
          return
        }

        const searchModel = new SearchModel()

        searchModel.searchAction(keyword, this.cityId).then(res => {
          this.$emit('onSearch', res)
        })
      }, 800)
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    height: .44rem;
    padding: .06rem .15rem;
    background: #fff;
    box-sizing: border-box;

    .input-wrap {
      position: relative;
      width: 100%;
      height: 100%;

      .iconfont {
        position: absolute;
        top: .1rem;
        left: .08rem;
        font-size: .16rem;
      }

      .input {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        font-size: .14rem;
        border-radius: .03rem;
        text-indent: .32rem;
        box-sizing: border-box;
        background: transparent;
      }
    }
  }
</style>
