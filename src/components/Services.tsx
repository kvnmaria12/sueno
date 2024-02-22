import serviceImage1 from '/services/image1.png';
import serviceImage2 from '/services/image2.png';
import productImage1 from '/products/image.png';

import { MdKeyboardArrowRight } from 'react-icons/md';

const Services = () => {
  return (
    <div className=' rounded-xl border-2 border-slate-200 m-5 p-5'>
      {/* services section */}
      <div>
        <h2 className='text-xl font-bold text-[#313EF7] uppercase'>
          Our Services
        </h2>
        <div className='flex justify-center items-center gap-5 mt-3'>
          <div>
            <img className='h-16' src={serviceImage1} alt='service-image-1' />
          </div>

          <div>
            <h2 className='text-2xl mb-1 font-semibold uppercase'>
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
        <div className='flex justify-center items-center gap-5 mt-5'>
          <div>
            <img className='h-16' src={serviceImage2} alt='service-image-1' />
          </div>

          <div>
            <h2 className='text-2xl mb-1 font-semibold uppercase'>
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
      <div className='mt-6'>
        <h2 className='text-xl font-bold text-[#313EF7] uppercase'>
          Our Products
        </h2>
        <div className='flex justify-center items-center gap-5 mt-3'>
          <div>
            <img className='h-16' src={productImage1} alt='service-image-1' />
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
            <img className='h-16' src={productImage1} alt='service-image-1' />
          </div>

          <div>
            <h2 className='text-2xl mb-1 font-semibold uppercase'>Atoll ERP</h2>
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
            <img className='h-16' src={productImage1} alt='service-image-1' />
          </div>

          <div>
            <h2 className='text-2xl mb-1 font-semibold uppercase'>HRMS</h2>
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
      <div className='mt-6 mb-2'>
        <div className='flex justify-between mt-6'>
          <h1 className='text-[#056CB8] text-2xl uppercase'>
            Explore Products
          </h1>
          <MdKeyboardArrowRight className='cursor-pointer text-2xl hover:text-3xl hover:text-[#313EF7] hover:animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default Services;
