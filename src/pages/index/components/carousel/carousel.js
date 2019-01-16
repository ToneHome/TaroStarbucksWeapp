/*
 * File: carousel.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 3:05:59 pm
 * desc: carousel  in index page
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 4:35:52 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { Swiper,SwiperItem, Image } from "@tarojs/components";
import "./carousel.less";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#fff'
        indicatorActiveColor='green'
        circular
        indicatorDots
        autoplay
      >
        {this.props.imgList.map((imgItem,index) => {
          return (
            <SwiperItem key={imgItem.activity_id}>
              <Image src={imgItem.imgUrl} />
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  }
}
