// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get');
  let postResponse = await got('httpbin.org/post', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '带个朋友回家',
      value: 'xmm'
    })
  })
  return postResponse.body
}