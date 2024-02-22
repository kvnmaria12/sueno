import { Button } from 'flowbite-react';
import sessionImg from '/session-img.png';

const Session = () => {
  return (
    <div className='md:flex md:m-10 '>
      <div
        className=' bg-[#FAF8F6] p-10 m-5  mt-10 rounded-lg md:m-0 md:w-[60%]'
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <h1 className='text-center font-semibold text-3xl md:text-left md:text-3xl md:mt-24'>
          Get 15-Minutes Complimentary online session
        </h1>
        <Button className='mx-auto mt-5 md:m-0 md:mt-10'>Call Now</Button>
      </div>
      {/* image */}
      <div className='' data-aos='fade-left' data-aos-duration='1000'>
        <img
          src={sessionImg}
          alt='session-image'
          className='p-5 md:h-[400px] md:w-[600px] md:p-0'
        />
      </div>
    </div>
  );
};

export default Session;
