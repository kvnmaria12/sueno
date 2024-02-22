import { Button, Navbar } from 'flowbite-react';
import logo from '/logo/logo.png';
import emailImg from '/sms-tracking.png';
import { linkElements } from '../constants/linkElements';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavBarC = () => {
  return (
    <div>
      {/* NavBar Brand */}
      <div className='md:hidden'>
        <Navbar>
          <Navbar.Brand>
            <img
              src={logo}
              className='mr-3 h-6 sm:h-9'
              alt='Flowbite React Logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {linkElements.map((link) => (
              <Navbar.Link
                className='hover:bg-[#1A86B8]'
                href={link.href}
                key={link.id}
              >
                {link.label}
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='hidden md:flex md:items-center md:justify-between md:m-3'>
        {/* logo */}
        <div>
          <img
            src={logo}
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite React Logo'
          />
        </div>
        {/* nav elements */}
        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            <h2>Products</h2>
            <MdKeyboardArrowDown className='mt-1 text-lg' />
          </div>
          <div>Enterprise</div>
          <div>Customers</div>
          <div className='flex items-center'>
            <h2>Company</h2>
            <MdKeyboardArrowDown className='mt-1 text-lg' />
          </div>
        </div>
        {/* contact button */}
        <div className='hidden md:flex md:items-center md:gap-3'>
          <div className='flex items-center gap-1'>
            <img src={emailImg} alt='email svg' className='h-5 mt-[5px]' />
            <h2>suenoang@gmail.com</h2>
          </div>
          <div>
            <Button className='text-white bg-[#313EF7]'>Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarC;
