//index.js
//获取应用实例
const app = getApp()

const wxp = require('../../utils/wxp.js');
const util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Live in Levi',
    userInfo: {},
    hasUserInfo: false,
    canIUse: true,
    scanning: false,
    scanMsg: "Scanning ...",
  },
  //事件处理函数
  bindViewTap: function() {
    this.data = {}
    setTimeout(() => {
      console.log("hello you are on avatar", this.data);
    }, 500);
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // ***********MY UTIL****: 
    // Current Location;
    console.log("index.js on:Load -> Getting location...");
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // Latitude
        var longitude = res.longitude // Longitude
        console.log("your coords are", latitude, longitude);
        this.setData({
          userLocationLatitude: latitude,
          userLocationLongitude: longitude,
        })
      }
    })
    
    // More USER INFO
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("---------index.js app.userInfoReadyCallback() success --------------");
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo

          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    // ***********MY UTIL****: REST API
    // ***********DEMO*******: callback syntax
    /*
    wx.request({
      url: 'https://www.levi.com/api/aos/rest/v2/leviGBSite/categories/levi_clothing_men/products?lang=en_GB&query=:relevance&fields=FULL',
      data: {},
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type':'application/json'
      },
      success: (res) => {
          console.log("----------getProduct using callback success---------", res.data);
      },
      fail: (status) => {
        console.log("----------getProduct using callbacks fail---------", status);
      },
    })
    // ***********DEMO*******: Async Await Syntax
    this.getProduct();
    */
   app.openSettingReadyCallback = res => {
    console.log("---------openSettingReadyCallback--------------");
  }
  },
  getUserInfo: function(e) {
    console.log("------------getUserInfo-------")
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  scanAndPDP: function(e){
    this.setData({
      scanning : true
    })
    console.log("---------scanAndPDP------------");
    // ***********MY UTIL***: Scan QR code
    console.log("codes...");
    wx.scanCode({
      success: (res) => {
        this.setData({
          scanInfo: res,
          hasUserInfo: true
        })
        console.log(res)
        this.setData({
           scanMsg : `${res.scanType} : ${res.result}`
        })
        if (res.scanType === "QR_CODE" && res.result.lastIndexOf("https://") >= 0){
            this.getProduct(res.result)
        } 
      }
    })
  }
})
