<template>
  <div :class="['tab-item', {current: cityInfo.cityId == cityId}]"
   @click="changeCity(cityInfo)">{{cityInfo.cityName}}</div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'TabItem',
    props: {
      cityInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    methods: {
      ...mapMutations(['selectCity']),
      changeCity(cityInfo) {
        this.selectCity(cityInfo)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';
  @import '~@styles/mixins.scss';

  .tab-item {
    @include vh-center;
    flex: 1;
    height: 100%;
    font-size: .16rem;
    box-sizing: border-box;
    border-bottom: 2px solid transparent;

    &.current {
      color: $defaultGreen;
      border-bottom-color: $defaultGreen;
    }
  }
</style>
