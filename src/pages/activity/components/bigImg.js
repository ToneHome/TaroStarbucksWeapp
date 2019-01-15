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