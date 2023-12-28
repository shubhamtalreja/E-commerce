import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const Carosel = () => {
    const items = [
        <img  src='https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/3/_/3_13.jpg'/>,
        <img  src='https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/4/_/4_12.jpg'/>,
        <img  src='https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/_/1_8.jpg'/>,

    ];
  return (
      <div>

          <AliceCarousel
              autoPlayInterval={1000}
              items={items}
              disableButtonsControls
              mouseTracking
              infinite
              autoPlay
          /></div>
  )
}

export default Carosel