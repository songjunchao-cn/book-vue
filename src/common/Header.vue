<template>
  <div>
    <div class="header-wrapper">
      <div class="logo">
      </div>
      <div class="nav">
        <div class="item-left nav-item active">首页</div>
        <div class="item-left nav-item">下载APP</div>
        <div class="item-right nav-item">Aa</div>
        <div class="item-right nav-item">登录</div>
        <div class="nav-search-wrapper">
          <transition name="fade">
            <input
              type="text"
              placeholder="搜索"
              :class="[focused ? 'focused' : '']"
              @focus="handleFocuse"
              @blur="handleBlur">
          </transition>
          <i class="iconfont search-icon">&#xe617;</i>
        </div>
      </div>
      <div class="addition">
        <button class="reg-btn">注册</button>
        <button class="write-btn">写文章</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      focused: false,
      show: true
    }
  },
  methods: {
    handleFocuse: function () {
      this.focused = true
    },
    handleBlur: function () {
      this.focused = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-wrapper
    height 56px
    border 1px solid #f0f0f0
    position relative
    font-family -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif
    .logo
      position absolute
      left 0
      top 0
      display block
      height 56px
      width 100px
      background url(https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png)
      background-size contain
    .nav
      height 100%
      width 960px
      margin 0 auto
      padding-right 70px
      box-sizing border-size
      .nav-item
        height 56px
        line-height 56px
        cursor pointer
        padding 0 15px
        color #333
      .item-left
        float left
        padding 0 15px
        font-size 17px
      .active
        color:  #ea6f5a
      .item-right
        float right
        padding 0 15px
        color #969696
        font-size 15px
      .nav-search-wrapper
        position relative
        height 100%
        float left
        background green
        .slide-fade-enter-active 
          transition: all .3s ease-out;
        .slide-fade-leave-active 
          transition: all .8s ease-out;
        input
          height 38px
          width 158px
          border 1px solid #eee
          border-radius 45px
          line-height 56px
          box-sizing border-box
          padding 0 22px 0 15px
          margin-top 8px
          margin-left 20px
          background #eee
          outline none
          color #777
        .focused
          width 250px
        .search-icon
          position absolute
          right 3px
          top 18px
          font-size 20px
    .addition
      position absolute
      right 0
      top 0
      height 56px
      .reg-btn
        width 80px
        height 38px
        line-height 24px
        margin 9px 5px 0 15px
        border 1px solid rgba(236,97,73,.7)
        border-radius 20px
        font-size 15px
        color #ea6f5a
        background-color transparent
      .write-btn
        width 100px
        height 40px
        line-height 24px
        margin 8px 15px 0
        border-radius 20px
        border 1px solid #fff
        font-size 15px
        color #fff
        background-color #ea6f5a
        outline none
        cursor pointer
</style>
