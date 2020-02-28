<template>
  <div class="city-item" @click="onClick_changeCity(cityInfo)">
    <span class="city">{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'City',
    props: {
      cityInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      ...mapMutations(['selectCity']),
      onClick_changeCity(cityInfo) {
        this.selectCity(cityInfo)
        this.$router.push({name: 'Index'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .city-item {
    display: flex;
    align-items: center;
    height: .5rem;
    padding-left: .15rem;
    background: #fff;
    border-bottom: 1px solid #ddd;
    font-size: .16rem;
  }
</style>
