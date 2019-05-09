Page({
  http: function(){
    // 手机本机端的
    // 从本地到云端
    wx.cloud.callFunction({
      name: 'http'
    })
    .then(res => {
      console.log(res);
    })
  }
})