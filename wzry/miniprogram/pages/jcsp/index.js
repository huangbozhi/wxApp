// const db = wx.cloud.database();
// const legends_videos = db.collection('legends-videos');
const db = require('../../assets/db.js');
let currentVideo = null;

Page({
  data: {
    imgUrls: [
      'https://ps.ssl.qhmsg.com/sdr/400__/t01ed4fe9eacb70d8b5.jpg',
      'https://ps.ssl.qhmsg.com/sdr/400__/t01db78e3944e847ea9.jpg',
      'https://ps.ssl.qhmsg.com/sdr/400__/t0185673e9ec570761f.jpg'
    ],
    currentVid: null,
    currentVids: null,
    isActive: 0,
    top: db.top_10,
    allVideos: db.allVideos,
    zhanshiVideo: db.zhanshiVideo,
    tankeVideo: db.tankeVideo,
    cikeVideo: db.cikeVideo,
    apVideo: db.apVideo,
    adVideo: db.adVideo,
    fuzhuVideo: db.fuzhuVideo
  },
  play(event){
    // console.log(event);
    if(this.data.currentVid !== null){
      currentVideo.pause();
    }
    const vid = event.target.dataset.vid;
    console.log(vid);
    if(vid){
      currentVideo = wx.createVideoContext(`${vid}`);
      currentVideo.play();
      this.setData({
        currentVid: vid
      })
    }
  },
  // plays(event){
  //   console.log(event);
  //   if(this.data.currentVids !== null){
  //     currentVideo.pause();
  //   }
  //   const vid = event.target.dataset.vid;
  //   if(vid){
  //     currentVideo = wx.createVideoContext(`${vid}`);
  //     currentVideo.play();
  //     this.setData({
  //       currentVids: vid
  //     })
  //   }
  // },
  setActive(e){
    var index = e.target.dataset.index
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    });
     // 距离左边位置
    animation.left((index * 125) + 'rpx').step()
    // 设置动画
    this.setData({
        animationData: animation.export()
    });
    this.setData({
      isActive: index,
      id: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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