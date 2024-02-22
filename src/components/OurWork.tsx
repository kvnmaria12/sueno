import badgeSvg from '/svgs/badge.svg';
import bookSvg from '/svgs/book.svg';
import chatSvg from '/svgs/chat.svg';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const OurWork = () => {
  return (
    <div className='h-full flex'>
      <div className='w-[75%]'>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
              <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
                <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
              </span>
              <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
              <p className='text-slate-600/100'>
                Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
                Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus,
                arcu magna luctus ipsum, a varius odio metus eu libero. Sed non
                eros nec arcu fermentum malesuada.
              </p>
              <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
                <FaArrowRight className='text-3xl text-white cursor-pointer' />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <p className='hidden md:block md:w-[80%]  md:mt-16 md:ml-10'>
          Suspendisse potenti. Integer id sapien ut eros rhoncus placerat. Nulla
          facilisi. Maecenas rutrum, libero nec venenatis tempus, arcu magna
          luctus ipsum, a varius odio metus eu libero. Sed non eros nec arcu
          fermentum malesuada. Aenean ac orci purus. Sed vestibulum hendrerit
          lacus eget feugiat. Sed et justo quis risus dapibus facilisis. Quisque
          tristique ultrices convallis. Cras sed libero eget enim gravida
          eleifend.
        </p>
      </div>
    </div>
  );
};

export default OurWork;

// <div>
//         <h1 className='text-center text-4xl leading-[1.4] font-bold p-5'>
//           <span className='text-[#20ABE2]'>Sueno</span> can help you in these
//           particular areas
//         </h1>
//       </div>
//       <div className='md:flex md:m-5'>
//         {/* digital marketing */}
//         <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
//           <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
//             <img className='mx-auto mt-2 ' src={bookSvg} alt='book image' />
//           </span>
//           <h2 className='text-2xl my-2 font-semibold'>Digital Marketing</h2>
//           <p className='text-slate-600/100'>
//             Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
//             Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus, arcu
//             magna luctus ipsum, a varius odio metus eu libero. Sed non eros nec
//             arcu fermentum malesuada.
//           </p>
//           <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
//             <FaArrowRight className='text-3xl text-white cursor-pointer' />
//           </div>
//         </div>
//         {/* logistics */}
//         <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto  md:mx-2 '>
//           <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
//             <img className='mx-auto mt-2 ' src={chatSvg} alt='chat image' />
//           </span>
//           <h2 className='text-2xl my-2 font-semibold'>Logistics</h2>
//           <p className='text-slate-600/100'>
//             Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
//             Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus, arcu
//             magna luctus ipsum, a varius odio metus eu libero. Sed non eros nec
//             arcu fermentum malesuada.
//           </p>
//           <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
//             <FaArrowRight className='text-3xl text-white cursor-pointer' />
//           </div>
//         </div>

//         {/* Event Management */}
//         <div className='border-2  p-5 m-10 text-center shadow-slate-50	bg-white rounded-full w-[280px] mx-auto md:mx-2'>
//           <span className='h-12 w-12 bg-slate-300 inline-block rounded-3xl'>
//             <img className='mx-auto mt-2 ' src={badgeSvg} alt='chat image' />
//           </span>
//           <h2 className='text-2xl my-2 font-semibold'>Event Management</h2>
//           <p className='text-slate-600/100'>
//             Suspendisse potenti. Integer id sapien ut eros rhoncus placerat.
//             Nulla facilisi. Maecenas rutrum, libero nec venenatis tempus, arcu
//             magna luctus ipsum, a varius odio metus eu libero. Sed non eros nec
//             arcu fermentum malesuada.
//           </p>
//           <div className='flex justify-center items-center h-12 w-12  mx-auto mt-5 bg-[#20ABE2] rounded-3xl '>
//             <FaArrowRight className='text-3xl text-white cursor-pointer' />
//           </div>
//         </div>

//         {/* paragraph */}
//         <p className='hidden md:block md:w-[20%]  md:mt-16 md:ml-10'>
//           Suspendisse potenti. Integer id sapien ut eros rhoncus placerat. Nulla
//           facilisi. Maecenas rutrum, libero nec venenatis tempus, arcu magna
//           luctus ipsum, a varius odio metus eu libero. Sed non eros nec arcu
//           fermentum malesuada. Aenean ac orci purus. Sed vestibulum hendrerit
//           lacus eget feugiat. Sed et justo quis risus dapibus facilisis. Quisque
//           tristique ultrices convallis. Cras sed libero eget enim gravida
//           eleifend.
//         </p>
//       </div>
