import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  config = {
    navigationBarTitleText: ''
  };

  componentDidMount () {
      Taro.setNavigationBarTitle(
          {
              title:this.state.title
          }
      )
  }
  
  render() {
    return <View>132</View>;
  }
}
