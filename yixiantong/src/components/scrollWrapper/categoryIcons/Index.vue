<template>
  <div class="icons">
    <category-icon
      v-for="(item, index) of categoryList"
      :bgColor="item.bgColor"
      :icon="item.icon"
      :iconText="item.iconText"
      :field="item.field"
      :key="index"
    />
  </div>
</template>

<script>
  import CategoryIcon from './Sub'
  import fieldDatas from '@data/fields'

  export default {
    name: 'CategoryIcons',
    components: {
      CategoryIcon
    },
    data() {
      return {
        categoryList: fieldDatas
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icons {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    border-bottom: 1px solid #ddd;
  }
</style>
