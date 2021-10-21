import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import GoodsGridItem from "../goods-grid-item";
import "./style.scss";

interface Props {}
interface State {}

export default class index extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <View style="padding-left:24rpx;padding-right:24rpx">
        <van-row gutter="6">
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
          <van-col span="12">
            <GoodsGridItem />
          </van-col>
        </van-row>
      </View>
    );
  }
}
