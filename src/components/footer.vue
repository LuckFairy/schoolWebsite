<template>
  <div class="footer">
    <div class="w">
      <div class="info fl">
        <div class="link">
          <router-link :to="item.link" v-for="(item, index) in menuLists" :key="index">{{ item.title }}</router-link>
        </div>
        <div class="msg">
          <p>
            地址：苏州市 虎丘区 苏州浒墅关经济技术开发区管理委员会 大同路19号
            <br>
            电话：400-888-8888 邮箱：murongqiaochu@live.com
            <br>
            版权所有：©2014-2019北清智库商学院 京ICP备16035884号
          </p>
        </div>
      </div>
      <div class="icons fr">
        <img src="@/assets/code.png" alt="" class="code">
        <img src="@/assets/logo-s.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuLists: [
        {
          title: '学院简介',
          link: 'Introduction'
        },
        {
          title: '学院新闻',
          link: 'News'
        },
        {
          title: '教学与课程',
          link: 'Teaching'
        },
        {
          title: '教授与智库',
          link: 'Professors'
        },
        {
          title: '内训定制',
          link: 'Customization'
        },
        {
          title: '分院建设',
          link: '/'
        },
        {
          title: '校友总会',
          link: '/'
        },
        {
          title: '学院招聘',
          link: '/'
        },
        {
          title: '联系我们',
          link: 'Contact'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #133B28;
  height: 200px;
  color: #fff;
  font-size: 14px;
  .w {
    height: 100%;
    padding: 50px 25px 0;
    a {
      color: #fff;
      margin-right: 10px;
    }
    .msg {
      padding-top: 18px;
    }
    .icons {
      .code {
        margin-right: 50px;
      }
    }
  }
}
</style>
