// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'codingdream-w8qqn'

cloud.init()
const db = cloud.database({ env })
const userList = db.collection('userlist')

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event, '---', userList)
  // for(var i=0;i<userList.length;i++){

  // }
  const userinfo = await userList.where({
    username: event.username,
    password: event.password
  }).get()
  let flag = 1
  // 数据表存在该用户
  console.log(userinfo,'-=-=',userinfo.data,'+-+-',userinfo._id);
  if (userinfo.data.length > 0) {
    return {userinfo, flag}
  } else {
    return await userList.add({
      data: {
        username: event.username,
        password: event.password
      }
    })
  }
}