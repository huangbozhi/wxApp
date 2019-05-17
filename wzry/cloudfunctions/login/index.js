// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'codingdream-w8qqn'

cloud.init()
const db = cloud.database({ env })
const userList = db.collection('userlist')



// 云函数入口函数
exports.main = async (event, context) => {
  let userinfo = await userList.where({
    username: event.username,
    password: event.password
  }).get()
  if (userinfo.data.length > 0) {
    return await userinfo
  } else {
    return await ''
  }
}