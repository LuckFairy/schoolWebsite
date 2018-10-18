<template>
  <div class="contact common-box">
    <div class="w">
      <div class="title">联系我们</div>
      <div class="map">
        <img src="" alt="">
      </div>
      <div class="detail">
        <span><i>办公地址：</i>苏州市虎丘区兴贤路西100米</span>
        <span class="active"><i>咨询电话：</i>400-888-8888</span>
        <span><i>邮箱地址：</i>murongqiaochu@live.com</span>
      </div>
      <div class="codes clearfix">
        <div class="code fr">
          <img src="@/assets/code.png" alt="">
          <div class="code-title">客服微信</div>
        </div>
        <div class="code fr active">
          <img src="@/assets/code.png" alt="">
          <div class="code-title">微信公众平台</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  .map {
    width: 900px;
    height: 300px;
    border-radius: 10px;
    margin: 0 auto;
    overflow: hidden;
    background-color: skyblue;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    width: 900px;
    margin: 45px auto 50px;
    span {
      color: #151515;
      &.active {
        margin: 0 90px;
      }
      i {
        font-size: 18px;
        color: #133B28;
      }
    }
  }
  .codes {
    width: 900px;
    margin: 0 auto;
    .code {
      text-align: center;
      &.active {
        margin-right: 50px;
      }
      img {
        width: 100px;
        height: 100px;
      }
      .code-title {
        margin-top: 10px;
        color: #133B28;
      }
    }
  }
}
</style>
