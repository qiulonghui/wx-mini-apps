// pages/vipcenter/vipcenter.js
const app = getApp()
Page({
  data: {
    itemArr:[
      { url: "/pages/intgral/intgral", img: "vip", text: "会员积分" },
      { url: "/pages/store/store", img: "jfyh", text: "积分兑换" },
      { url: "/pages/consrecord/consrecord", img: "xfjl", text: "消费记录" },
      { url: "/pages/vipinfo/vipinfo", img: "wdzl", text: "我的资料" },
      { url: "#", img: "mrqd", text: "每日签到",info:"签到获取商城积分哦~",infoFlag:true},
      { url: "#", img: "wdlq", text: "我的礼券" }
    ],
    userInfo:{}
  },
  onLoad: function(){
    if(app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
})