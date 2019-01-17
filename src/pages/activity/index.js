/*
 * File: index.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 3:05:58 pm
 * desc: activity detail page
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 3:50:33 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";
import { AdImg, ItemList, ShopCart } from './components';
import { getHttp } from '../../plugins/fetch';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      activity_id: '',
      imgList: [],
      itemList: [],
      shopCart: {
        goodsNum: 0,
        totalPrice: 0,
        postData: {
          itemList: []
        }
      }
    };
  }

  config = {
    navigationBarTitleText: ''
  };

  componentDidMount() {
    this.initData();
    Taro.setNavigationBarTitle(
      {
        title: this.state.title
      }
    );

    Taro.eventCenter.on('addGood', (item, index) => {
      this.add(item, index);
    });

    Taro.eventCenter.on('reduceGood', (item, index) => {
      this.reduce(item, index);
    })
  }

  initData() {
    this.setState(this.$router.params);
    getHttp('/getAdImg', { activity_id: this.$router.params.activity_id }).then(rs => {
      this.setState({
        imgList: rs.data.imgList
      })
    });
    getHttp('/itemList', { activity_id: this.$router.params.activity_id }).then(rs => {
      rs.data.itemList.forEach(element => {
        element['num'] = 0;
      });
      this.setState({
        itemList: rs.data.itemList
      });
    })
  }

  add(item, index) {
    let itemList = this.state.itemList;
    itemList[index].num++;
    this.setState({
      itemList: itemList
    });
    this.calcShopCart();
  }

  reduce(item, index) {
    let itemList = this.state.itemList;
    if (itemList[index].num > 0) {
      itemList[index].num--;
      this.setState({
        itemList: itemList
      });
    }
    this.calcShopCart();
  }

  calcShopCart() {
    let goodsNum = 0, totalPrice = 0, itemList = [];
    this.state.itemList.map(item => {
      if (item.num > 0) {
        goodsNum = goodsNum + item.num;
        totalPrice = totalPrice + item.num * item.itemPrice;
        itemList.push({
          itemId: item.itemId,
          num: item.num
        })
      }
    })
    this.setState({
      shopCart: {
        goodsNum: goodsNum,
        totalPrice: totalPrice,
        postData: {
          itemList: itemList
        }
      }
    })
  }

  render() {
    return <View>
      <AdImg imgList={this.state.imgList}></AdImg>
      <ItemList itemList={this.state.itemList}></ItemList>
      <ShopCart shopCart={this.state.shopCart}></ShopCart>
    </View>;
  }
}
