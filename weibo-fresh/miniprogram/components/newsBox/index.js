// components/newsBox/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: null
    },
    isOld: {
      type: Boolean,
      value: null
    },
    time: {
      type: String,
      value: null
    },
    focusNum: {
      type: String,
      value: null
    },
    imgUrl: {
      type: Array,
      value: null
    },
    subNews: {
      type: Array,
      value: null
    },
    name: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shareOpen: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goInner(){
      wx.navigateTo({
        url: '../../pages/inner/inner?dataPack=' + JSON.stringify(this.properties),
      })
    }
  }
})
