<template>
  <div class="professordetail common-box">
    <div class="w">
      <div class="title">房西苑 教授</div>
      <div class="main clearfix">
        <div class="poster fl">
          <div class="teachers-list">
            <div class="avator">
              <img src="${require(`./static/images/3.png `)}" alt>
            </div>
            <div class="intro">
              <div class="name">房西苑 教授</div>
              <div class="brief">北清智库首席资本导师
                <br>北京大学中国国情研究中心 研究员
                <br>美国项目管理协会会员
              </div>
            </div>
          </div>
        </div>
        <div class="summary">
          <div class="c-summary">
            <div class="summary-title">简介：</div>
            <div class="summary-content">北清智库商学院首席资本导师
              <br>北京大学中国国情研究中心 研究员
              <br>中国科学院研究生院 博士生导师
              <br>美国项目管理协会会员
              <br>曾服务于美国著名的高盛投资银行和第一波士顿投资银行，参与中国最大三家在美上市公司（金山石化，大唐电力，南方航空）上市过程；
              <br>回国后曾任美国CAPITALHOUSE投资集团驻中国首席代表；
              <br>曾任中国轻工投资基金外方驻华代表，主导数十家企业的投资论证和投资项目监管。
            </div>
          </div>
          <div class="e-summary">
            <div class="summary-title">Introduction:</div>
            <div class="summary-content">
              The chief capital mentor of the school of business at north clear think tank
              <br>Researcher of China national conditions research center of Peking University
              <br>Doctoral supervisor of graduate school of Chinese academy of sciences
              <br>American project management association
              <br>U have to serve the famous investment bank, Goldman sachs, an investment bank and the first Boston to participate in China's three largest listed companies in the United States (jinshan petrochemical, datang power, China southern airlines) listed process;
              <br>After returning to China, he was the chief representative of CAPITALHOUSE investment group in China.
              As the foreign representative of China's light industrial investment fund, the company has led the investment demonstration and investment project supervision of dozens of enterprises.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.query.professorId
    }
  },
  created () {
    // console.log('id', this.id)
  }
}
</script>
<style lang="scss" scoped>
.professordetail {
  .title {
    letter-spacing: 3px;
  }
  .main {
    padding: 0 35px;
    .poster {
      margin-right: 20px;
      .teachers-list {
        width: 270px;
        height: 493px;
        background: #ffffff;
        box-shadow: 0 0 8px 0 rgba(30, 76, 53, 0.25);
        border-radius: 10px;
        overflow: hidden;
        .avator {
          width: 100%;
          height: 236px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .intro {
          padding: 30px 20px 0;
          .name {
            color: #133b28;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .brief {
            color: #666666;
            line-height: 40px;
          }
        }
      }
    }
    .summary {
      overflow: hidden;
      .e-summary {
        margin-top: 20px;
      }
      .summary-title {
        font-size: 18px;
        color: #133b28;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .summary-content {
        color: #151515;
        line-height: 24px;
      }
    }
  }
}
</style>
