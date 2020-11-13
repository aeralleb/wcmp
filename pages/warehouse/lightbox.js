// pages/warehouse/lightbox.js
const wxp = require('../../utils/wxp.js');
const util = require('../../utils/util.js')
Page({

  /**
   * Page initial data
   */
  data: {
    emailAddress: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const CSWarehousePromoContent = wx.getStorageSync("CSWarehousePromoContent");
    console.log("---------lightbox.js onLoad----------");
    this.setData({
      CSWarehousePromoContent : CSWarehousePromoContent
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  continueToPDP: function(){
     console.log("---------------warehouse/lightbox.js continueToPDP with user email address : -----------------", this.emailAddress);
     // Set category as warehouse
     wx.setStorageSync("category", "levi_clothing_deals_us");
     wx.navigateTo({
      url: '../product/list'
    })
  },

  inputEvent: function (e) {
    console.log(e.detail.value)
    this.emailAddress = e.detail.value;
  }
})