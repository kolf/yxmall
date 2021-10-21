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
import GoodsItem from "../../components/goods-item/index";
import { banner1, banner2, banner3 } from "../../static/images";
import "./style.scss";

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
        <van-search
          value={this.state.value}
          placeholder="请输入搜索关键词"
          show-action
        />

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

        <van-grid clickable columnNum={5} border={false}>
          <van-grid-item
            link-type="navigateTo"
            url="/pages/goods-categorys/index"
            icon="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
            text="餐饮"
          />
          <van-grid-item
            link-type="navigateTo"
            url="/pages/goods-categorys/index"
            icon="https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png"
            text="住宿"
          />
          <van-grid-item
            link-type="navigateTo"
            url="/pages/goods-categorys/index"
            icon="https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
            text="玩乐"
          />
          <van-grid-item
            link-type="navigateTo"
            url="/pages/goods-categorys/index"
            icon="https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
            text="健身"
          />
          <van-grid-item
            link-type="navigateTo"
            url="/pages/goods-categorys/index"
            icon="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
            text="其它"
          />
        </van-grid>

        <View>
          <van-divider contentPosition="center">限时秒杀</van-divider>
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
