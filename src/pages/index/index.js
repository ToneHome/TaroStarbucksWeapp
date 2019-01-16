/*
 * File: index.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 3:05:59 pm
 * desc: index page
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 4:34:49 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import { ActivityList, Carousel } from "./components";
import { getHttp } from '../../plugins/fetch';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { imgList: [], activityList: [] };
  }

  config = {
    navigationBarTitleText: '首页'
  }


  componentWillMount() { }

  componentDidMount() {
    getHttp('/bannerImgList').then(rs => {
      this.setState({
        imgList: rs.data.imgList
      });
    });
    getHttp('/activityList').then(rs => {
      this.setState({
        activityList: rs.data.activityList
      });
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Carousel imgList={this.state.imgList}></Carousel>
        <Text className='title'>咖啡+祝福 即刻表心意</Text>
        <ActivityList activityList={this.state.activityList}></ActivityList>
        <View className='history'>
          <View className='history-btn'></View>
          <Text>购买历史</Text>
        </View>
      </View>
    )
  }
}

