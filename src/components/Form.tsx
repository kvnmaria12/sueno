import { Button } from 'flowbite-react';

const Form = () => {
  return (
    <div>
      <form
        action=''
        className='rounded-lg m-5 shadow-grey-100 shadow-lg shadow-slate-300'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div className='md:flex'>
          <div className='p-5 w-full'>
            <label className='block mb-1 text-lg' htmlFor='name'>
              Enter Your Name
            </label>
            <input
              id='name'
              type='text'
              className='w-full border-2 border-slate-200 rounded-lg h-14'
              placeholder='Name'
            />
          </div>
          <div className='p-5 w-full'>
            <label className='block mb-1 text-lg' htmlFor='number'>
              Enter Your Mobile Number
            </label>
            <input
              id='number'
              type='number'
              className='w-full border-2 border-slate-200 rounded-lg h-14'
              placeholder='Mobile Number'
            />
          </div>
          <div className='p-5 w-full'>
            <label className='block mb-1 text-lg' htmlFor='location'>
              Enter Your Location
            </label>
            <input
              id='location'
              type='text'
              className='w-full border-2 border-slate-200 rounded-lg h-14'
              placeholder='Location'
            />
          </div>
          <div className='p-5 w-full'>
            <label className='block mb-1 text-lg' htmlFor='service'>
              Enter Your Service
            </label>
            <input
              id='service'
              type='text'
              className='w-full border-2 border-slate-200 rounded-lg h-14'
              placeholder='Service'
            />
          </div>
        </div>
        <div className='px-5 mb-5 pb-4'>
          <Button className='w-full h-12 md:w-[20%] md:mx-auto bg-[#20ABE2] text-white'>
            Get a Quote
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
