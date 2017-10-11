// pages/regist/regist.js
var common = require("../common.js")
Page(Object.assign({},common.Toast,{
  data:{
    array:["女","男"],
    index: 0,
    toast:{
      show:false,
      info:""
    },
    second:60,
    codeShow:true
  },
  sexChange:function(e){
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit:function(e){
    var peoName = e.detail.value.peopleName
    var old = e.detail.value.old
    var tel = e.detail.value.tel
    var code = e.detail.value.code
    var patrn = /^(13[0-9]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|5|6|7|8|9]|147|177)\d{8}$/  //手机格式正则验证
    if(peoName==""||peoName==null){
      this.showToggle("姓名不能为空！")
    } else if (peoName.length<2 || peoName.length>6){
      this.showToggle("姓名为2-6个字符！")
    }else if(old==""||old==null||old<1||old>100){
      this.showToggle("年龄请填写1-110之间!")
    } else if (tel==""||tel.length< 11){
      this.showToggle("请11位手机号码!")
    } else if (!patrn.exec(tel)){
      this.showToggle("手机格式不正确!")
    }else if(code==""||code.length<6){
      this.showToggle("请输入6位数验证码!")
    }else{
      //提交表单发送请求，显示提示信息
      wx.showToast({
        title: '注册成功',
      })
    }
  },
  codeBtnToggle:function(){
    var _this = this 
    this.setData({
      codeShow:false
    })
    var time = setInterval(function(){
      _this.data.second = _this.data.second-1
      _this.setData({
        second: _this.data.second
      })
      if (_this.data.second <= 0) {
        _this.setData({
          second: 60,
          codeShow: true
        })
        clearInterval(time)
      }
    },1000)   
  }
}))