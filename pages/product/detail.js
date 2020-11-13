// pages/product/detail.js
const wxp = require('../../utils/wxp.js');
const util = require('../../utils/util.js')

Page({

  /**
   * Page initial data
   */
  data: {
    heroImage: '',
    showSize: "Please select a Size",
    code: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.code = wx.getStorageSync('code');
    console.log("---------------product/detail.js onLoad code-----------", this.code);
    this.getProduct();
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

  async getProduct(){
    //async await promise
    const PRODUCT_URL = `https://www.levi.com/api/aos/rest/v2/leviUSSite/products/${this.code}?fields=FULL&lang=en_US`
    const {data} = await wxp.request({
      url: PRODUCT_URL,
      data: {},
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type':'application/json'
      }
    })
    console.log("-------------getProduct using async await------------------", data);
    const {galleryImageList, ...rest} = data;
    this.setData({
      heroImage : galleryImageList.galleryImage[8].url,
      product: rest,
      materials: rest.classifications[0].features[3].featureValues.length < 2 ? rest.classifications[0].features[4].featureValues : rest.classifications[0].features[3].featureValues,
      waists: rest.variantWaist,
      lengths: rest.variantLength,
      sizes: rest.variantOptions
    })
  },
  changeSizes: function(e){
    var index= e.detail.value;
    console.log("The subscript of index is:" + index);

    var id=this.data.sizes[index].id;
    var displaySizeDescription = this.data.sizes[index].displaySizeDescription;
    
    this.setData({
      showSize:  displaySizeDescription 
    })

 },
 cancelDropdown: function(e){
    console.log("trigger cancel event");
 }
})