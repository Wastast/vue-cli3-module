<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404" />
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404" />
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404" />
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404" />
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">哎呀!出错了</div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的URL是否正确，或者单击下面的按钮返回主页</div>
        <a href="" class="bullshit__return-home">回到主页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page404',
  computed: {
    message() {
      return `您输入的页面暂不存在...`;
    }
  }
};
</script>

<style lang="scss" scoped>
.wscn-http404-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
}
.wscn-http404 {
  position: relative;
  width: px2rem(1200rem);
  padding: 0 px2rem(50rem);
  overflow: hidden;
  .pic-404 {
    position: relative;
    float: left;
    width: px2rem(600rem);
    overflow: hidden;
    &__parent {
      width: 100%;
    }
    &__child {
      position: absolute;
      &.left {
        width: px2rem(80rem);
        top: px2rem(17rem);
        left: px2rem(220rem);
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      &.mid {
        width: px2rem(46rem);
        top: px2rem(10rem);
        left: px2rem(420rem);
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
      }
      &.right {
        width: px2rem(62rem);
        top: px2rem(100rem);
        left: px2rem(500rem);
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      @keyframes cloudLeft {
        0% {
          top: px2rem(17rem);
          left: px2rem(220rem);
          opacity: 0;
        }
        20% {
          top: px2rem(33rem);
          left: px2rem(188rem);
          opacity: 1;
        }
        80% {
          top: px2rem(81rem);
          left: px2rem(92rem);
          opacity: 1;
        }
        100% {
          top: px2rem(97rem);
          left: px2rem(60rem);
          opacity: 0;
        }
      }
      @keyframes cloudMid {
        0% {
          top: px2rem(10rem);
          left: px2rem(420rem);
          opacity: 0;
        }
        20% {
          top: px2rem(40rem);
          left: px2rem(360rem);
          opacity: 1;
        }
        70% {
          top: px2rem(130rem);
          left: px2rem(180rem);
          opacity: 1;
        }
        100% {
          top: px2rem(160rem);
          left: px2rem(120rem);
          opacity: 0;
        }
      }
      @keyframes cloudRight {
        0% {
          top: px2rem(100rem);
          left: px2rem(500rem);
          opacity: 0;
        }
        20% {
          top: px2rem(120rem);
          left: px2rem(460rem);
          opacity: 1;
        }
        80% {
          top: px2rem(180rem);
          left: px2rem(340rem);
          opacity: 1;
        }
        100% {
          top: px2rem(200rem);
          left: px2rem(300rem);
          opacity: 0;
        }
      }
    }
  }
  .bullshit {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      opacity: 0;
      margin-bottom: 10px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      opacity: 0;
      margin-bottom: 30px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}
</style>
