<template>
  <div>
    <!-- 路由佔位符 -->
    <router-view></router-view>
    <!-- tabbar區域 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">User</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped></style>
