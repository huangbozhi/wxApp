const formatTime = date => {
  let dataNow = new Data();
  let data = new Data(date);
  const hour = data.getHours();
  const minute = data.getMinutes();
  let times = (dataNow - data) / 1000;
  let tip =''
  if(times <= 0){
    tip = "刚刚"
    return tip
  } else if(Math.floor(times / 60)<= 0){
    tip = "刚刚"
    return tip
  } //else if()
}