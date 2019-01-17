/*
 * File: item.js
 * Project: myApp
 * File Created: Wednesday, 16th January 2019 4:39:49 pm
 * desc: item props and Buy controller
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 4:56:45 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import "./item.less";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  addItem(item,index,e){
    e.preventDefault();
    Taro.eventCenter.trigger('addGood', item,index);
  }

  reduceItem(item,index,e){
    e.preventDefault();
    Taro.eventCenter.trigger('reduceGood', item,index);
  }

  render() {
    return (
      <View className="good-item">
        <Image className="good-img" src={this.props.item.itemImg} />
        <View className="good-props">
          <View className="good-title">{this.props.item.itemTitle}</View>
          <View className="good-price">￥{this.props.item.itemPrice}</View>
        </View>
        <View className="good-ctrl">
          <View 
            className={`reduce num-btn ${
              this.props.item.num == 0 ? "hide" : ""
            }`}
            onClick={this.reduceItem.bind(this,this.props.item,this.props.index)}
            > 
           -
          </View>
          <View
            className={`good-num ${this.props.item.num == 0 ? "hide" : ""}`}
          >
            {this.props.item.num}
          </View>

          <View
            className="add num-btn"
            onClick={this.addItem.bind(this,this.props.item,this.props.index)}
          >
            +
          </View>
        </View>
      </View>
    );
  }
}
