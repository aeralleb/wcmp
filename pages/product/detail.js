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
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("---------------product/detail.js onLoad-----------");
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
    const PRODUCT_URL = "https://www.levi.com/api/aos/rest/v2/leviGBSite/categories/levi_clothing_men/products?lang=en_GB&query=:relevance&fields=FULL"
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
    const {products, ...rest} = data;
    this.setData({
      heroImage : products[0].images[1].url,
      product: products[0],
      materials: rest.facets[0].values,
      waists: rest.facets[2].values,
      lengths: rest.facets[3].values,
      Tops: rest.facets[4].values,
      scanMsg: "", 
    })
  },
  changeSizes: function(e){
    var index= e.detail.value;
    console.log("The subscript of index is:" + index);

    var id=this.data.Tops[index].id;
    var name =this.data.Tops[index].name;
    
    this.setData({
      showSize:  name 
    })

 },
 cancelDropdown: function(e){
    console.log("trigger cancel event");
 }
})