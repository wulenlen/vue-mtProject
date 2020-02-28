<template>
  <header class="header">
    <city-select />
    <false-input />
  </header>
</template>

<script>
  import CitySelect from './sub/CitySelect'
  import FalseInput from './sub/FalseInput'

  export default {
    name: 'HomeHeader',
    components: {
      CitySelect,
      FalseInput
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';

  .header {
    display: flex;
    height: $headerHeight;
    background: $defaultBgColor;
  }
</style>
