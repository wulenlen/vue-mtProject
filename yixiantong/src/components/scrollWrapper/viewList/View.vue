<template>
  <router-link :to="{name: 'Detail', query: {field: 'view', id: data.id}}" tag="div" class="view-item">
    <div class="img">
      <img :src="data.img" class="view-img">
    </div>
    <div class="info">
      <h3 class="place">{{data.name}}</h3>
      <p class="stars">
        <stars :star-num="Number(data.star)" />
        <span class="score">{{data.score}}分</span>
      </p>
      <p class="others">
        <span class="item">
          <span class="price">￥{{data.default_price}}</span> 起
        </span>
        <span class="item">{{data.city_name}}</span>
      </p>
    </div>
  </router-link>
</template>

<script>
  import Stars from '../sub/Stars'

  export default {
    name: 'ViewItem',
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

  .view-item {
    width: 50%;
    padding: .1rem;
    box-sizing: border-box;

    .img {
      width: 100%;
      height: 1.1rem;
      overflow: hidden;

      .view-img {
        width: 100%;
        min-height: 1.1rem;
      }
    }

    .info {
      color: #000;
      font-size: .16rem;

      .place {
        @include ellipsis;
        height: .3rem;
        line-height: .3rem;
      }

      .stars {
        height: .3rem;
        line-height: .3rem;
        font-size: .14rem;

        .score {
          color: $starColor
        }
      }

       .others {
         display: flex;
         justify-content: space-between;
         height: .3rem;
         line-height: .3rem;
         font-size: .14rem;
         .item {
           .price {
             color: $defaultGreen;
             font-size: .2rem;
             vertical-align: -.01rem;
           }
         }
       }
    }
  }
</style>
