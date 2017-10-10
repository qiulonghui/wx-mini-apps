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