// pages/appointment/appointment.js
var itemArr = [
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "More", itemText: "更多项目"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部"}
]

var Zan = require('../common.js')
function getNowTime(){
  //获取当前时间
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  if(month >=1 && month <= 9){
    month = "0" + month
  }
  if(day>=1 && day <= 9){
    day = "0" + day
  }

  var currentdate = year + "年" + month + "月" + day + "日"
  return currentdate
}

function getEndTime(){
  //时间选择器结束时间限制
  var date = new Date()
  var year = date.getFullYear() + 2
  var month = date.getMonth() + 1
  var day = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  if (day >= 1 && day <= 9) {
    day = "0" + day
  }

  var currentdate = year + "-" + month + "-" + day
  return currentdate
}

Page(Object.assign({},Zan.Toast,{
  //页面的初始数据
  data: {
    time: "8:30",
    date: getNowTime(),
    endTime: getEndTime(),
    oppItem: itemArr,
    toast:{
      show: false,
      info: ""
    }
  },

  onLoad:function(){
    
  },
  
  selected: function(e){
    //item选中函数事件
    var index = e.currentTarget.dataset.index
    this.data.oppItem[index].imgClass = 
    this.data.oppItem[index].imgClass === "img-wrap" ? "img-wrap active":"img-wrap"
    this.setData({
      oppItem: this.data.oppItem
    })
  },
  showMore: function(e){
    //更多项目函数事件
    this.setData({
      "oppItem[11].hideview": true
     })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation
    animation.height("435px").step()
    this.setData({
      animationData: animation.export()
    })
  },
  call: function (e) {
     //拨打电话函数事件
     wx.makePhoneCall({
       phoneNumber: '123',
     })
  },
  bindDateChange: function(e){
    //选择日期函数事件
    var newTime = e.detail.value.split('-')
    var year = newTime[0]
    var month = newTime[1]
    var day = newTime[2]
    this.setData({
      date: year + "年" + month + "月" + day +"日"
    })
  },
  bindTimeChange: function (e) {
    //选择时间函数事件
    this.setData({
      time: e.detail.value
    })
  },
  formSubmit: function(e){
    var people = e.detail.value.people
    var date = e.detail.value.date
    var time = e.detail.value.time
    var arr = this.data.oppItem
    var selectedItems = ""
    for(var i=0;i<arr.length;i++){//获取用户选择的预约项目
      if (arr[i].imgClass == "img-wrap active"){
        selectedItems += arr[i].itemText +","
      }    
    }
    selectedItems = selectedItems.substring(0, selectedItems.length - 1)

    if (people == ""){//就诊人填写验证
      this.showToggle("请填写就诊人")
    } else if (selectedItems == "") {//预约项目验证
      this.showToggle("请选择预约项目")
    }else{//发送请求
      console.log(selectedItems)
      wx.showToast({
        title: "提交成功",
        icon: 'success',
        duration: 1000

      })
    }
  }
 
}))