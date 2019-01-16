
/*
 * File: activityList.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 3:05:59 pm
 * desc:  activity list  in  index page
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 4:35:26 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import ActivityItem from '../activityItem/activityItem'
import './activityList.less';

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='activity'>
        {this.props.activityList.map((activItem,index) => {
          return <ActivityItem item={activItem} key={index}> </ActivityItem>
        })}
      </View>
    );
  }
}
