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

import Taro, { Component ,Events} from "@tarojs/taro";
import { View, Image, Button } from "@tarojs/components";
import "./item.less";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  addItem(index,item,e){
    e.preventDefault();
    // console.log(index,item);
    const events = new Events();
    Taro.eventCenter.trigger('addGood', item,index);
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
          <Button
            size="mini"
            className={`reduce num-btn ${
              this.props.item.num == 0 ? "hide" : ""
            }`}
            type="primary"
          >
            -
          </Button>
          <View
            className={`good-num ${this.props.item.num == 0 ? "hide" : ""}`}
          >
            {this.props.item.num}
          </View>
          <Button
            size="mini"
            className="add num-btn"
            onClick={this.addItem.bind(this,this.props.index,this.props.item)}
            type="primary"
          >
            +
          </Button>
        </View>
      </View>
    );
  }
}
