<template>
  <div class="ArticleInfo_container">
    <van-cell-group>
      <!-- 標題 -->
      <van-cell class="title" :title="title">
        <!-- 一張縮圖 與標題同行 -->
        <div class="singleThumb" v-if="thumb.type === 1"><img :src="thumb.images[0]" alt="" /></div>
      </van-cell>

      <!-- v-if 根據當前循環項目有幾張圖片來顯示dom元素 -->
      <!-- 3張縮圖 -->
      <van-cell class="thumb_box" v-if="thumb.type === 3">
        <div class="thumb" v-for="(item, index) in thumb.images" :key="index"><img :src="item" alt="" /></div>
      </van-cell>

      <!-- label -->
      <van-cell class="label_box">
        <span> 作者：<slot name="author"></slot> </span>
        <span> <slot name="comment"></slot> 評論數 </span>
        <span> 發表日期：<slot name="publishDate"></slot> </span>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    // 標題
    title: {
      type: String,
      default: ''
    },
    // 縮圖
    thumb: {
      type: Object,
      default: () => {
        return { thumb: 0 }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ArticleInfo_container {
  .title {
    padding-bottom: 0;
    .van-cell__title {
      flex: 62%;
    }
    .van-cell__value {
      flex: 30%;
      .singleThumb {
        width: 113px;
        height: 70px;
        img {
          width: 100%;
        }
      }
    }
  }

  .thumb_box {
    padding: 0 16px;
    .van-cell__value--alone {
      display: flex;
      .thumb {
        width: 113px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .label_box {
    padding-top: 0;
    span {
      margin-right: 20px;
      font-size: 12px;
      color: #969799;
    }
  }
}
</style>
