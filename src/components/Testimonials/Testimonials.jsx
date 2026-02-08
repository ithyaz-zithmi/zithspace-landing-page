import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { StarFilled } from '@ant-design/icons';
import ceoimg from "../../assets/ceo.jpeg"
import send from "../../assets/send.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';

const renderStars = (count) => {
  return Array.from({ length: count }).map((_, index) => (
    <StarFilled key={index} className={styles.starIcon} />
  ));
};


const Testimonials = () => {
  const reviews = [
    // {
    //   id: 1,
    //   name: "Alex Johnson",
    //   role: "CEO at TechFlow",
    //   stars: 5,
    //   text: "ZithSpace has completely transformed how our team manages projects. The interface is intuitive and the features are top-notch.",
    //   avatar: "👤" 
    // },
    // {
    //   id: 2,
    //   name: "Sarah Chen",
    //   role: "Operations Manager",
    //   stars: 5,
    //   text: "The best HRMS tool we've used. It's simplified our payroll and attendance tracking significantly. Highly recommended!",
    //   avatar: "👤"
    // },
    {
      id: 3,
      name: "Raj Kumar",
      role: "CEO of J2B Global",
      stars: 4,
      text: "Excellent support and a robust platform. It scales perfectly with our business growth. A true all-in-one solution.",
      avatar: ceoimg
    },
    // {
    //   id: 4,
    //   name: "Jessica Lee",
    //   role: "Product Designer",
    //   stars: 5,
    //   text: "Clean UI and very powerful backend. It has saved us countless hours in administrative tasks every week.",
    //   avatar: "👤"
    // }
  ];

  // Helper function to render stars


  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>Testimonials</span>
        <h2 className={styles.title}>What Our Clients Say About <span className={styles.highlight}>Zithtech</span></h2>
      </div>

<Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={reviews.length === 1 ? 1 : 1}
  centeredSlides={reviews.length === 1}
  pagination={reviews.length > 1 ? { clickable: true } : false}
  autoplay={reviews.length > 1 ? { delay: 3000 } : false}
  breakpoints={{
    768: { slidesPerView: reviews.length === 1 ? 1 : 2 },
    1024: { slidesPerView: reviews.length === 1 ? 1 : 3 },
  }}
  className={`${styles.swiperWrapper} ${
    reviews.length === 1 ? styles.singleSlide : ""
  }`}
>

        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className={styles.card}>
              <div className={styles.starsRow}>
                {renderStars(review.stars)}
              </div>
              <p className={styles.quote}>"{review.text}"</p>
              <div className={styles.authorArea}>
                <div className={styles.avatar}>
  <img src={review.avatar} alt={review.name} />
</div>

                <div className={styles.info}>
                  <h4 className={styles.name}>{review.name}</h4>
                  <p className={styles.role}>{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;