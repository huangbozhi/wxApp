//app.js
App({
  onLaunch: function (options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'codingdream-w8qqn'
      })
    }

    this.globalData.shareParam = options.query
    // 查询用户是否授权
    wx.getSetting({
      success: (result) => {
        // 已经授权
        if(result.authSetting['scope.userInfo']){
          wx.getUserInfo({
            withCredentials: 'false',
            lang: 'zh_CN',
            timeout:10000,
            success: (infoRes) => {
              self.globalData.userInfo = infoRes.userInfo
              if(self.catchUserInfo){
                self.catchUserInfo(infoRes, userInfo)
              }

              wx.cloud.callFunction({
                name: 'createUser',
                data: {
                  userInfo: infoRes.userInfo,
                  avatarUrl: infoRes.userInfo.avatarUrl,
                  name: '',
                  nickName: infoRes.userInfo.nickName,
                  sex: infoRes.userInfo.gender
                }
              })
            },
            fail: () => {console.log(error)},
            complete: () => {}
          });
        } else{
          url: '/pages/login/login'
        }
      },
      fail: () => {},
      complete: () => {}
    });

    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {},
      success(res){
        self.globalData.userInfoFromCloud = res.result.storeUser
      }
    })
  },
  globalData: {
    currentGroupInfo: null,
    currentGroupUserList: [],
    currentBill: null,
    userInfo: null,
    shareParam: null,
    billId: '',
    userInfoFromCloud: null,
    userRemark: {}
  }
})
