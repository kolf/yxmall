import * as React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import "./style.scss";

interface Props {
  value: number;
  currentValue: number;
}

export default function Price(props: Props) {
  return (
    <View className="price">
      <Text style="color:#f00">¥</Text>
      <Text className="price__currentValue">{props.currentValue}</Text>
      <Text className="price__value">¥{props.value}</Text>
    </View>
  );
}
