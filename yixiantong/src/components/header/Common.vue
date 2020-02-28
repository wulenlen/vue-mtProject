<template>
  <header class="header">
    <back-ward />
  	<h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
  import BackWard from './sub/BackWard'

  export default {
    name: 'Common',
    components: {
      BackWard
    },
    props: {
      title: {
        type: String,
        default() {
          return '哈哈哈'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';

  .header {
    position: relative;
    height: $headerHeight;
    background: $defaultBgColor;
    text-align: center;
    line-height: $headerHeight;

    .title {
      font-size: .18rem;
    }
  }
</style>
