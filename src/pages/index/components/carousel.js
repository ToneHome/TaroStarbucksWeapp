import Taro, { Component } from "@tarojs/taro";
import { Swiper,SwiperItem, Image } from "@tarojs/components";
import "./carousel.less";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#fff'
        indicatorActiveColor='green'
        circular
        indicatorDots
        autoplay
      >
        {this.props.imgList.map((item,index) => {
          return (
            <SwiperItem key={index}>
              <Image src={item} />
            </SwiperItem>
          );
        })}
      </Swiper>
    );
  }
}
