/*
 * File: adImg.js
 * Project: myApp
 * File Created: Monday, 14th January 2019 4:58:57 pm
 * desc: ad swipe
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 3:48:55 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './adImg.less';

import BigImg from './bigImg.js';


export default class AdImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    }
  }
  componentDidMount() {

  }
  selectImg(index) {
    this.setState({
      currentImg: index
    })
  }
  render() {
    let img;
    if (this.props.imgList[this.state.currentImg]) {
      img = <BigImg img={this.props.imgList[this.state.currentImg].smImg}></BigImg>
    }
    else {
      img = <BigImg></BigImg>
    }
    return (
      <View className="img-slider">
        {img}
        <View className="img-swip">
          <View className="img-list" >
            {
              this.props.imgList.map((imgItem, index) => {
                return (
                  <View className={index === this.state.currentImg ? 'active img-item' : 'img-item'} onClick={this.selectImg.bind(this, index)} key={index}>
                    <Image src={imgItem.smImg}></Image>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
}
