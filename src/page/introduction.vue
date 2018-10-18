<template>
  <div class="introduction common-box">
    <div class="w">
      <div class="title">学院简介</div>
      <div class="menu">
        <span v-for="(item, index) in menuLists" :key="index">
          <a href="javascript:;" @click="getContent(index)" :class="{'active': activeIndex === index}">{{ item }}</a>
        </span>
      </div>
      <div class="content" v-loading="loading" v-html="content"></div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'
export default {
  data () {
    return {
      menuLists: ['走进阳山智谷', '院长寄语', '发展历程', '机构设置', '院务会', '战略委员会'],
      activeIndex: 0,
      content: '',
      loading: true
    }
  },
  created () {
    this.getBrief()
  },
  methods: {
    getContent (index) {
      this.activeIndex = index
      this.loading = true
      this.getBrief()
    },
    getBrief () {
      setTimeout(() => {
        api.getBrief('/getBrief')
          .then(res => {
            this.content = res.brief
            this.loading = false
          })
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.introduction {
  .w {
    padding: 0 100px;
    .menu {
      height: 40px;
      line-height: 40px;
      width: 1000px;
      border-bottom: 2px solid #133B28;
      padding: 0 80px;
      span {
        display: inline-block;
        width: 16.66%;
        text-align: center;
        a {
          &.active {
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
    .content {
      padding: 50px;
    }
  }
}
</style>
