export default {
  // 对象数组进行切割，变成四个为一组的对象数组
  getNumArr (val, num) {
    const len = val.length
    let result = []
    for (let i = 0; i < len / num; i++) {
      result.push(val.slice(i * num, (i + 1) * num))
    }
    return result
  }
}
