<template>
  <div class="comment">
    <detail-title icon="icon-haoping" title="关键评论词" />
    <div class="keyword">
      <span class="word"
        v-for="(item, index) of commentKeyword"
        :key='index'
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
  import DetailTitle from './Title'

  export default {
    name: 'DetailCommentKeyword',
    components: {
      DetailTitle
    },
    props: {
      commentKeyword: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@styles/mixins.scss';
  @import '~@styles/variables.scss';

  .comment {
    @include flex-column;
    margin-top: .1rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .keyword {
      display: flex;
      flex-wrap: wrap;
      padding: .1rem .15rem;
      font-size: .14rem;
      color: $defaultGreen;

      .word {
        @include vh-center;
        height: .25rem;
        padding: 0 .05rem;
        margin: 0 .05rem .05rem 0;
        border: 1px solid $defaultGreen;
        border-radius: .03rem;
      }
    }
  }
</style>
