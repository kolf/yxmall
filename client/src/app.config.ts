export default {
  pages: [
    "pages/index/index",
    "pages/cart/index",
    "pages/user/index",
    "pages/goods-details/index",
    "pages/goods-categorys/index",
    "pages/order-categorys/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    backgroundColor: "#fafafa",
    borderStyle: "white",
    selectedColor: "#ee0a24",
    color: "#666",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./static/images/home.png",
        selectedIconPath: "./static/images/home@selected.png",
        text: "首页"
      },
      // {
      //   pagePath: "pages/cart/index",
      //   iconPath: "./static/images/cart.png",
      //   selectedIconPath: "./static/images/cart@selected.png",
      //   text: "购物车"
      // },
      {
        pagePath: "pages/user/index",
        iconPath: "./static/images/my.png",
        selectedIconPath: "./static/images/my@selected.png",
        text: "个人"
      }
    ]
  },
  cloud: true
};
