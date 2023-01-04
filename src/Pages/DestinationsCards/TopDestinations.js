import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const TopDestinations = () => {
  const [destinations, setDestinations] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_url}/topDestinations`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 mx-auto my-10"></div>
  }

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      slidesPerGroup={3}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {destinations?.map((city) => {
        return (
          <SwiperSlide key={city?._id}>
            <Link to={`/${city?._id}`} className="w-[272px] h-[328px]">
              <div>
                <img className="rounded-xl" src={city.photo} alt="" />
              </div>
              <div>
                <h4 className="font-bold mt-1">{city.name}</h4>
                <div className="flex gap-2 text-sm mt-1">
                  <p>{city.address}</p>
                  <strong>Avg {city.price}</strong>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TopDestinations;
