import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import banner1 from "../assets/Banner/pexels-houzlook-com-3797991.jpg";
import banner2 from "../assets/Banner/pexels-mark-2724749.jpg";
import banner3 from "../assets/Banner/pexels-vecislavas-popa-1571459.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div>
      <Swiper
        className="rounded-xl"
        spaceBetween={100}
        speed={2500}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide className="shadow-lg">
          <div className="relative">
            <div className="absolute bg-gradient-to-r from-gray-900 to-transparent h-full w-[70%]">
              <p className="mt-[20%] px-4 md:px-12 md:text-6xl text-white font-bold mb-5">Indulge In Opulence, <br /> Live the Luxury Life.</p>
              <p className="text-gray-200 px-4 md:px-12 md:text-lg text-sm">Treat yourself to a lifestyle of luxury and refinement, where every aspect of <br /> your living experience is meticulously crafted for ultimate comfort and indulgence.</p>
            </div>
            <img src={banner1} className="h-[400px] md:h-[700px] w-full rounded-e-xl"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <div>
          <div className="absolute bg-gradient-to-r from-gray-900 to-transparent h-full w-[70%] ">
              <p className="mt-[20%] px-4 md:px-12 md:text-6xl text-white font-bold mb-5">Elevate Your Living Standards with our <br /> Luxury Suites</p>
              <p className="text-gray-200 px-4 md:px-12 md:text-lg text-sm">Upgrade to a higher standard of living with our meticulously designed luxury <br /> suite, where every detail is tailored to exceed your expectations and provide <br /> unparalleled comfort and sophistication.</p>
            </div>
            <img src={banner2} className="h-[400px] md:h-[700px] w-full rounded-e-xl"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-lg">
          <div>
          <div className="absolute bg-gradient-to-r from-gray-900 to-transparent   h-full w-[70%] ">
              <p className="mt-[20%] px-4 md:px-12 md:text-6xl text-white font-bold mb-5">Step into Sophistication, <br /> Stay in style.</p>
              <p className="text-gray-200 px-4 md:px-12 md:text-lg text-sm">Step into a world of sophistication and style with our luxurious accommodations, <br /> where impeccable design, luxurious amenities, and unparalleled service come together <br /> to create an unforgettable stay.</p>
            </div>
            <img src={banner3} className="h-[400px] md:h-[700px] w-full rounded-e-xl"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
