const path = require("path");

const config = {
  projectName: "mall001",
  date: "2021-10-13",
  designWidth: 750,
  deviceRatio: {
    "640": 2.34 / 2,
    "750": 1,
    "828": 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  alias: {
    "@/vant": path.resolve(__dirname, "../src/components/vant-weapp")
  },
  copy: {
    patterns: [
      {
        from: "src/components/vant-weapp/wxs",
        to: "dist/components/vant-weapp/wxs"
      },
      {
        from: "src/components/vant-weapp/common/style",
        to: "dist/components/vant-weapp/common/style"
      },
      {
        from: "src/components/vant-weapp/common/index.wxss",
        to: "dist/components/vant-weapp/common/index.wxss"
      },
      {
        from: "src/components/vant-weapp/calendar/index.wxs",
        to: "dist/components/vant-weapp/calendar/index.wxs"
      },
      {
        from: "src/components/vant-weapp/calendar/utils.wxs",
        to: "dist/components/vant-weapp/calendar/utils.wxs"
      },
      {
        from: "src/components/vant-weapp/calendar/components/month/index.wxs",
        to: "dist/components/vant-weapp/calendar/components/month/index.wxs"
      },
      {
        from: "src/components/vant-weapp/area/index.wxs",
        to: "dist/components/vant-weapp/area/index.wxs"
      },
      {
        from: "src/components/vant-weapp/button/index.wxs",
        to: "dist/components/vant-weapp/button/index.wxs"
      },
      {
        from: "src/components/vant-weapp/calendar/index.wxs",
        to: "dist/components/vant-weapp/calendar/index.wxs"
      },
      {
        from: "src/components/vant-weapp/cell/index.wxs",
        to: "dist/components/vant-weapp/cell/index.wxs"
      },
      {
        from: "src/components/vant-weapp/checkbox/index.wxs",
        to: "dist/components/vant-weapp/checkbox/index.wxs"
      },
      {
        from: "src/components/vant-weapp/col/index.wxs",
        to: "dist/components/vant-weapp/col/index.wxs"
      },
      {
        from: "src/components/vant-weapp/config-provider/index.wxs",
        to: "dist/components/vant-weapp/config-provider/index.wxs"
      },
      {
        from: "src/components/vant-weapp/divider/index.wxs",
        to: "dist/components/vant-weapp/divider/index.wxs"
      },
      {
        from: "src/components/vant-weapp/dropdown-menu/index.wxs",
        to: "dist/components/vant-weapp/dropdown-menu/index.wxs"
      },
      {
        from: "src/components/vant-weapp/empty/index.wxs",
        to: "dist/components/vant-weapp/empty/index.wxs"
      },
      {
        from: "src/components/vant-weapp/field/index.wxs",
        to: "dist/components/vant-weapp/field/index.wxs"
      },
      {
        from: "src/components/vant-weapp/grid/index.wxs",
        to: "dist/components/vant-weapp/grid/index.wxs"
      },
      {
        from: "src/components/vant-weapp/grid-item/index.wxs",
        to: "dist/components/vant-weapp/grid-item/index.wxs"
      },
      {
        from: "src/components/vant-weapp/icon/index.wxs",
        to: "dist/components/vant-weapp/icon/index.wxs"
      },
      {
        from: "src/components/vant-weapp/image/index.wxs",
        to: "dist/components/vant-weapp/image/index.wxs"
      },
      {
        from: "src/components/vant-weapp/loading/index.wxs",
        to: "dist/components/vant-weapp/loading/index.wxs"
      },
      {
        from: "src/components/vant-weapp/nav-bar/index.wxs",
        to: "dist/components/vant-weapp/nav-bar/index.wxs"
      },
      {
        from: "src/components/vant-weapp/notice-bar/index.wxs",
        to: "dist/components/vant-weapp/notice-bar/index.wxs"
      },
      {
        from: "src/components/vant-weapp/notify/index.wxs",
        to: "dist/components/vant-weapp/notify/index.wxs"
      },
      {
        from: "src/components/vant-weapp/picker/index.wxs",
        to: "dist/components/vant-weapp/picker/index.wxs"
      },
      {
        from: "src/components/vant-weapp/picker-column/index.wxs",
        to: "dist/components/vant-weapp/picker-column/index.wxs"
      },
      {
        from: "src/components/vant-weapp/popup/index.wxs",
        to: "dist/components/vant-weapp/popup/index.wxs"
      },
      {
        from: "src/components/vant-weapp/progress/index.wxs",
        to: "dist/components/vant-weapp/progress/index.wxs"
      },
      {
        from: "src/components/vant-weapp/radio/index.wxs",
        to: "dist/components/vant-weapp/radio/index.wxs"
      },
      {
        from: "src/components/vant-weapp/row/index.wxs",
        to: "dist/components/vant-weapp/row/index.wxs"
      },
      {
        from: "src/components/vant-weapp/share-sheet/index.wxs",
        to: "dist/components/vant-weapp/share-sheet/index.wxs"
      },
      {
        from: "src/components/vant-weapp/share-sheet/options.wxs",
        to: "dist/components/vant-weapp/share-sheet/options.wxs"
      },
      {
        from: "src/components/vant-weapp/slider/index.wxs",
        to: "dist/components/vant-weapp/slider/index.wxs"
      },
      {
        from: "src/components/vant-weapp/stepper/index.wxs",
        to: "dist/components/vant-weapp/stepper/index.wxs"
      },
      {
        from: "src/components/vant-weapp/sticky/index.wxs",
        to: "dist/components/vant-weapp/sticky/index.wxs"
      },
      {
        from: "src/components/vant-weapp/switch/index.wxs",
        to: "dist/components/vant-weapp/switch/index.wxs"
      },
      {
        from: "src/components/vant-weapp/tabs/index.wxs",
        to: "dist/components/vant-weapp/tabs/index.wxs"
      },
      {
        from: "src/components/vant-weapp/tag/index.wxs",
        to: "dist/components/vant-weapp/tag/index.wxs"
      },
      {
        from: "src/components/vant-weapp/transition/index.wxs",
        to: "dist/components/vant-weapp/transition/index.wxs"
      },
      {
        from: "src/components/vant-weapp/tree-select/index.wxs",
        to: "dist/components/vant-weapp/tree-select/index.wxs"
      },
      {
        from: "src/components/vant-weapp/uploader/index.wxs",
        to: "dist/components/vant-weapp/uploader/index.wxs"
      }
    ],
    options: {}
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
