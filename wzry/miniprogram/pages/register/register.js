const app = getApp();
const db = wx.cloud.database();
const userList = db.collection('userlist');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null,
    passwords: null
  },

  inputUser(e) {
    this.data.username = e.detail.value
    // app.globalData.username = e.detail.value
    console.log(this.data.username)
  },
  inputPassword(e) {
    this.data.password = e.detail.value
    // app.globalData.password = e.detail.value
  },
  inputPasswords(e) {
    this.data.passwords = e.detail.value
    // app.globalData.passwords = e.detail.value
  },
  refresh() {
    // app.globalData.username = null;
    // app.globalData.password = null;
    // app.globalData.passwords = null;
    this.setData({
      username: null,
      password: null,
      passwords: null
    })
  },
  register() {
    let self = this;
    // console.log(/^[0-9]*$/.test(username),'---',typeof(password))
    if (!self.data.username || !self.data.password || !self.data.passwords) {
      console.log(1)
      wx.showModal({
        title: '注册失败',
        content: "用户名或密码不能为空！",
        confirmtext: "确定",
        confirmColor: '#576B95'
      })
      self.refresh()
    }
    else if (!(/^[0-9]*$/.test(self.data.username)) || self.data.password !== self.data.passwords) {
      console.log(2)
      wx.showModal({
        title: '注册失败',
        content: "用户名不合法或密码错误！",
        confirmtext: "确定",
        confirmColor: '#576B95'
      })
      self.refresh()
    } else {
      console.log(3)
      wx.cloud.callFunction({
        name: 'getUser',
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success(res) {
          console.log(res)
          // 存在用户
          if(res.result.flag){
            wx.showModal({
              title: '提示',
              content: '已存在该账号',
              showCancel: false,
              confirmText: '确定',
              confirmColor: '#3CC51F',
            })
          } else{
            wx.showModal({
              title: '提示',
              content: '注册成功',
              showCancel: false,
              confirmText: '确定',
              confirmColor: '#3CC51F',
            })
          }
        },
        fail(error) {
          console.log(error)
        }
      })
    }
    //查询用户是否已经注册

    // userList.where({
    //  username: username,
    //  password: password 
    // }).get({
    //  success: function(res) {
    //   let userInfos = res.data;
    //   console.log(res.data)
    //   if (userInfos && userInfos.length > 0) {
    //    let user = userInfos[0];
    //    if (user && user.username) {
    //     wx.showModal({
    //      title: '提示',
    //      content: '您已注册，确定要更新账号密码吗？',
    //      success: function(res) {
    //       if (res.confirm) {
    //        console.log('用户点击确定')
    //        that.saveuserinfo();
    //       }
    //      }
    //     })
    //    }
    //   } else {
    //    that.saveuserinfo();
    //   }
    //  }
    // })
  },
  checkNamePassword(username, password) {

  },
  saveuserinfo() {
    let self = this;
    userList.doc('_openid').set({
      data: {
        username: username,
        password: password
      }
    }).then(res => {
      app.showTips('注册成功');
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})