exports.Toast = {
  
  showToggle(info){
    var toast = this.data.toast || {};
    toast = {
      show:true,
      info:info
    }

    this.setData({
      toast: toast
    })
    setTimeout(()=>{
      this.setData({
        "toast.show": false
      })
    },1000)

  }

}

exports.Model = {
  showModel(headerText, tipInfo, picShow, picSrc, cbtnShow, navUrl, navText){
    var model = this.data.model || {};
    model = {
      show: true,
      headerText: headerText,
      picShow: picShow,
      picSrc: picSrc,
      tipInfo: tipInfo,
      cbtnShow: cbtnShow,
      navUrl: navUrl,
      navText: navText
    }

    this.setData({
      model:model
    })
  },
  
  clearModel(){
    this.setData({
      "model.show": false
    })
  }
}