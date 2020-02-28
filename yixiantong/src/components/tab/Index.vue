<template>
  <div class="tab">
    <tab-item
      v-for="(item, index) of cityDatas"
      :key="index"
      :cityInfo="item"
    ></tab-item>
  </div>
</template>

<script>
  import TabItem from './Sub'
  import cityDatas from '@data/cities'

  export default {
    name: 'Tab',
    components: {
      TabItem
    },
    data() {
      return {
        cityDatas: cityDatas
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    flex-wrap: nowrap;
    height: .44rem;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>
