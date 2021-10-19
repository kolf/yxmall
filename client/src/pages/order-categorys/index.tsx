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
          <van-tab title="待使用" />
          <van-tab title="已完成" />
        </van-tabs>
        <van-empty description="暂无订单" />
      </View>
    );
  }
}
