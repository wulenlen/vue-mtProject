<template>
  <div class="view-list">
    <view-item
      v-for="(item, index) of viewDatas"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
  import ViewItem from './View'

  export default {
    name: 'ViewList',
    components: {
      ViewItem
    },
    props: {
      viewDatas: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .view-list {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }
</style>
