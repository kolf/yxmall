import React, { Component } from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

import Empty from "../../components/empty/index";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Empty />
      </View>
    );
  }
}
