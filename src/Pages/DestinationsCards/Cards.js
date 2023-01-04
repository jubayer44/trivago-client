import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination  } from "swiper";

const Cards = () => {

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
            <SwiperSlide>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
            
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
            
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
            
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
            
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
            
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='w-[272px] h-[328px]'>
            <div>
               <img className='rounded-xl' src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_258,q_auto,w_258/dummy.jpeg" alt="" />
            </div>
            <div>
                <h4 className="font-bold mt-1">Hotels in Mumbai</h4>
                <div className='flex gap-2 text-sm mt-1'>
                <p>10,111 Hotels</p>
                <strong>Avg ₹3,675</strong>
                </div>
            </div>
            
        </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Cards;