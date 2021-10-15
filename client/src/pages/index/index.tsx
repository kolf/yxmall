import * as React from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Navigator,
  Swiper,
  SwiperItem,
  Image
} from "@tarojs/components";
import GoodsItem from "../../components/goodsItem";
import { banner1, banner2, banner3 } from "../../static/images";
import "./style.scss";

import { AtSearchBar, AtGrid, AtDivider } from "taro-ui";

export default class Index extends React.PureComponent {
  state = {
    value: ""
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleSearch = value => {};

  render() {
    return (
      <View className="index page">
        <AtSearchBar value={this.state.value} onChange={this.handleSearch} />

        <Swiper
          className="index__banner"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem className="index__banner-item">
            <Image src={banner1} className="img" />
          </SwiperItem>
          <SwiperItem className="index__banner-item">
            <Image src={banner2} className="img" />
          </SwiperItem>
          <SwiperItem className="index__banner-item">
            <Image src={banner3} className="img" />
          </SwiperItem>
        </Swiper>

        <AtGrid
          hasBorder={false}
          columnNum={4}
          data={[
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
              value: "美食"
            },
            {
              image:
                "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
              value: "酒店"
            },
            {
              image:
                "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
              value: "玩乐"
            },
            {
              image:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
              value: "其它"
            }
          ]}
        />
        <View className="text-center pad">
          <Text>限时秒杀</Text>
        </View>
        <View>
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
          <GoodsItem />
        </View>
      </View>
    );
  }
}
