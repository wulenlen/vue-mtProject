<template>
  <router-link :to="{name: 'City'}" tag="div" class="city-selector">
    <span class="city-name">{{cityName}}</span>
    <span class="iconfont icon-header-arrow"></span>
  </router-link>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'CitySelect',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['cityName'])
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';
  @import '~@styles/variables.scss';

  .city-selector {
    @include vh-center;
    width: .6rem;
    height: $headerHeight;

    .city-name {
      font-size: .16rem;
      font-weight: bold;
    }

    .iconfont {
      font-size: .08rem;
      margin-left: .03rem;
    }
  }
</style>
