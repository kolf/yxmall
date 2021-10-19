import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import { goods, goodsDetails } from "../../static/images";
import "./style.scss";

export default class Index extends React.Component {
  state = {};
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View className="goods-details page">
        <View className="goods-details__header">
          <Image src={goods} style="width:100vw;height:100vw" />
          <View className="goods-details__title pad">
            <View className="goods-details__title-name">
              小米立式无线充电器 通用快充20W
            </View>
            <View className="goods-details__title-desc">
              立式结构，迅速感应边充边玩双线圈设计，横竖摆放都能充
            </View>
            <View className="goods-details__title-price">
              <Text>优惠价 ¥68</Text>
            </View>
          </View>
        </View>
        <View className="gap-top">
          <van-cell-group>
            <van-cell
              icon="manager-o"
              title="商家名称"
              value="小米之家旗舰店"
              is-link
            />
            <van-cell
              icon="service-o"
              title="商家电话"
              value="18611123456"
              is-link
            />
            <van-cell
              icon="guide-o"
              title="商家地址"
              value="北京市海淀区上地十街10号百度大厦"
              is-link
            />
          </van-cell-group>
        </View>
        <View className="text-center pad">
          <Text>商品详情</Text>
        </View>
        <View className="goods-details__body">
          <Image style="width:100vw;height:1280rpx" src={goodsDetails}></Image>
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
