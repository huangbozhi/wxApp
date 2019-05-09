// components/popup/popup.js
Component({
  // page   传来的参数
  properties: {
    
  },
  data: {
   text: '这是初始文字'
  },
  // 页面中被调用
  methods: {
    onClick: function(e){
      this.setData({
        text: "点击了",
      })
      this.triggerEvent('onTextChange')
    },
    setText: function(text){
      this.setData({
        text: text,
      })
    }
  },
})