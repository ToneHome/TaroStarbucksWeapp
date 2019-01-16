/*
 * File: bigImg.js
 * Project: myApp
 * File Created: Tuesday, 15th January 2019 5:33:50 pm
 * desc: selected Img
 * Author: Tone Lee (tonelee522@outlook.com)
 * -----
 * Last Modified: Wednesday, 16th January 2019 3:49:29 pm
 * Modified By: Tone Lee (tonelee522@outlook.com)
 * -----
 * Copyright 2018 - 2019 Tone Lee, MIT
 */

import Taro, { Component } from "@tarojs/taro";
import { View,Image } from "@tarojs/components";
import './bigImg.less';

export default class BigImg extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View className="big-img">
                <Image src={this.props.img}></Image>
            </View>
        )
    }
}