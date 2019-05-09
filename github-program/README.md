- 一套好的UI
  app.wxss 全局皮肤
- 组件思想
  界面中相对独立的显示区块可以封装成组件。
  意义：界面是由组件构成，不是由标签构成，
  组件可以复用 
- 项目中所有的请求都封装到 api 目录下面
  module.exports = {}
  require()
- wx.startPullDownRefresh();    onLoad()把生命周期交给onPullDownRefresh()
  api 请求
  wx.stopPullDownRefresh();
- 复杂项目的组织数量比较多 /style/base.wxss 多个组件都依赖的基础样式