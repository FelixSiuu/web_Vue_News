<template>
  <div class="user_container">
    <!-- user header -->
    <div class="user_header">
      <div class="picture">
        <img src="@/assets/picture/picture.jpeg" alt="" />
      </div>
      <div class="username">
        {{ username }}
        <van-icon name="edit" @click="showInput = !showInput" class="changename" />
        <input type="text" v-if="showInput" @keyup.enter="showInput = false" @blur="showInput = false" v-model="username" id="username" />
      </div>
      <div class="userInfo">
        <span>0 貼文</span>
        <span>0 追蹤中</span>
        <span>0 粉絲</span>
      </div>
    </div>
    <!-- user body -->
    <div class="user_body">
      <div class="edit_profile" @click="showMessage">
        編輯個人檔案
        <div class="rightButton">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="logOut" @click="showMessage">
        退出登錄
        <div class="rightButton">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  name: 'User',
  data() {
    return {
      username: 'Felix Siu',
      showInput: false
    }
  },
  methods: {
    showMessage() {
      Notify({ type: 'primary', message: '此功能尚未開發' })
    }
  }
}
</script>

<style lang="less" scoped>
.user_header {
  position: relative;
  overflow: hidden;
  height: 200px;
  padding: 60px 40px 20px 40px;
  background-color: teal;
  .picture {
    float: left;
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .username {
    float: left;
    width: 190px;
    height: 80px;
    font-size: 18px;
    overflow: hidden;
    color: #fff;
    #username {
      width: 180px;
      color: #000;
    }
  }
  .userInfo {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span {
      flex: 1;
      margin: 0 15px;
      float: left;
      text-align: center;
      color: #fff;
    }
  }
}
.user_body {
  .edit_profile,
  .logOut {
    position: relative;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    .rightButton {
      position: absolute;
      right: 15px;
      top: 22px;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
