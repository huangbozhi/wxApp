// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'codingdream-w8qqn'

cloud.init()

const db = cloud.database({ env })


// 云函数入口函数
exports.main = async (event, context) => {
  // const a = await db.collection('group').get()
  // console.log(a,'----',a.data)
  const openId = cloud.getWXContext().OPENID

  let groupList = await db.collection('user-group')
  .where({
    userId: openId
  }).get()

    console.log(groupList,'---------');

  let returnResult = []
  for(let item of groupList.data){
    const oneGroup = await db.collection('group')
    .where({
      _id: item.groupId,
      delete: false
    }).get()
    if(oneGroup.data.length > 0){
      const userInfo = await db.collection('group')
        .where({
          openId: oneGroup.data[0].createBy
        })
        .get()
        oneGroup.data[0].createBy = userInfo.data[0]
        oneGroup.data[0].relateUserGroupId = item._id
        returnResult.push(oneGroup.data[0])
    }
  }

  return returnResult.sort( (a, b) => a.createBy < b.createBy ? 1 : -1) 
  
//   console.log(group,'++',group.data)
//  group
}