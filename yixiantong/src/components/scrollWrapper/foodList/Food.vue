<template>
  <router-link :to="{name: 'Detail', query: {field: 'food', id: data.id}}" tag="div" class="food-item">
    <div class="img">
      <img :src="data.img" class="food-img">
    </div>
    <div class="info">
      <h3 class="place">{{data.name}}</h3>
      <p class="stars">
        <stars :star-num="Number(data.star)" />
        <span class="score">￥{{data.default_price}}/人</span>
      </p>
      <p class="tags">
        <span class="tag"
          v-for="(item, index) of data.keyword"
          :key="index"
        >{{item}}</span>
      </p>
      <p class="others">
        <span class="item">{{data.field}}</span>
        <span class="item">{{data.area}}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
  import Stars from '../sub/Stars'

  export default {
    name: 'Food',
    components: {
      Stars
    },
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .food-item {
    display: flex;
    border-bottom: 1px solid #ddd;
    background: #fff;

    .img {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      box-sizing: border-box;

      .food-img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      flex: 1;
      padding: .1rem .1rem 0 0;
      min-width: 0;
      font-size: .14rem;

      .place {
        @include ellipsis;
        font-size: .18rem;
        color: #000;
        line-height: .2rem;
      }

      .stars {
        line-height: .3rem;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        // height: .3rem;
        line-height: .2rem;
        // overflow: hidden;

        .tag {
          color: #be9e4d;
          background: #fbf4e4;
          padding: 0 .05rem;
          margin-left: .05rem;
          margin-bottom: .05rem;

          &:first-child {
            margin-left: 0;
          }
        }
      }

      .others {
        display: flex;
        justify-content: space-between;
        height: .3rem;
        line-height: .3rem;
      }
    }
  }
</style>
