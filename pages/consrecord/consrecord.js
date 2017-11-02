// pages/consrecord/consrecord.js
Page({
  data: {
    isLogin:false,
    topTitle:{
      icon:"xfjl",
      text:"消费记录"
    },
    consItem:[
      { consType:"经肤抗衰",consTime:"2017年10月12日 上午10:30" },
      { consType: "祛斑嫩肤", consTime: "2017年10月12日 上午10:30" },
      { consType: "面额整形", consTime: "2017年10月12日 上午10:30" },
    ]
  },
 
  onLoad:function(){
    var _this = this 
    wx.getStorage({
      key: 'isLogin',
      complete: function(res) {
        console.log(res.data)
        if (res.data){
          _this.setData({
            isLogin: res.data
          })
        }else{
          wx.request({
            url: "http://127.0.0.1/ajax/test2.json",
            success: function (res) {
              console.log("requestOk")
              var isLogin = res.data.isLogin
              wx.setStorage({
                key: 'isLogin',
                data: isLogin,
              })
              _this.setData({
                isLogin: isLogin
              })
            }
          })
        }
      },
    })
  }

})