import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Block } from "@tarojs/components";
import { AtButton } from "taro-ui";

export default class Index extends Component {
  state = {
    context: {}
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        this.setState({
          context: res.result
        });
      });
  };

  render() {
    return <AtButton type="primary">获取登录云函数</AtButton>;
  }
}
