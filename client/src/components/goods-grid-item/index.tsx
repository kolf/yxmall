import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import Price from "../price";
import "./style.scss";
import { goods } from "../../static/images";

export default class Index extends React.PureComponent {
  render() {
    return (
      <View className="goods-grid-item">
        <Navigator
          className="goods-grid-item__feature"
          url={`/pages/goods-details/index?id=111`}
        >
          <Image className="img" src={goods} />
        </Navigator>
        <View style="padding:12rpx">
          <View>
            <Text>小米立式无线充电器 通用快充20W</Text>
          </View>
          <Price value={99} currentValue={68} />
        </View>
      </View>
    );
  }
}
