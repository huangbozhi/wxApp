const WXAPI = require('../../wxapi/main')
Page({
  data: {
    goods: [],        //商品列表
    categories: [],   //分类
    activeCategoryid: 0, //当前分类
  },
  onLoad: function () {
    this.getBanners();
    this.landGood();
  },

  getBanners(){
    WXAPI.banners({
      type: 'new'
    })
    .then( res => {
      console.log(res);
    })
  },
  landGood(){
    WXAPI.goods({
      recommendStatus: 1
    })
    .then( res => {
      console.log(res);
    })
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
