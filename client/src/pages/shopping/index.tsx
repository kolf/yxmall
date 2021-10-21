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
      <View className="shopping page">
        <van-card
          num="1"
          price="68.00"
          desc="立式结构，迅速感应边充边玩双线圈设计，横竖摆放都能充"
          title="小米立式无线充电器 通用快充20W"
          thumb={goods}
        />

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
        <van-submit-bar price={68} buttonText="提交订单" />
      </View>
    );
  }
}
