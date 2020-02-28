<template>
  <router-link :to="{name: 'Detail', query: {field: 'ktv', id: data.id}}" tag="div" class="hotel-item">
    <div class="img">
      <img :src="data.img" class="hotel-img">
    </div>
    <div class="info">
      <h3 class="place">{{data.name}}</h3>
      <p class="stars">
        <stars :star-num="Number(data.star)" />
        <span class="score">{{data.score}}分</span>
      </p>

      <p class="others">
        <span class="item">
          ￥<span class="price">{{data.default_price}}</span> 元起
        </span>
        <span class="item">{{data.city_name}}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
  import Stars from '../sub/Stars'

  export default {
    name: 'Ktv',
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
  @import '~@styles/variables.scss';

  .hotel-item {
    display: flex;
    border-bottom: 1px solid #ddd;
    background: #fff;

    .img {
      width: 1.2rem;
      height: 1.2rem;
      padding: .1rem;
      box-sizing: border-box;

      .hotel-img {
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
        line-height: .5rem;
      }

      .others {
        display: flex;
        justify-content: space-between;
        height: .3rem;
        line-height: .3rem;

        .price {
          color: $defaultGreen;
          font-size: .2rem;
          vertical-align: -.01rem;
        }
      }
    }
  }
</style>
