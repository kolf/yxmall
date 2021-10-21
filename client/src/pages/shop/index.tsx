import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import GoodsGridList from "../../components/goods-grid-list";
// import GoodsGridItem from "../../components/goods-grid-item";
import { goods, goodsDetails } from "../../static/images";
import "./style.scss";

export default class Index extends React.Component {
  state = {};
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <View className="shop page">
        <View className="shop__header">
          <Image mode="center" src={goods} style="width:100vw;height:60vw" />
        </View>
        <View style="margin-top:-120rpx">
          <van-cell-group inset>
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
          <van-divider contentPosition="center">全部商品</van-divider>
        </View>
        <View>
          <GoodsGridList />
        </View>
      </View>
    );
  }
}
