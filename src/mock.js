// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const newsData = () => {
  let newsList = []
  for (let i = 0; i < 6; i++) {
    let newsObject = {
      id: i,
      time: Random.date('yyyy-MM-dd'),
      title: Random.ctitle(), // 随机生成一句中文标题
      poster: Random.dataImage('336x280', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      brief: Random.csentence(20, 50) // 随机生成一段中文文本。
    }
    newsList.push(newsObject)
  }
  return {
    newsList: newsList
  }
}

// Mock.mock( url, post/get , 返回的数据)
Mock.mock('/getNews', 'get', newsData)
Mock.mock('/getBrief', 'get', {brief: Random.csentence(100, 500)})
