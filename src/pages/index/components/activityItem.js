import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import "./activityItem.less";

export default class ActivityItem extends Component {
  constructor(props) {
    super(props);
  }
  goDetail() {
    Taro.navigateTo({
      url: `/pages/activity/index?activity_id=${this.props.item.activity_id}&title=${this.props.item.text}`
    });
  }
  render() {
    return (
      <View className='activity-item' onClick={this.goDetail}>
        <Image className='activity-img' src={this.props.item.imgUrl} />
        <Text className='activity-title'>{this.props.item.text}</Text>
      </View>
    );
  }
}
