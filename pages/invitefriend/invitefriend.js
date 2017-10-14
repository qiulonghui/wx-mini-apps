// pages/invitefriend/invitefriend.js
const app = getApp()
Page({
  data: {
    topTitle: { icon:"intro-eme",text:"介绍朋友"},
    userInfo:{}
  },
  onLoad:function(){
    this.setData({
      userInfo: app.globalData.userInfo
    })
  }
})