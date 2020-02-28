<template>
  <div class="scroll-wrapper" ref="wrapper">
  	<div class="scroll-content">
      <city-list />
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'
  import CityList from './cityList'

  export default {
    name: 'CityScrollWrapper',
    components: {
      CityList
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
    }
  }
</script>

<style>
</style>
