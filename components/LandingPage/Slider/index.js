import Slide from "./Slide";

// eslint-disable-next-line
import "swiper/css/bundle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


function index() {
  return (
    <div>
    <div style={{
      backgroundImage: `url("https://tuk-cdn.s3.amazonaws.com/can-uploader/react-ui-again-slider-images.png")`
    }} className="2xl:container 2xl:mx-auto flex justify-center items-center flex-col space-y-10  py-16 border-r border-l">
      <div className=" relative xl:px-36 w-full  ">
        <div className="w-full flex justify-center items-center flex-col">
          <Swiper
            grabCursor={true} loopFillGroupWithBlank={true} loop={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              // when window width is >= 320px
              "320": {
                slidesPerView: 3,
                spaceBetween: 16,
                slidesPerGroup: 1,
              },
              // when window width is >= 480px
              "480": {
                slidesPerView: 3,
                spaceBetween: 16,
                slidesPerGroup: 1,
              },
              // when window width is >= 640px
              " 640": {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 1,
              },
              " 1024": {
                slidesPerView: 3,
                spaceBetween: 32,
                slidesPerGroup: 1,
              },
              "1336": {
                slidesPerView: 3,
                spaceBetween: 0,
                slidesPerGroup: 1,
              }
            }}
            className="swiper mySwiper">
            <SwiperSlide className="swiper-slide  ">
             <Slide heading={'Company Home'} paragraph={'Provide a reliable and easy to navigate source of information to your team. Announcements, updates, policies, and more, all in one place.'}/>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  ">
              <Slide heading={'Roadmap'} paragraph={'Clearly and efficiently codify your company’s purpose, approach, and ethos.'}/>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide  ">
              <Slide heading={'Meeting Notes'} paragraph={'Capture notes from all meetings in one accessible spot.'}/>
            </SwiperSlide>
          </Swiper>
          <button aria-label="back" className=" swiper-button-prev">
            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" stroke="white" />
              <path d="M9.64645 15.6464C9.45118 15.8417 9.45118 16.1583 9.64645 16.3536L12.8284 19.5355C13.0237 19.7308 13.3403 19.7308 13.5355 19.5355C13.7308 19.3403 13.7308 19.0237 13.5355 18.8284L10.7071 16L13.5355 13.1716C13.7308 12.9763 13.7308 12.6597 13.5355 12.4645C13.3403 12.2692 13.0237 12.2692 12.8284 12.4645L9.64645 15.6464ZM22 15.5L10 15.5L10 16.5L22 16.5L22 15.5Z" fill="white" />
            </svg>
          </button>
          <button aria-label="next" className="   swiper-button-next ">
            <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.5" transform="rotate(-180 16 16)" stroke="white" />
              <path d="M22.3536 16.3536C22.5488 16.1583 22.5488 15.8417 22.3536 15.6464L19.1716 12.4645C18.9763 12.2692 18.6597 12.2692 18.4645 12.4645C18.2692 12.6597 18.2692 12.9763 18.4645 13.1716L21.2929 16L18.4645 18.8284C18.2692 19.0237 18.2692 19.3403 18.4645 19.5355C18.6597 19.7308 18.9763 19.7308 19.1716 19.5355L22.3536 16.3536ZM10 16.5L22 16.5L22 15.5L10 15.5L10 16.5Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <button type='button' className='py-5 px-12 tracking-[-0.03em] text-base font-medium border border-white leading-5 text-white bg-transparent  bg-neutral-800 bg-opacity-0 hover:bg-opacity-100'>
      View All
                </button>
      </div>
      <style>
          {`
      
        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }
        .swiper-wrapper {
            display: flex;
            align-items: center;
        }
        .swiper-button-next,
        .swiper-button-prev {
  
        }
        .swiper {
            width: 100%;
            height: 100%;
        }
        @media (min-width: 768px) {

            .mainDiv {
                position: relative;
                height: 100%;
                width: 100%
            }
        }
        @media (min-width: 1536px) {
            .mainDiv {
                position: relative;
                height: 100%;
                width: 100%
            }
            .custom {
                width: 100%
            }
          .swiper-button-next,
            .swiper-button-prev {
                height: 40px;
                width: 40px;
                margin: 0 40px
            }
        }
        .swiper-slide img {
            object-fit: cover;
        }
        `}
        </style>
    </div>
  )
}


export default index;