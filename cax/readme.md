小程序 canvas 找cax
引入 cax组件
new cax.Stage()
cax.Rect
add
update

- countdown 组件
  文案，获取验证码
  开始计时  start false|true
  Page 为组件的调用者
  组件 data(内部) + properties(外界传入的)
  <countdown start="{{start}}" />

- properties 有个observer选项
  当外界传的值改变时，会执行
  组件是构成页面的，是为了页面打工的

- start 是由外传到内properties
  有利于页面操作关键状态
  由外部到内部通过properties，
  内部组件通知页面？ 可以做
