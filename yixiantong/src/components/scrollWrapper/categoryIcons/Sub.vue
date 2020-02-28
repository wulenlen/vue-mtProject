<template>
  <div class="icon-item" @click="onRouteTo(field)">
  	<div class="icon" :style="{backgroundColor: bgColor}">
      <span :class="['iconfont', icon]"></span>
    </div>
    <p class="icon-text">{{iconText}}</p>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'CategoryIcon',
    props: {
      field: {
        type: String,
        default: 'view'
      },
      bgColor: {
        type: String,
        default: '#f5f5f5'
      },
      icon: String,
      iconText: {
        type: String,
        default: '分类'
      }
    },
    methods: {
      ...mapMutations(['selectField']),
      onRouteTo(field) {
        this.selectField(field)

        this.$router.push({name: 'List'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';

  .icon-item {
    @include vh-center;
    flex-direction: column;
    width: 20%;
    padding: .2rem 0;

    .icon {
      @include vh-center;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;

      .iconfont {
        color: #fff;
        font-size: .26rem;
      }
    }

    .icon-text {
      font-size: .14rem;
      margin-top: .1rem;
    }
  }
</style>
