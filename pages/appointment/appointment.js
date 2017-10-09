// pages/appointment/appointment.js
var appInstance = getApp()
var itemArr = [
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect"},
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect"},
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "More", itemText: "更多项目", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "bb", itemText: "鼻部", hideview: false, flag: "unselect" },
  { imgClass: "img-wrap", pic: "yj", itemText: "眼部", hideview: false, flag: "unselect"}
]

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

Page({
  //页面的初始数据
  data: {
    time: "8:30",
    date: getNowTime(),
    endTime: getEndTime(),
    oppItem: itemArr,
  },
  onLoad:function(){
    itemArr[11].hideview = false
    this.setData({
      oppItem: itemArr
    })
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

    itemArr[11].hideview = true
    this.setData({
       oppItem: itemArr
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
      wx.showToast({
        title:"请填写就诊人。",
        icon: "loading"
      })
    } else if (selectedItems == "") {//预约项目验证
      wx.showToast({
        title: "请选择预约项目。",
        icon: "loading"
      })
    }else{//发送请求

    }

  }
})