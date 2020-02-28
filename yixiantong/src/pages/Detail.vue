<template>
  <div class="container">
    <common-header :title="title" />
    <detail-scroll-wrapper />
  </div>
</template>

<script>
  import CommonHeader from '@components/header/Common'
  import DetailScrollWrapper from '@components/scrollWrapper/Detail'

  export default {
    name: 'Detail',
    components: {
      CommonHeader,
      DetailScrollWrapper
    },
    data() {
      return {
        title: '详细信息'
      }
    }
  }
</script>

<style>
</style>
