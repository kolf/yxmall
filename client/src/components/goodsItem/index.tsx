import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import "./style.scss";
import { goods } from "../../static/images";

export default class Index extends React.PureComponent {
  render() {
    return (
      <View className="goods">
        <View className="goods-image">
          <Navigator url={`/pages/goods-details/index?id=111`}>
            <Image src={goods} />
          </Navigator>
        </View>

        <View className="goods-info">
          <View className="goods-title">
            不弯腰不脏手 洗脱一体免手洗懒人拖把
          </View>

          <View className="goods-price">
            <Text className="goods-price-name">优惠价格</Text>
            <Text className="goods-price-number">68.00</Text>
          </View>
          <View className="goods-buttons">
            <van-button size="small" type="danger" block>
              立即购买
            </van-button>
          </View>
        </View>
      </View>
    );
  }
}
