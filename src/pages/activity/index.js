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
import { AdImg,ItemList } from './components';
import { getHttp } from '../../plugins/fetch';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      activity_id: '',
      imgList: [],
      itemList:[]
    };
  }

  config = {
    navigationBarTitleText: ''
  };

  componentDidMount() {
    Taro.setNavigationBarTitle(
      {
        title: this.state.title
      }
    );
  }
  componentWillMount() {
    this.setState(this.$router.params);
    getHttp('/getAdImg', { activity_id: this.$router.params.activity_id }).then(rs => {
      this.setState({
        imgList: rs.data.imgList
      })
    });
    getHttp('/itemList',{ activity_id: this.$router.params.activity_id }).then(rs => {
      rs.data.itemList.forEach(element => {
        element['num'] = 0;
      });
      this.setState({
        itemList:rs.data.itemList
      });
    })
  }

  render() {
    return <View>
      <AdImg imgList={this.state.imgList}></AdImg>
      <ItemList itemList={this.state.itemList}></ItemList>
    </View>;
  }
}
