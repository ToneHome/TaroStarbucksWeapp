/*
 * File: shoppingCart.js
 * Project: myApp
 * File Created: Wednesday, 16th January 2019 2:55:14 pm
 * desc: shopping cart
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 3:50:20 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component, showActionSheet } from "@tarojs/taro";
import { View } from "@tarojs/components";
import './shopCart.less';

export default class ShopCart extends Component {
  constructor(props) {
    super(props);
  }
  toPay() {
    Taro.requestPayment(
      {
        'timeStamp': '',
        'nonceStr': '',
        'package': '',
        'signType': 'MD5',
        'paySign': ''
      }).then(rs => { }).catch(rs => { console.log(rs); })
  }
  render() {
    return (
      <View className="shop-cart">
        <View className="shop-cart-detail">
          <View className="shop-cart-num">
            {this.props.shopCart.goodsNum} 份礼品
          </View>
          <View className="shop-cart-price">
            ￥{this.props.shopCart.totalPrice}
          </View>
        </View>
        <View onClick={this.toPay} className={`shop-cart-btn ${this.props.shopCart.goodsNum > 0 ? 'active' : ''}`}>
          购买
        </View>
      </View>
    )
  }
}
