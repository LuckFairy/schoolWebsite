// 第一个参数都是默认传入的值，第二开始都是手动传入的参数
const test1 = val => {
  return val * 2
}

const test2 = (val, num = 0) => {
  return val * num
}

export { test1, test2 }
