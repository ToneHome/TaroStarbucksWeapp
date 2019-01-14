import Taro, { Component } from "@tarojs/taro";
import { View,Image } from "@tarojs/components";
import './adImg.less';


class BigImg extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View>
                <Image src={this.props.img}></Image>
            </View>
        )
    }
}

class ImgList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg:0
        }
    }

    render(){
        return (
            <View>
                123
            </View>
        )
    }

}

export default class AdImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adImgList:[]
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <View>123</View>
        )
    }
}
