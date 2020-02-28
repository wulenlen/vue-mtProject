<template>
  <div class="container">
    <common-header :title="title" />
    <search-input @onSearch="onSearch" />
    <search-scroll-wrapper :listDatas="searchRes" />
  </div>
</template>

<script>
  import CommonHeader from '@components/header/Common'
  import SearchInput from '@components/searchInput'
  import SearchScrollWrapper from '@components/scrollWrapper/Search'
  import tools from '@utils/tools'

  export default {
    name: 'Search',
    components: {
      CommonHeader,
      SearchInput,
      SearchScrollWrapper
    },
    data() {
      return {
        searchRes: {},
        title: '商家搜索'
      }
    },
    methods: {
      onSearch(res) {
        if(res && res.status === 1) {
          const data = res.data

          data.foodDatas = tools.formatJSON(data.foodDatas, 'keyword')

          this.searchRes = data
        }else {
          this.searchRes = res
        }
      }
    }
  }
</script>

<style>
</style>
