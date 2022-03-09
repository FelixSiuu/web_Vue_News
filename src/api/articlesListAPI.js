// 與獲取文章列表相關的API接口 都封裝到這個模塊中
import request from '@/utils/articleRequest.js'

export const getArticlesListAPI = function(_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
