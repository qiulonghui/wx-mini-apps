// pages/map/mao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/pages/img/loction@2x.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 18,
      height: 24
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
  }
})