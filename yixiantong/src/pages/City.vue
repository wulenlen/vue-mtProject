<template>
  <div class="container">
    <common-header :title="title" />
    <city-scroll-wrapper />
  </div>
</template>

<script>
  import CommonHeader from '@components/header/Common'
  import CityScrollWrapper from '@components/scrollWrapper/City'

  export default {
    name: 'City',
    components: {
      CommonHeader,
      CityScrollWrapper
    },
    data() {
      return {
        title: '城市选择'
      }
    }
  }
</script>

<style>
</style>
