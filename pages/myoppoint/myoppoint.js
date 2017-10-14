// pages/myoppoint/myoppoint.js
Page({
  data: {
    topTitle:{
      text:"我的预约",
      icon:"my-appi"
    },
    oppintItem:[
      { state: "ing", oppnumber: "6666 6666 6666", opptime: "2017年10月13日 上午11：30", people: "小腿毛", oppitem: "激光脱毛", cttime: "2017年11月13日 下午2：30 ", url:"/pages/appointment/appointment"},
      { state: "cancel", oppnumber: "6666 6666 6665", opptime: "2017年10月13日 上午11：30", people: "小腿毛", oppitem: "激光脱毛", cttime: "2017年11月13日 下午2：30 ", url: "/pages/appointment/appointment" },
      { state: "end", oppnumber: "6666 6666 6664", opptime: "2017年10月13日 上午11：30", people: "小腿毛", oppitem: "激光脱毛", cttime: "2017年11月13日 下午2：30 ", url: "/pages/appointment/appointment" }
    ]
  },
})