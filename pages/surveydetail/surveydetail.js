// pages/surveydetail/surveydetail.js
Page({
  data: {
    topTitle:{
      icon:"myd",
      text:"满意度调查"
    },
    starArr: [
      { "star": ["off", "off", "off", "off", "off"], surveyItem:"医院环境",score:0 },
      { "star": ["off", "off", "off", "off", "off"], surveyItem: "服务态度", score: 0 },
      { "star": ["off", "off", "off", "off", "off"], surveyItem: "等待时间", score: 0 },
      { "star": ["off", "off", "off", "off", "off"], surveyItem: "医疗质量", score: 0 }
      ],
  },
  getScore: function(e){
    var score = e.currentTarget.dataset.score
    var currentItem = e.currentTarget.dataset.currentItem
    var index = score-1;
    var starArr = this.data.starArr;
    for (var i = 0; i < starArr.length;i++){
      if (i == currentItem){

        this.data.starArr[i].score = score

        for (var j = 0; j < starArr[i].star.length; j++) {

          if (j <= index) {
            starArr[i].star[j] = "on"
          } else {
            starArr[i].star[j] = "off"
          }

        }
      }
    }
    this.setData({
      starArr: starArr
    })
  },
  formsubmit:function(e){
    var sug = e.detail.value.suggest
    var hjscore = this.data.starArr[0].score
    if (hjscore == 0){
      
    }
  }
})