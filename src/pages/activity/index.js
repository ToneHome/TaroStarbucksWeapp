import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";
import { AdImg } from './components';
import { getHttp } from '../../plugins/fetch';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      activity_id: '',
      imgList: []
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
    this.setState(this.$router.params);
    getHttp('/getAdImg', { activity_id: this.$router.params.activity_id }).then(rs => {
      console.log(rs);
      this.setState({
        imgList: rs.data.imgList
      })

    })

  }

  render() {
    return <View>
      <AdImg imgList={this.state.imgList}></AdImg>
    </View>;
  }
}
