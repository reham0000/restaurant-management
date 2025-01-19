import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subHeading={'From 11am to 10 pm'}
          heading={'ORDER ONLINE'}
        ></SectionTitle>
        {/* <p className="text-lg text-center mt-10 text-yellow-400 mb-3">---From 11am to 10 pm---</p>
        <hr className="w-1/4 border-gray-300 mx-auto mb-5 border-2"></hr>
        <h1 className="text-black text-center text-4xl mb-3">ORDER ONLINE</h1>
        <hr className="w-1/4 border-gray-300 mx-auto mb-10 border-2"></hr> */}

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-24">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-24">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-24">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-24">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-4xl uppercase text-center text-white -mt-16">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
