import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import ActivityItem from './activityItem'
import './activity.less';

export default class ActivityList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='activity'>
        {this.props.activityList.map((item,index) => {
          return <ActivityItem item={item} key={index}> </ActivityItem>
        })}
      </View>
    );
  }
}
