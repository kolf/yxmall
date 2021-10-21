import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import Price from "../price";
import "./style.scss";
import { goods } from "../../static/images";

export default class Index extends React.PureComponent {
  render() {
    return (
      <View className="goods">
        <Navigator
          className="goods-image"
          url={`/pages/goods-details/index?id=111`}
        >
          <Image style="height:320rpx;width:320rpx" src={goods} />
        </Navigator>

        <View className="goods-info">
          <View className="goods-title">小米立式无线充电器 通用快充20W</View>

          <View style="padding-top:36rpx">
            <Price value={99} currentValue={68} />
          </View>
          <View className="goods-buttons">
            <van-button
              size="small"
              type="danger"
              block
              onClick={Taro.navigateTo.bind(this, {
                url: "/pages/shopping/index"
              })}
            >
              立即购买
            </van-button>
          </View>
        </View>
      </View>
    );
  }
}
