<template>
  <div class="stars-detail">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum" />
    <span class="score">{{score}}分</span>
  </div>
</template>

<script>
  import Stars from '../../sub/Stars'

  export default {
    name: 'DetailStars',
    components: {
      Stars
    },
    props: {
      starNum: {
        type: Number,
        default: 5
      },
      score: {
        type: String,
        default: '5.0'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/variables.scss';

  .stars-detail {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    align-items: center;

    .stars {
      height: .44rem;
      line-height: .35rem;
    }

    .icon-smile {
      font-size: .18rem;
      margin-top: -.04rem;
      margin-right: .1rem;
      color: #999;
    }

    .score {
      font-size: .16rem;
      margin: 0 .1rem  0 .15rem;
      color: $defaultOrange;
    }
  }
</style>
