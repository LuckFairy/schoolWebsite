<template>
  <div class="professors common-box">
    <div class="w">
      <div class="title">师资列表</div>
      <div class="teachers-lists clearfix">
        <div class="teachers-list fl" v-for="(item, index) in teachersArr" :key="index">
          <a href="javascript:;" @click="toDetail(index)">
            <div class="avator">
              <img :src="item.avator" alt>
            </div>
            <div class="intro">
              <div class="name">{{ item.name }}</div>
              <div class="brief" v-html="item.brief"></div>
            </div>
          </a>
        </div>
      </div>
      <div class="loadmore" @click="loadmore">加载更多</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
        }
      ]
    }
  },
  methods: {
    loadmore () {
      console.log('加载更多')
    },
    toDetail (index) {
      this.$router.push({
        path: 'professorsdetail',
        query: { professorId: index }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.professors {
  .teachers-lists {
    padding: 0 16px;
    .teachers-list {
      width: 270px;
      height: 493px;
      margin: 11px;
      background: #ffffff;
      box-shadow: 0 0 8px 0 rgba(30, 76, 53, 0.25);
      border-radius: 10px;
      overflow: hidden;
      a {
        display: block;
        width: 100%;
        height: 100%;
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
  .loadmore {
    width: 370px;
    height: 48px;
    line-height: 48px;
    margin: 40px auto 0;
    border: 2px solid #133b28;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    color: #133b28;
    cursor: pointer;
  }
}
</style>
