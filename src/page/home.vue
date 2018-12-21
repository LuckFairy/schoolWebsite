<template>
  <div class="home">
    <div class="reason">
      <div class="top">
        <div class="line line-l"></div>选择阳山智谷商学院的理由
        <div class="line line-r"></div>
      </div>
      <div class="intro">在阳山智谷商学院，从一个全新的学术视角来重新审视一切。在这，学习不是始于灌输知识，而是提出一个问题，
        <br>一个你自己所关心的问题，一个你的企业面临需要解决的问题。你的学习将围绕着这一问题，为了解决它，
        <br>你需要去钻研相关管理知识，衡量各种可选方法，然后提出最佳的解决方案
      </div>
      <div class="icons clearfix">
        <div class="part fl">
          <div class="part-top">
            <img src="@/assets/icon1.png" alt="互联网研究中心">
          </div>
          <div class="part-title">互联网研究中心</div>
        </div>
        <div class="part fl">
          <div class="part-top second">
            <img src="@/assets/icon2.png" alt="金融研究中心">
          </div>
          <div class="part-title">金融研究中心</div>
        </div>
        <div class="part fl">
          <div class="part-top third">
            <img src="@/assets/icon3.png" alt="管理研究中心">
          </div>
          <div class="part-title">管理研究中心</div>
        </div>
      </div>
    </div>
    <div class="review">
      <div class="w">
        <div class="header">
          <span class="fl">课程回顾</span>
          <router-link to="teaching" class="fr">more ></router-link>
        </div>
        <div class="lists clearfix">
          <div class="list fl" v-for="(item, index) in reviewArr" :key="index">
            <div class="list-poster">
              <a href="#">
                <img :src="item.poster" alt>
                <div class="list-brief">{{ item.brief }}</div>
              </a>
            </div>
            <div class="list-msg">
              <div class="list-title ellipsis">{{ item.title }}</div>
              <div class="list-info clearfix">
                <span class="fl">{{ item.time }}</span>
                <a class="fr" href="#">查看详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="teachers">
      <div class="w">
        <div class="header">
          <span class="fl">阳山师资</span>
          <router-link to="professors" class="fr">more ></router-link>
        </div>
      </div>
      <div class="teachers-lists">
        <el-carousel indicator-position="outside" height="510px" :interval="5000" trigger="click">
          <el-carousel-item v-for="(item, index) in teachersLists" :key="index">
            <div class="teachers-list clearfix">
              <a
                class="item fl"
                v-for="(c_item, c_index) in item"
                :key="c_index"
                href="javascript:;"
                @click="toProfessorsDetail(index)"
              >
                <div class="avator">
                  <img :src="c_item.avator" alt>
                </div>
                <div class="intro">
                  <div class="name">{{ c_item.name }}</div>
                  <div class="brief" v-html="c_item.brief"></div>
                </div>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="news">
      <div class="w">
        <div class="header">
          <span class="fl">阳山智谷新闻</span>
          <router-link to="news" class="fr">more ></router-link>
        </div>
        <div class="lists clearfix">
          <div class="list fl" v-for="(item, index) in listsArr" :key="index">
            <div class="list-poster">
              <a href="javascript:;" @click="toNewsDetail(item.id)">
                <img :src="item.poster" alt>
                <div class="list-brief">{{ item.brief }}</div>
              </a>
            </div>
            <div class="list-msg">
              <div class="list-title ellipsis">{{ item.title }}</div>
              <div class="list-info clearfix">
                <span class="fl">{{ item.time }}</span>
                <a class="fr" href="javascript:;" @click="toNewsDetail(item.id)">查看详情</a>
              </div>
            </div>
          </div>
        </div>
        <div class="loadmore" @click="loadmore">
          <span v-if="getNewsStatus">加载更多</span>
          <span v-else>
            <i class="el-icon-loading"></i> 加载中...
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'
export default {
  data () {
    return {
      listsArr: [],
      reviewArr: [
        {
          poster: './static/images/1.png',
          title: '4月14-15日互联网EMBA总裁研修班课程课程',
          brief: '北清智库商学院互联网导师喻旭老师为同学们带来了«新零售创新战略与路径设计»，从产业的高度，用户的角…',
          time: '2018-04-04'
        },
        {
          poster: './static/images/2.png',
          title: '阳山智谷EMBA总裁高级研修班 M38班课课程',
          brief: '北清智库商学院互联网导师喻旭老师为同学们带来了',
          time: '2018-04-04'
        },
        {
          poster: './static/images/1.png',
          title: '阳山智谷【金融EMBA】三月课程纪实',
          brief: '北清智库商学院互联网导师喻旭老师为同学们带来了«新零售创新战略与路径设计»，从产业的高度，用户的角…',
          time: '2018-04-04'
        },
        {
          poster: './static/images/2.png',
          title: '阳山智谷EMBA总裁高级研修班 M38班课课程',
          brief: '北清智库商学院互联网导师喻旭老师为同学们带来了«新零售创新战略与路径设计»，从产业的高度，用户的角…',
          time: '2018-04-04'
        },
        {
          poster: './static/images/1.png',
          title: '阳山智谷【金融EMBA】三月课程纪实',
          brief: '北清智库商学院互联网导师喻旭老师为同学们带来了«新零售创新战略与路径设计»，从产业的高度，用户的角…',
          time: '2018-04-04'
        },
        {
          poster: './static/images/2.png',
          title: '阳山智谷EMBA总裁高级研修班 M38班课课程',
          brief: '北清智库商学院互联网导师喻旭老师为同学们带来了«新零售创新战略与路径设计»，从产业的高度，用户的角…',
          time: '2018-04-04'
        }
      ],
      teachersArr: [
        {
          avator: './static/images/3.png',
          name: '1房西苑 教授',
          brief: '北清智库首席资本导师<br>北京大学中国国情研究中心  研究员<br>美国项目管理协会会员'
        },
        {
          avator: './static/images/4.png',
          name: '1张伟 教授',
          brief: '北清智库研究院首席金融学家<br>金融EMBA项目首席责任导师<br>北京大学金融与产业发展研究中心研究员'
        },
        {
          avator: './static/images/5.png',
          name: '1金占明 教授',
          brief: '北清智库战略课程导师<br>清华大学经济管理学院教授'
        },
        {
          avator: './static/images/6.png',
          name: '1欧阳良宜 博士',
          brief: '北清智库商学院金融主讲教授<br>北京大学汇丰商学院助理院长<br>EMBA项目主任'
        },
        {
          avator: './static/images/3.png',
          name: '2房西苑 教授',
          brief: '北清智库首席资本导师<br>北京大学中国国情研究中心  研究员<br>美国项目管理协会会员'
        },
        {
          avator: './static/images/4.png',
          name: '2张伟 教授',
          brief: '北清智库研究院首席金融学家<br>金融EMBA项目首席责任导师<br>北京大学金融与产业发展研究中心研究员'
        },
        {
          avator: './static/images/5.png',
          name: '2金占明 教授',
          brief: '北清智库战略课程导师<br>清华大学经济管理学院教授'
        },
        {
          avator: './static/images/6.png',
          name: '2欧阳良宜 博士',
          brief: '北清智库商学院金融主讲教授<br>北京大学汇丰商学院助理院长<br>EMBA项目主任'
        },
        {
          avator: './static/images/3.png',
          name: '3房西苑 教授',
          brief: '北清智库首席资本导师<br>北京大学中国国情研究中心  研究员<br>美国项目管理协会会员'
        },
        {
          avator: './static/images/4.png',
          name: '3张伟 教授',
          brief: '北清智库研究院首席金融学家<br>金融EMBA项目首席责任导师<br>北京大学金融与产业发展研究中心研究员'
        },
        {
          avator: './static/images/5.png',
          name: '3金占明 教授',
          brief: '北清智库战略课程导师<br>清华大学经济管理学院教授'
        },
        {
          avator: './static/images/6.png',
          name: '3欧阳良宜 博士',
          brief: '北清智库商学院金融主讲教授<br>北京大学汇丰商学院助理院长<br>EMBA项目主任'
        },
        {
          avator: './static/images/3.png',
          name: '4房西苑 教授',
          brief: '北清智库首席资本导师<br>北京大学中国国情研究中心  研究员<br>美国项目管理协会会员'
        },
        {
          avator: './static/images/4.png',
          name: '4张伟 教授',
          brief: '北清智库研究院首席金融学家<br>金融EMBA项目首席责任导师<br>北京大学金融与产业发展研究中心研究员'
        },
        {
          avator: './static/images/5.png',
          name: '4金占明 教授',
          brief: '北清智库战略课程导师<br>清华大学经济管理学院教授'
        },
        {
          avator: './static/images/6.png',
          name: '4欧阳良宜 博士',
          brief: '北清智库商学院金融主讲教授<br>北京大学汇丰商学院助理院长<br>EMBA项目主任'
        }
      ],
      teachersLists: [],
      getNewsStatus: true
    }
  },
  created () {
    this.computedTeacher()
    this.getNewsLists()
  },
  mounted () {

  },
  methods: {
    computedTeacher () {
      this.teachersLists = this.common.getNumArr(this.teachersArr, 4)
    },
    loadmore () {
      console.log('加载更多')
      this.getNewsStatus = false
      setTimeout(() => {
        this.getNewsStatus = true
      }, 2000)
    },
    toProfessorsDetail (index) {
      this.$router.push({
        path: 'professorsdetail',
        query: { professorId: index }
      })
    },
    toNewsDetail (index) {
      this.$router.push({
        path: 'newsdetail',
        query: { newsId: index }
      })
    },
    getNewsLists () {
      api.getNewsLists('/getNews')
        .then(res => {
          console.log(res)
          this.listsArr = res.newsList
        })
    }
  }
}
</script>
<style>
.home .el-carousel__button {
  opacity: 1;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #afafaf;
}
.home .el-carousel__indicator.is-active button {
  background-image: linear-gradient(-180deg, #2b6d51 0%, #133b28 100%);
}
.home .el-carousel__arrow {
  font-size: 44px;
  width: 70px;
  height: 70px;
  color: #133b28;
  background: #ffffff;
  box-shadow: 0 0 8px 0 rgba(255, 127, 72, 0.25);
}
</style>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  padding-bottom: 50px;
  .reason {
    padding-top: 70px;
    padding-bottom: 80px;
    text-align: center;
    .top {
      position: relative;
      display: inline-block;
      font-size: 36px;
      color: #133b28;
      font-weight: bold;
      .line {
        position: absolute;
        opacity: 0.2;
        background: #1e4c35;
        width: 582px;
        height: 1px;
        top: 26px;
        &.line-l {
          right: 460px;
        }
        &.line-r {
          left: 460px;
        }
      }
    }
    .intro {
      font-size: 24px;
      color: #252525;
      line-height: 38px;
      padding-top: 36px;
    }
    .icons {
      width: 1200px;
      margin: 0 auto;
      padding: 90px 60px 0;
      .part {
        width: 160px;
        margin: 0 100px;
        .part-top {
          width: 100%;
          height: 160px;
          line-height: 160px;
          opacity: 0.3;
          background: #133b28;
          box-shadow: 0 0 8px 0 #133b28;
          border-radius: 100%;
          text-align: center;
          margin-bottom: 16px;
          &.second {
            opacity: 1;
          }
          &.third {
            opacity: 0.5;
          }
        }
        .part-title {
          font-size: 18px;
          color: #133b28;
        }
      }
    }
  }
  .header {
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #133b28;
    padding: 0 20px;
    font-weight: bold;
    margin-bottom: 40px;
    .fl {
      font-size: 36px;
      color: #555555;
    }
    .fr {
      font-size: 24px;
      color: #133b28;
    }
  }
  .review,
  .news {
    background: #ffffff;
    box-shadow: 0 0 8px 0 rgba(19, 59, 40, 0.25);
    padding-top: 20px;
    .lists {
      padding: 0 15px;
      .list {
        width: 370px;
        margin: 0 10px 40px;
        .list-poster {
          width: 100%;
          height: 200px;
          border-radius: 10px;
          overflow: hidden;
          a {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .list-brief {
              width: 100%;
              position: absolute;
              bottom: -100px;
              left: 0;
              padding: 10px;
              background-image: linear-gradient(
                -180deg,
                rgba(19, 59, 40, 0.5) 0%,
                #133b28 100%
              );
              color: #ffffff;
              line-height: 18px;
              transition: all 0.3s;
            }
            &:hover {
              .list-brief {
                bottom: 0;
              }
            }
          }
        }
        .list-msg {
          padding: 10px 10px 0;
          .list-title {
            font-size: 18px;
            color: #133b28;
            font-weight: bold;
          }
          .list-info {
            margin-top: 6px;
            .fl {
              opacity: 0.3;
            }
            .fr {
              width: 58px;
              height: 18px;
              line-height: 18px;
              text-align: center;
              border: 1px solid #133b28;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .teachers {
    padding-top: 20px;
    padding-bottom: 40px;
    .teachers-lists {
      width: 1348px;
      margin: 0 auto;
      .teachers-list {
        padding: 0 90px;
        .item {
          display: block;
          width: 270px;
          height: 493px;
          margin: 0 11px;
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
    }
  }
  .news {
    padding-bottom: 30px;
    .loadmore {
      width: 370px;
      height: 48px;
      line-height: 48px;
      margin: 0 auto;
      border: 2px solid #133b28;
      border-radius: 10px;
      text-align: center;
      font-size: 18px;
      color: #133b28;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 1348px) {
  .home {
    .teachers {
      .teachers-lists {
        width: 1200px;
        .teachers-list {
          padding: 0 16px;
        }
      }
    }
  }
}
</style>
