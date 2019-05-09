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
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    top: db.top_10,
    currentVid: null
  },
  play(event){
    console.log(event);
    if(this.data.currentVid !== null){
      currentVideo.pause();
    }
    const vid = event.target.dataset.vid;
    if(vid){
      currentVideo = wx.createVideoContext(`${vid}`);
      currentVideo.play();
      this.setData({
        currentVid: vid
      })
    }
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