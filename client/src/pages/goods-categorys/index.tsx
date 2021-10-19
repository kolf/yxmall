import * as React from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./style.scss";

export default class Index extends React.Component {
  state = {
    active: "1"
  };
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View className="goods-categorys page">
        <van-tabs active={this.state.active}>
          <van-tab title="餐饮" />
          <van-tab title="住宿" />
          <van-tab title="玩乐" />
          <van-tab title="健身" />
          <van-tab title="其它" />
        </van-tabs>
        <van-empty description="暂无商品" />
      </View>
    );
  }
}
