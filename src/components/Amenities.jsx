import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Grid } from 'swiper/modules'; // import Grid module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid'; // import grid css

import library from "../assets/library.webp";
import movietheatre from "../assets/movietheatre.webp";
import olympicpool from "../assets/olympic-pool.webp";
import squashcourt from "../assets/squashcourt.webp";
import tenniscourt from "../assets/tenniscourt.webp";
import bowlingalley from "../assets/bowlingalley.webp";
import meditationroom from "../assets/meditationroom.webp";
import musicroom from "../assets/musicroom.webp";
import rockclimbing from "../assets/rockclimbing.webp";
import sunkenbarwithpool from "../assets/sunkenbarwithpool.webp";
import virtualgamingarea from "../assets/virtualgamingarea.webp";
import kidsfunpool from "../assets/kidsfunpool.webp";

const Amenities = () => {

  const amenitiesList = [
    { img: library, title: "Library" },
    { img: movietheatre, title: "Movie Theatre" },
    { img: olympicpool, title: "Olympic Pool" },
    { img: squashcourt, title: "Squash Court" },
    { img: tenniscourt, title: "Tennis Court" },
    { img: bowlingalley, title: "Bowling Alley" },
    { img: meditationroom, title: "Meditation Room" },
    { img: musicroom, title: "Music Room" },
    { img: rockclimbing, title: "Rock Climbing" },
    { img: sunkenbarwithpool, title: "Sunken Bar with Pool" },
    { img: virtualgamingarea, title: "Virtual Gaming Area" },
    { img: kidsfunpool, title: "Kids Fun Pool" },
  ];

  return (
    <div className="custom-card container-fuild shadow-sm section">
      <div className="row mb-4 align-items-center">
        <div className="col-md-8">
          <h4 className="head">Amenities of Sai World Empire</h4>
        </div>
        <div className="col-md-4 text-end">
          <button className="btn btn-primary">Download Amenities</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Grid]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={3}
        grid={{ rows: 2, fill: "row" }} // 💥 key point - 2 rows
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, grid: { rows: 2 } },
          768: { slidesPerView: 2, grid: { rows: 2 } },
          992: { slidesPerView: 3, grid: { rows: 2 } },
        }}
      >
        {amenitiesList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="position-relative overflow-hidden rounded-4" style={{ height: '250px' }}>
              <img
                src={item.img}
                alt={item.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute bottom-0 w-100 text-white bg-dark bg-opacity-50 text-center py-2"
                style={{ fontSize: "14px", fontWeight: "600" }}
              >
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Amenities;
