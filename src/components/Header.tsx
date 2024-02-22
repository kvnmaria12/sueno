import serviceImage1 from '/services/image1.png';
import serviceImage2 from '/services/image2.png';
import productImage1 from '/products/image.png';
import manStanding from '/man-standing.png';
import { FaWhatsapp } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdOutlineEmail } from 'react-icons/md';

const Header = () => {
  return (
    <>
      {/* for mobile layout */}
      <div className='md:hidden'>
        <div className='relative bg-black'>
          <div className='bg-man-standing bg-center bg-no-repeat bg-cover h-[120dvh] mt-5 brightness-50 '></div>
          <div className='z-[1000] absolute top-[35%]  p-5 ml-6'>
            <h1 className='text-center font-bold text-[#1A86B8] text-4xl'>
              Welcome to <span className='text-[#211198]'>Sueno</span>
            </h1>
            <p className='leading-7 p-5 text-lg font-semibold text-white'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div className='flex flex-col gap-5 '>
              <div className='h-14 flex items-center text-center bg-[#F5F5F5] p-3 rounded-lg gap-1'>
                <FaWhatsapp className='text-2xl text-[#1A86B8]' />
                <h3 className='text-xl'>Contact Us</h3>
              </div>
              <div className='h-14 w-full flex items-center text-center bg-[#F5F5F5] p-2 rounded-lg gap-1'>
                <MdOutlineEmail className='text-2xl text-[#20AD96]' />
                <h3 className='text-xl'>suenoang@gmail.com</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl hidden md:block border-2 border-slate-200 m-5 p-5'>
            {/* services section */}
            <div>
              <h2 className='text-base font-semibold text-[#313EF7] uppercase'>
                Our Services
              </h2>
              <div className='flex justify-center items-center gap-5 mt-6'>
                <div>
                  <img
                    className='h-16 w-20'
                    src={serviceImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>
                    Digital Marketing
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 mt-6 '>
                <div>
                  <img
                    className='h-16 w-20'
                    src={serviceImage2}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>
                    Digital Marketing
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
            </div>

            {/* products section */}
            <div className='mt-9'>
              <h2 className='text-lg font-semibold text-[#313EF7] uppercase'>
                Our Products
              </h2>
              <div className='flex justify-center items-center gap-5 mt-6'>
                <div>
                  <img
                    className='h-16 w-20'
                    src={productImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-2xl mb-1 font-semibold uppercase'>
                    Trackoon GPS
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 mt-6 '>
                <div>
                  <img
                    className='h-16 w-20'
                    src={productImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-2xl mb-1 font-semibold uppercase'>
                    Atoll ERP
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 mt-6 '>
                <div>
                  <img
                    className='h-16 w-20'
                    src={productImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-2xl mb-1 font-semibold uppercase'>
                    HRMS
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
            </div>
            {/* explore section */}
            <div className='mt-10 mb-5'>
              <div className='flex justify-between mt-6'>
                <h1 className='text-[#056CB8] text-2xl uppercase'>
                  Explore Products
                </h1>
                <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for bigger version */}
      <div className='relative'>
        <div className='hidden md:flex z-[100000] md:justify-between'>
          {/* title card */}
          <div className='w-[50%] ml-2 mt-32 text-left z-[100000]'>
            <h1 className=' font-bold text-[#1A86B8] text-6xl ml-5'>
              Welcome to <span className='text-[#211198]'>Sueno!!!</span>
            </h1>
            <p className='leading-10 p-5 text-lg font-semibold text-black mt-6'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            <div className='flex gap-5 mt-2 mb-5 ml-2'>
              <div className='flex items-center text-center bg-[#F5F5F5] p-3 rounded-lg gap-1'>
                <FaWhatsapp className='text-2xl text-[#1A86B8]' />
                <h3 className='text-xl'>Contact Us</h3>
              </div>
              <div className='flex items-center text-center bg-[#F5F5F5] p-2 rounded-lg gap-1'>
                <MdOutlineEmail className='text-2xl text-[#20AD96]' />
                <h3 className='text-xl'>suenoang@gmail.com</h3>
              </div>
            </div>
          </div>
          {/* image */}

          {/* services section */}
          <div
            className='rounded-xl hidden md:block border-2 border-slate-200 m-5 p-5 w-[30%]'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            {/* services section */}
            <div>
              <h2 className='text-lg font-bold text-[#313EF7] uppercase'>
                Our Services
              </h2>
              <div className='flex justify-center items-center gap-5 mt-6'>
                <div>
                  <img
                    className='h-16 w-20'
                    src={serviceImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>
                    Digital Marketing
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 mt-6 '>
                <div>
                  <img
                    className='h-16 w-20'
                    src={serviceImage2}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>
                    Digital Marketing
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
            </div>

            {/* products section */}
            <div className='mt-9'>
              <h2 className='text-lg font-bold text-[#313EF7] uppercase'>
                Our Products
              </h2>
              <div className='flex justify-center items-center gap-5 mt-6'>
                <div>
                  <img
                    className='h-16 w-20'
                    src={productImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>
                    Trackoon GPS
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 mt-6 '>
                <div>
                  <img
                    className='h-16 w-20'
                    src={productImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>
                    Atoll ERP
                  </h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
              <div className='flex justify-center items-center gap-5 mt-6 '>
                <div>
                  <img
                    className='h-16 w-20'
                    src={productImage1}
                    alt='service-image-1'
                  />
                </div>

                <div>
                  <h2 className='text-xl mb-1 font-semibold uppercase'>HRMS</h2>
                  <p className='text-slate-600/100'>
                    Loreum Ipsuem is the largest digital marketing agency
                  </p>
                </div>
                <div>
                  <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
                </div>
              </div>
            </div>
            {/* explore section */}
            <div className='mt-5 mb-2'>
              <div className='flex justify-between mt-6'>
                <h1 className='text-[#056CB8] text-xl uppercase'>
                  Explore Products
                </h1>
                <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
              </div>
            </div>
          </div>
        </div>
        {/* man standing */}
        <div
          className='hidden md:w-[40%] md:flex md:absolute md:top-[0%] md:left-[33%] md:z-[10000]
        
        
        '
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <img
            src={manStanding}
            className='h-[80%] w-[80%] my-0 mx-auto mt-32'
            alt='Man Standing'
          />
        </div>
        ;
      </div>
    </>
  );
};

export default Header;
