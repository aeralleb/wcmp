// pages/product/list.js
const wxp = require('../../utils/wxp.js');
const util = require('../../utils/util.js')

Page({

  /**
   * Page initial data
   */
  data: {
    category: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.category = wx.getStorageSync("category");
    console.log("---------------product/list.js onLoad category-----------",  this.category);
    this.getProductListByCategory();
  },
  async getProductListByCategory(){
    //async await promise
    const productListURL = `https://www.levi.com/api/aos/rest/v2/leviUSSite/categories/${this.category}/products?lang=en_US&query=:relevance&fields=FULL`
    const {data} = await wxp.request({
      url: productListURL,
      data: {},
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type':'application/json'
      }
    })
    console.log("-------------getProductListByCategory using async await------------------", data);
    const {products, ...rest} = data;
    this.setData({
      products : products 
    })
  },
  getProductDetail: function (e) {
    console.log("-------------list.js getProductDetail pc9---------------", e.currentTarget.dataset.pc9);
    wx.setStorageSync("code", e.currentTarget.dataset.pc9);
    wx.navigateTo({
      url: './detail'
    })
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

  }
})