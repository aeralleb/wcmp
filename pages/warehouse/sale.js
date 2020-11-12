// pages/warehouse/sale.js
const wxp = require('../../utils/wxp.js');
const util = require('../../utils/util.js')
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("---------sale.js on:Launch---------------");
    this.getWarehouseAdContent();
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
  shopTheSale: function(){
     console.log("---------------warehouse/sale.js shopTheSale-----------");
     wx.navigateTo({
      url: './lightbox'
    })
  },
  async getWarehouseAdContent(){
    //async await promise
    const CS_WAREHOUSE_URL = "https://www.levi.com/api/aos/rest/v2/leviGBSite/categories/levi_clothing_men/products?lang=en_GB&query=:relevance&fields=FULL"
    const {data} = await wxp.request({
      url: CS_WAREHOUSE_URL,
      data: {},
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type':'application/json'
      }
    })
    console.log("-------------getWarehouseAdContent using async await------------------", data);
    const {products, ...rest} = data;
    this.setData({
      title : "LEVI'S® WAREHOUSE EVENT",
      subTitle: "UP TO 75% OFF",
      blurb: "Save big on our closeout styles.",
      link: "SHOP THE SALE",
      finePrint: "Online only. Final sale.", 
    })
    const CSWarehousePromoContent = {
      //replace below with just pass the result object for this view as well as lightbox view
      title : "LEVI'S® WAREHOUSE EVENT",
      subTitle: "UP TO 75% OFF",
      blurb: "Save big on our closeout styles.",
      link: "SHOP THE SALE",
      finePrint: "Online only. Final sale.",
      logo: "https://images.contentstack.io/v3/assets/blt5a5988820e5f83f8/bltf65c16d396a81b4a/5f1897ac4111513a72487ec7/Warehouse_SiteLogo_White_Mobile_2x.png",
      saleTitle: "UP TO 75% OFF CLOSEOUT STYLES",
      signupBlurb: "Sign up below, so whenever there’s a promotion, special offer or new arrival, you’ll hear about it first.",
      privacyPolicy: "<text style='text-decoration:underline'>Privacy Policy</text> : By Submitting my email address, I agree to receive personalized emails from LS&Co. Group of Companies regarding exclusive offers, new arrivals, event and contest invites and more as explained in the LS&Co. . Offer details, financial incentives and exclusions available. I can unsubscribe at any time." 
    }
    wx.setStorageSync ('CSWarehousePromoContent', CSWarehousePromoContent);
  }
})