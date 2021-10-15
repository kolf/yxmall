import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./style.scss";
import { AtButton } from "taro-ui";
import { goods } from "../../static/images";

export default class Index extends React.PureComponent {
  render() {
    return (
      <View className="goods">
        <View className="at-row">
          <View>
            <Image style="height:320rpx;width:320rpx" src={goods} />
          </View>
          <View className="at-col" style="white-space:normal">
            <View className="goods-info">
              <View className="goods-title">
                不弯腰不脏手 洗脱一体免手洗懒人拖把
              </View>
              <View className="goods-desc">100</View>
              <View className="goods-buttons">
                <AtButton size="small" type="primary">
                  马上抢购
                </AtButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
