import FeedBackSlider from './FeedBackSlider';
import testimonialImg from '/testimonial.png';

const FeedBack = () => {
  return (
    <div>
      <div className='text-center md:mt-10'>
        <h1 className='text-xl text-[#313EF7]'>What our client's saying</h1>
        <h2 className='mt-3 text-3xl font-semibold'>Our Client's FeedBack</h2>
      </div>

      <div className='md:flex'>
        {/* image */}
        <div
          className='bg-slate-50 md:bg-transparent mt-5 rounded-lg m-5'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <img
            src={testimonialImg}
            alt='testimonial image'
            className='md:w-[900px] md:h-[400px]'
          />
        </div>
        {/* feedback slider */}
        <FeedBackSlider />
      </div>
    </div>
  );
};

export default FeedBack;
