<template>
  <div class="hotel-list">
    <hotel
      v-for="(item, index) in hotelDatas"
      :data="item"
      :key="index"
    />
  </div>
</template>

<script>
  import Hotel from './Hotel'

  export default {
    name: 'HotelList',
    components: {
      Hotel
    },
    props: {
      hotelDatas: {
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
