// components/tabbar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isIndex: {
      type: Boolean,
      value: false
    },
    isInner: {
      type: Boolean,
      value: false
    },
    mainTitle: {
      type: String,
      value: ''
    },
    mainImg: {
      type: String,
      value: ''
    },
    mainFocus: {
      type: Number,
      value: null
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    shareIsOpen: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    goHome(e) {
      if (e.currentTarget.dataset.hi) {
        wx.redirectTo({
          url: '../../pages/index/index'
        });
      } else if (e.currentTarget.dataset.in) {
        wx.navigateTo({
          url: '/pages/info/info',
        })
      }
    },

    goInfo(e) {
      if (e.currentTarget.dataset.hi) {
        wx.redirectTo({
          url: '../../pages/info/info'
        });
      } else if (e.currentTarget.data.in) {
        we.wx.navigateTo({
          url: '../../pages/info/info'
        });
      }
    },

    openShow() {
      let shareIsOpen = !shareIsOpen;
      this.setData({
        shareIsOpen
      })
    }
  }
})
