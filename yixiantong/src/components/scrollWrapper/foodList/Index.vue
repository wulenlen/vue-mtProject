<template>
  <div class="food-list">
    <food-item
      v-for="(item, index) of foodDatas"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
  import FoodItem from './Food'

  export default {
    name: 'FoodList',
    components: {
      FoodItem
    },
    props: {
      foodDatas: {
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
