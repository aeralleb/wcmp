//app.js
import qs from 'qs'
App({
  onLaunch() {
    console.log("---------app.js on:Launch---------------")

     /*
    const string = qs.stringify({
        a: 1,
        b: 2
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("-----------app.js login success-------------------", res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    /*
    wx.openSetting({
      success (res) {
        console.log("-----------success openSetting-------------------", res.authSetting)
        res.authSetting = {
        "scope.userInfo": true,
        "scope.userLocation": true
        }
      },
      fail (res) {
        console.log("-----------fail openSetting-------------------", res)
      }
    })
    */
    // 获取用户信息
    /*
    wx.getSetting({
      success: res => {
        console.log("------------app.js getSetting() success-----------", res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log("--------------app.js getUserInfo() success----------------", res.userInfo);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            },
            fail: res => {
              console.log("-----------app.js getUserInfo() fail----------", res);
            }
          })
        }
      }
    }) 
    */
  },
  globalData: {
  }
})