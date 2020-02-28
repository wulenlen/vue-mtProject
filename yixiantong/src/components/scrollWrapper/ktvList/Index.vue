<template>
  <div class="ktv-list">
    <ktv-item
      v-for="(item, index) of ktvDatas"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
  import KtvItem from './Ktv'

  export default {
    name: 'KtvList',
    components: {
      KtvItem
    },
    props: {
      ktvDatas: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
</style>
