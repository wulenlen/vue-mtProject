<template>
  <div class="massage-list">
    <massage-item
      v-for="(item, index) of massageDatas"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
  import MassageItem from './Massage'

  export default {
    name: 'MassageList',
    components: {
      MassageItem
    },
    props: {
      massageDatas: {
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
