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
            src="http://ddbuy.7-orange.cn/img/grey.fb4a97dd.jpg"
          />
          <View className="text-center" style="padding-top:12rpx">
            <Text style="padding-top:12rpx">微信昵称</Text>
          </View>
        </View>
        <van-cell-group border={false} inset>
          <van-cell icon="completed" title="我的订单" isLink />
          <View className="bg-light">
            <van-grid clickable columnNum={4} border={false}>
              <van-grid-item
                link-type="navigateTo"
                url="/pages/order-categorys/index"
                icon="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
                text="全部订单"
              />
              <van-grid-item
                link-type="navigateTo"
                url="/pages/order-categorys/index"
                icon="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
                text="待使用"
              />
              <van-grid-item
                link-type="navigateTo"
                url="/pages/order-categorys/index"
                icon="https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                text="已完成"
              />
            </van-grid>
          </View>
        </van-cell-group>

        <View className="gap-top">
          <van-cell-group inset border={false}>
            <van-cell
              icon="chat-o"
              openType="contact"
              title="在线客服"
              isLink
            />
            <van-cell
              icon="shop-o"
              title="联系我们"
              value="400-800400"
              isLink
            />
          </van-cell-group>
        </View>
      </View>
    );
  }
}
