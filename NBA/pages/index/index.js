//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gameDate: [
      {
        id: 'd22',
        time: '05月15号'
      },
      {
        id: 'd23',
        time: '05月13号'
      },
      {
        id: 'd24',
        time: '05月24号'
      },
      {
        id: 'd25',
        time: '06月07号'
      },
    ],
    current: 0,
    agenda: {},
    gameResult: [
    {
      id: 'd22',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/new/22.png",
      leftgrade: 119,
      leftname: '开拓者',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      rightgrade: 120,
      rightname: '勇士',
    },
    {
      id: 'd23',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/20.png",
      leftgrade: 90,
      leftname: '76人',
      rightteam: "https://img1.gtimg.com/sports/pics/hv1/133/21/2268/147482188.png",
      rightgrade: 92,
      rightname: '猛龙',
    },
    {
      id: 'd24',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      leftgrade: 118,
      leftname: '勇士',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/10.png",
      rightgrade: 113,
      rightname: '火箭',
    },
    {
      id: 'd25',
      leftteam: "https://mat1.gtimg.com/sports/nba/logo/1602/9.png",
      leftgrade: 95,
      leftname: '勇士',
      rightteam: "https://mat1.gtimg.com/sports/nba/logo/1602/15.png",
      rightgrade: 89,
      rightname: '雄鹿',
    }],
  },
  turnLeft(){
    // es6 解构
    let {current} = this.data
    if(current <= 0) return false;
    current--;
    this.setData({
      current
    })
    this.handleAgendaDate()
  },
  turnRight(){
    let {current, gameDate} = this.data
    console.log(current,date,this.data)
    if(current >= gameDate.length-1) return;
    current++;
    this.setData({
      current
    })
    this.handleAgendaDate()
  },
  handleAgendaDate(){
    // date是一个时间的数组 result是一个比赛结果的数组 id一样
    let {current, gameResult, gameDate} = this.data
    let {id} = gameDate[current]
    // 数组的api（find）
    const agenda = gameResult.find( item => id === item.id)
    if(agenda){
      this.setData({
        agenda,
      })
    }
  },
  onLoad: function(){
    this.handleAgendaDate();
  }
})