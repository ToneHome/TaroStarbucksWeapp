/*
 * File: itemList.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 5:01:08 pm
 * desc: activity goods list 
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 3:41:47 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * ----- 
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View,Image } from "@tarojs/components";
import './itemList.less';
import Item from '../item/item'

export default class itemList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View className="item-list">
        <View className="item-list-title">
          选择商品:
        </View>
        {
          this.props.itemList.map((item,index) => {
              return (
                <Item  item={item}></Item>
              )
          })
        }
      </View>
    )
  }
}
