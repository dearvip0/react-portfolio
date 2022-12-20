import React from "react";

// import required modules
import { Pagination } from "swiper";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

import "./testimonials.css";
import testimonials from "./data";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testmonials from some of my clients</p>
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
