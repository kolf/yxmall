import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="user page">
        <View className="text-center" style="padding:48rpx">
          <van-image
            cover
            round
            width="200rpx"
            height="200rpx"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <View className="text-center" style="padding-top:12rpx">
            <Text style="paddingTop:12rpx">微信昵称</Text>
          </View>
        </View>

        <van-cell-group inset>
          <van-cell title="单元格" is-link />
          <van-cell title="单元格" is-link />
        </van-cell-group>

        <View className="gap-top">
          <van-cell-group inset>
            <van-cell title="单元格" is-link />
            <van-cell title="单元格" is-link />
          </van-cell-group>
        </View>
      </View>
    );
  }
}
