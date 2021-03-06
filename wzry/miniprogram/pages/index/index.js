const app = getApp();
const db = wx.cloud.database();
const userList = db.collection('userlist')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null
  },
  bindUsername(e) {
    this.setData({
      username: e.detail.value
    })
  },
  bindPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  formSubmit() {
    if (this.data.username && this.data.password) {
      wx.cloud.callFunction({
        name: 'login',
        data: {
          username: this.data.username,
          password: this.data.password
        },
        success(res) {
          console.log(res)
          if (res.result) {
            wx.showModal({
              title: '提示',
              content: '登录成功',
              showCancel: false,
              confirmText: '确定',
              confirmColor: '#3CC51F'
            })
            setTimeout(() => {
              wx.switchTab({
                url: '../jcsp/index',
                success: (result) => {

                },
              });
            }, 1000);
          } else {
            wx.showModal({
              title: '登录失败',
              content: '',
              showCancel: true,
              cancelText: '取消',
              cancelColor: '#000000',
              confirmText: '确定',
              confirmColor: '#3CC51F',
              success: (result) => {
                if (result.confirm) {
                  console.log(1)
                } else {
                  console.log(2)
                }
              }
            })
          }
        }
      })
    } else {
      wx.showModal({
        title: '登录失败',
        content: '账号或者密码错误',
        showCancel: false
      })
    }
  },
  register() {
    wx.navigateTo({
      url: '../register/register',
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