import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import Price from "../../components/price";
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
            <Price value={99} currentValue={68} />
          </View>
        </View>
        <View className="gap-top">
          <van-cell-group>
            <van-cell
              icon="manager-o"
              title="商家名称"
              value="小米之家旗舰店"
              isLink
            />
            <van-cell
              icon="service-o"
              title="商家电话"
              value="18611123456"
              isLink
            />
            <van-cell
              icon="guide-o"
              title="商家地址"
              value="北京市海淀区上地十街10号百度大厦"
              isLink
            />
          </van-cell-group>
        </View>

        <View style="padding-left:24rpx;padding-right:24rpx">
          <van-divider contentPosition="center">商品详情</van-divider>
        </View>
        <View className="goods-details__body">
          <Image style="width:100vw;height:1280rpx" src={goodsDetails}></Image>
        </View>
        <van-goods-action>
          <van-goods-action-icon
            openType="contact"
            // onClick={Taro.navigateTo.bind(this, { openType: "contact" })}
            icon="chat-o"
            text="客服"
          />
          <van-goods-action-icon
            onClick={Taro.navigateTo.bind(this, { url: "/pages/shop/index" })}
            icon="shop-o"
            text="店铺"
          />
          <van-goods-action-button
            onClick={Taro.navigateTo.bind(this, {
              url: "/pages/shopping/index"
            })}
            type="danger"
            text="立即购买"
          />
        </van-goods-action>
      </View>
    );
  }
}
