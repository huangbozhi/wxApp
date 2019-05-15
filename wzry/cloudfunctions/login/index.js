// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'codingdream-w8qqn'

cloud.init()
const db = cloud.database({ env })
const userList = db.collection('userlist')


// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event, '---', context, '+++', userList)
  if(userList.where({
    username: event.username,
    password: event.password
  }).get()){
    wx.showModal({
      title: '登录成功',
      content: '',
      showCancel: false,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
          
        }
      },
      fail: () => {},
      complete: () => {}
    });
  }else{
    wx.showModal({
      title: '登录失败',
      content: '',
      showCancel: false,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
          
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
}