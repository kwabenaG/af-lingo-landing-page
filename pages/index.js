// main index file === home page

import { useEffect } from 'react';


// import local components
import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import Section from '../components/Section';
import Country from '../components/Country';
import Footer from '../components/Footer';
import ActionPage from '../components/ActionPage';
import Counter from '../components/Counter';
import About from '../components/About';



// third party imports

//swiper
import 'swiper/css';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';


export default function Home() {

  return (
    
    <div className=' '>
      <Layout>
        
        <Header />{/* header with menu */}

        <main className='antialiased'>

          <Main />{/* mains */}
          {/* african countries */}
          <div className='flex justify-start'>
            <Swiper onSlideChange={(swiper) => console.log(swiper)} autoplay = {{ delay: 5000, disableOnInteraction: true }} loop={true}
            modules={[Autoplay]} onSwiper={(swiper) => console.log(swiper)}
            // spaceBetween={50}
            slidesPerView={3}
            
            >
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
               <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
              <SwiperSlide><Country flag="/images/flags/sa_flag.png" name="South Africa" /></SwiperSlide>
            </Swiper>
            
            {/* <Country flag="/images/flags/sa_flag.png"  name="Nigeria" />
            <Country flag="/images/flags/sa_flag.png" name="Kenya" />
            <Country flag="/images/flags/sa_flag.png"  name="Tunesia" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" />
            <Country flag="/images/flags/sa_flag.png"  name="Uganda" /> */}

          </div>
          {/* end african countries */}
          
          
          <About />{/*about */}
          <Section />{/* sections  */}
          <Counter />{/* counter */}
          <ActionPage />{/* action page */}
          
         {/* arrow top icon */}
        
        </main>
        
        <Footer />  {/* footers */}


      </Layout>
      
      </div>
  )
}
