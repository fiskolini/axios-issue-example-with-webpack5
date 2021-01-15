import React from "react"
import SwiperCore, {Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css';
import SimpleComponent from "../components/simple"

SwiperCore.use([Navigation, Pagination]);

class Home extends React.Component {
  render() {
    return (
      <div>
        Homepage
        <SimpleComponent/>
      </div>
    )
  }
}

export default Home;
