<template>
  <div class="container">
    <home-header />
    <home-scroll-wrapper />
  </div>
</template>

<script>
  import HomeHeader from '@components/header/Home'
  import HomeScrollWrapper from '@components/scrollWrapper/Home'

  export default {
    name: 'Index',
    components: {
      HomeHeader,
      HomeScrollWrapper
    }
  }
</script>

<style>
</style>
