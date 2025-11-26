import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      img: '/pic/faju.jpg',
      name: 'faju',
      description: '"Faju, a skilled interior designer, blends creativity with technical expertise to craft captivating, personalized spaces. With meticulous planning and a keen eye for detail, Faju ensures harmony between functionality and style, optimizing spatial efficiency to create environments that reflect clients\' lifestyles."'
    },
    {
      img: '/pic/shahama.jpg',
      name: 'shaham',
      description: '"Meet Shaham, a skilled plastic engineer dedicated to innovating and designing high-quality plastic products. With expertise in polymer science and engineering, Shaham transforms concepts into sustainable solutions that meet industry standards and exceed client expectations."'
    },
    {
      img: '/img/testimonial3.png',
      name: 'Jessica Park',
      description: 'A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone.'
    }
  ];

  return (
    <section className="testimonial section">
      <span className="section__subtitle">My clients say</span>
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container container"
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial__card">
            <img src={testimonial.img} alt="" className="testimonial__img" />
            <h3 className="testimonial__name">{testimonial.name}</h3>
            <p className="testimonial__description">{testimonial.description}</p>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
