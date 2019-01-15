import Taro, { Component } from "@tarojs/taro";
import { View,Image } from "@tarojs/components";
import './adImg.less';

import BigImg from './bigImg.js';


export default class AdImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg:0
        }
    }
    render() {
        return (
            <View className="img-slider">
                <BigImg img={this.props.imgList[this.state.currentImg].bigImg}></BigImg>
                <View className="img-list">
                    {
                        this.props.imgList.map(item => {
                            return (
                                <View className="img-item">
                                    <Image src={item.smImg}></Image>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}
