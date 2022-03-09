<template>
  <div class="home_container">
    <!-- 頭部區域 -->
    <van-nav-bar title="News" fixed />
    <!-- pull-refresh disable:禁止下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功 ~" :disabled="finished">
      <van-list v-model="loading" :finished="finished" finished-text="睇晒了 ～" @load="onLoad">
        <!-- 導入 註冊 使用ArticleInfo組件 -->
        <ArticleInfo v-for="item in articleList" :key="item.art_id" :title="item.title" :thumb="item.cover">
          <!-- 對應slot name渲染label區域 -->
          <template v-slot:author>{{ item.aut_name }}</template>
          <template v-slot:comment>{{ item.comm_count }}</template>
          <template v-slot:publishDate>{{ item.pubdate.split(' ')[0] }}</template>
        </ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 按需導入API接口
import { getArticlesListAPI } from '@/api/articlesListAPI.js'
import ArticleInfo from '@/components/ArticleInfo/ArticleInfo.vue'
export default {
  name: 'Home',
  components: {
    ArticleInfo
  },
  data() {
    return {
      // 頁碼
      page: 1,
      // 每頁上限
      limit: 10,
      articleList: [],
      // loading： 是否正在加載下一組數據; 用loading屬性來為加載數據引入節流閥
      loading: true,
      // 若數據加載完畢 finished = true
      finished: false,
      // 下拉刷新的狀態 默認值為false
      isLoading: false
    }
  },
  methods: {
    // 獲取文章列表的方法
    async initArticleList() {
      const { data: res } = await getArticlesListAPI(this.page, this.limit)
      // 如果上拉加載更多 舊數據在前 新數據在後
      if (this.loading) {
        this.articleList = [...this.articleList, ...res]
        this.loading = true

        // 如果下拉加載更多 舊數據在後 新數據在前
      } else if (this.isLoading) {
        this.articleList = [...res, ...this.articleList]
        this.isLoading = false
      }

      // 拿到第一組數據後 才能加載下一組數據
      this.loading = false
      // 當上拉數據加載完畢後
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 上拉刷新
    onLoad() {
      // 頁碼 + 1
      this.page++
      // 重新請求接口獲取數據
      this.initArticleList()
    },
    // 下拉刷新
    onRefresh() {
      // 讓頁碼加一
      this.page++
      // 重新請求接口獲取數據
      this.initArticleList()
    }
  },
  created() {
    this.initArticleList()
  }
}
</script>

<style lang="less" scoped>
.home_container {
  padding: 46px 0 50px 0;
}
</style>
