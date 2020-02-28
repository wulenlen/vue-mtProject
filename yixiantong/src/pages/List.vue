<template>
  <div class="container">
    <common-header :title="title" />
    <tab />
    <list-scroll-wrapper />
  </div>
</template>

<script>
  import CommonHeader from '@components/header/Common'
  import ListScrollWrapper from '@components/scrollWrapper/List'
  import Tab from '@components/tab/Index'
  import { mapState } from 'vuex'
  import fields from '@data/fields'
  import tools from '@utils/tools'

  export default {
    name: 'List',
    components: {
      CommonHeader,
      ListScrollWrapper,
      Tab
    },
    computed: {
      ...mapState(['field']),
      title() {
        return tools.setTitle(fields, this.field) + '列表'
      }
    }
  }
</script>

<style>
</style>
