import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import logo from '/logo/logo.png';

const FooterC = () => {
  return (
    <Footer container className='bg-white'>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 '>
          <div className='w-30 mr-10'>
            <Footer.Brand
              href='/'
              src={logo}
              alt='Sueno Logo'
              className='h-14 w-20'
            />
          </div>
          <div className='grid grid-cols-2 gap-5 sm:mt-4 sm:grid-cols-6 sm:gap-1'>
            <div className='w-32'>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Facebook</Footer.Link>
                <Footer.Link href='#'>Instagram</Footer.Link>
                <Footer.Link href='#'>Linkedin</Footer.Link>
                <Footer.Link href='#'>Youtube</Footer.Link>
                <Footer.Link href='#'>Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className=''>
              <Footer.Title title='Quick Links' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Home</Footer.Link>
                <Footer.Link href='#'>Events</Footer.Link>
                <Footer.Link href='#'>FAQ</Footer.Link>
                <Footer.Link href='#'>Career</Footer.Link>
                <Footer.Link href='#'>Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Immigration' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Take IELTS</Footer.Link>
                <Footer.Link href='#'>PTE Coaching</Footer.Link>
                <Footer.Link href='#'>Sat Coaching</Footer.Link>
                <Footer.Link href='#'>Student Visa</Footer.Link>
                <Footer.Link href='#'>Immigration</Footer.Link>
                <Footer.Link href='#'>Diploma Visa</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Our Branches' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Sueno Kerela</Footer.Link>
                <Footer.Link href='#'>Sueno Coimbatore</Footer.Link>
                <Footer.Link href='#'>Sueno Madurai</Footer.Link>
                <Footer.Link href='#'>Student Nagercoil</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Newsletter Signup' />
              <Footer.LinkGroup col className=''>
                <p className='mt-0'>
                  Enter your email address to get latest updates and offers from
                  us. Also some Discount coupons.
                </p>
                <div className='relative mt-0'>
                  <input
                    type='text'
                    placeholder='Enter your email'
                    className='rounded-lg border-2 border-blue-400 m-0'
                  />
                  <IoIosArrowDroprightCircle className='text-2xl text-[#20ABE2] absolute top-[25%] left-[85%] cursor-pointer' />
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='Lagoon Technologies™' year={2024} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon
              href='#'
              icon={BsFacebook}
              className='text-[#20ABE2]'
            />
            <Footer.Icon
              href='#'
              icon={BsInstagram}
              className='text-[#20ABE2]'
            />
            <Footer.Icon href='#' icon={BsTwitter} className='text-[#20ABE2]' />
            <Footer.Icon href='#' icon={BsGithub} className='text-[#20ABE2]' />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterC;
