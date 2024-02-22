import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { feedBacks } from '../constants/feedbacks';

const FeedBackSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { image, rating, name, feedBack } = feedBacks[selectedIndex];

  return (
    <div
      className='md:w-[700px] md:mt-16'
      data-aos='fade-left'
      data-aos-duration='1000'
    >
      {/* testimonal */}
      <div className='bg-white border-2 m-5 p-5 rounded-2xl'>
        <div className='flex items-center gap-3 '>
          <div className=''>
            <img className='h-16' src={image} alt='feed back image' />
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{rating}</h3>
          </div>
        </div>
        <div>
          <p className='mt-2 text-lg'>{feedBack}</p>
        </div>
      </div>
      {/* slider button */}
      <div className='flex items-center justify-center gap-3'>
        <button
          className='h-12 w-12 bg-slate-300  text-black rounded-3xl cursor-pointer'
          onClick={() => {
            if (selectedIndex <= 0) {
              setSelectedIndex(0);
            } else {
              setSelectedIndex((prev) => prev - 1);
            }
          }}
        >
          <MdKeyboardArrowLeft className='item-center mx-auto text-3xl' />
        </button>
        <button
          className='h-12 w-12 bg-[#313EF7] text-white rounded-3xl cursor-pointer'
          onClick={() => {
            if (selectedIndex >= feedBacks.length - 1) {
              setSelectedIndex(0);
            }
            setSelectedIndex((prev) => prev + 1);
          }}
        >
          <MdKeyboardArrowRight className='item-center mx-auto text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default FeedBackSlider;
