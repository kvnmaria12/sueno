import FeedBack from '../components/FeedBack';
import FooterC from '../components/FooterC';
import Form from '../components/Form';
import Header from '../components/Header';
import NavBarC from '../components/NavBarC';
import OurWork from '../components/OurWork';
import Services from '../components/Services';
import Session from '../components/Session';

const Home = () => {
  return (
    <>
      <NavBarC />
      <Header />
      <div className='md:hidden'>
        <Services />
      </div>
      <Form />
      <OurWork />
      <FeedBack />
      <Session />
      <FooterC />
    </>
  );
};

export default Home;
