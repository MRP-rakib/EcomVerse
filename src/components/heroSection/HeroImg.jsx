import React, { useRef } from 'react';
import Slider from 'react-slick';
import Banner from '../../assets/images/banner.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [Banner, Banner, Banner];

function HeroImg() {
  const sliderRef = useRef();
  const settings = {
    dots: false, // Hide default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    swipe: true,
    beforeChange: (oldIndex, newIndex) => setCurrent(newIndex),
  };
  const [current, setCurrent] = React.useState(0);

  // Sync current slide on manual swipe
  const handleAfterChange = (idx) => setCurrent(idx);

  return (
    <div className="w-full pt-5 lg:pt-10 relative overflow-hidden">
      <Slider ref={sliderRef} {...settings} afterChange={handleAfterChange} initialSlide={0}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              className="w-full object-cover rounded-xl h-[220px] md:h-[350px] lg:h-[420px] transition-all duration-500"
              src={img}
              alt="banner"
            />
          </div>
        ))}
      </Slider>
      {/* Custom Pagination - rounded and over the image bottom */}
      <style>{`
        .custom-pagination-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin: 0 6px;
          background: #e5e7eb;
          border: none;
          cursor: pointer;
          transition: background 0.3s, width 0.3s, height 0.3s;
        }
        .custom-pagination-dot.active {
          background: #DB4444;
          width: 6px;
          height: 6px;
          box-shadow: 0 2px 8px #db444455;
        }
      `}</style>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex justify-center gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              sliderRef.current.slickGoTo(idx);
            }}
            className={`custom-pagination-dot${current === idx ? ' active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroImg;