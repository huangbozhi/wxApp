// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'codingdream-w8qqn'

cloud.init()
const db = cloud.database({ env })
const userList = db.collection('userlist')

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event, '---', context, '+++', userList)
  // for(var i=0;i<userList.length;i++){

  // }
  if (userList.where({
    username: event.username,
    password: event.password
  }).get()) {
    return await wx.showModal({
      title: '已存在该账号',
      content: '',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        console, log(result)
        if (result.confirm) {

        }
      },
      fail: () => { },
      complete: () => { }
    });

  } else {
    return await userList.add({
      data: {
        username: event.username,
        password: event.password
      }
    })
  }
}