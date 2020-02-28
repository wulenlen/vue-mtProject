<template>
  <div class="city-list">
    <current-city />
    <city
      v-for="(item, index) of cityList"
      :cityInfo="item"
      :key="index"
    />
  </div>
</template>

<script>
  import CurrentCity from './CurrentCity'
  import City from './City'
  import cityDatas from '@data/cities'

  export default {
    name: 'CityList',
    components: {
      CurrentCity,
      City
    },
    data() {
      return {
        cityList: cityDatas
      }
    }
  }
</script>

<style>
</style>
