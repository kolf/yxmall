import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { banner1, banner2, banner3 } from "../../static/images";

export default class Index extends React.Component {
  state = {};
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View className="goods-details">
        <View className="at-article">
          <View className="at-article__h1">这是一级标题这是一级标题</View>
          <View className="at-article__info">2017-05-07 这是作者</View>
          <View className="at-article__content">
            <View className="at-article__section">
              <View className="at-article__h2">这是二级标题</View>
              <View className="at-article__h3">这是三级标题</View>
              <View className="at-article__p">
                这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </View>
              <View className="at-article__p">
                这是文本段落。这是文本段落。
              </View>
              <Image
                className="at-article__img"
                src="https://jdc.jd.com/img/400x400"
                mode="widthFix"
              />
            </View>
          </View>
        </View>
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服" />
          <van-goods-action-icon icon="shop-o" text="店铺" />
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
      </View>
    );
  }
}
