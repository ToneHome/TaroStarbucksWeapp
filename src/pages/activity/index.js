import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";
import { AdImg } from './components';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      activity_id: ''
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
    )
  }
  componentWillMount() {
    this.setState(this.$router.params)
  }

  render() {
    return <View>
      <AdImg></AdImg>
    </View>;
  }
}
