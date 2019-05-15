// components/calendar/calendar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    defaultValue: {
      type: String,
      value: ''
    },
    lastMonth: {
      type: String,
      value: ''
    },
    nextMonth: {
      type: String,
      value: ''
    },
    //星期数组
    weekText: {
      type: Array,
      value: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '',
    year: 0,
    month: 0,
    date: 0,
    // 常量 用于匹配是否为当天
    YEAR: 0,
    MONTH: 0,
    DATE: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化
    display(year, month, date){
      this.setData({
        year,
        month,
        date,
        title: year+'年' + this.zero(month) + '月'
      })
    },  
    zero(e){
      return e>=10 ? e : '0'+ e;
    },
  }
})
