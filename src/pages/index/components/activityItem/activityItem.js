/*
 * File: activityItem.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 3:05:59 pm
 * desc: activity item in list
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 4:35:10 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./activityItem.less";

export default class ActivityItem extends Component {
  constructor(props) {
    super(props);
  }
  goDetail() {
    Taro.navigateTo({
      url: `/pages/activity/index?activity_id=${this.props.item.activity_id}&title=${this.props.item.text}`
    });
  }
  render() {
    return (
      <View className='activity-item' onClick={this.goDetail}>
        <Image className='activity-img' src={this.props.item.imgUrl} />
        <Text className='activity-title'>{this.props.item.text}</Text>
      </View>
    );
  }
}
