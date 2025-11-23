import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import artistry from "../assets/photos/Dentistry-as-Artistry-Image-panorama-73134d7aac218e0a729061d16394bac5-seu6g87koxi5.jpg"
import unmatched from "../assets/photos/Unmatched-in-Quality-Image-panorama-bd255f5588a16e3c3ac052cec0808f10-syqrh407lnkw.jpg"
import impossible from "../assets/photos/Impossible-to-Replicate-Image-panorama-af0feaa553d82aae8cdcd0e318d3346f-yzqcri75k86e.jpg"
import { Swiper, SwiperSlide  } from "swiper/react";
import {  Autoplay, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BeforeAndAfter from '../components/BeforeAndAfter'

const Home = () => {

  return (
    <div>
    <Header/>
    <div className="w-full relative h-[700px] bg-no-repeat bg-cover bg-[url('assets/photos/image0.jpeg')]">
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-15 z-10'>

        </div>

        <div className='w-full absolute top-0 bottom-0 h-full sm:flex sm:flex-col sm:gap-5 sm:justify-end z-20 sm:p-10'>
        <h1 className='w-full text-white font-brandon sm:text-4xl sm:font-brandonBold'>A NEW STANDARD IN DENTISTRY</h1>
        <p className='font-brandon text-white text-lg'>It’s not about the teeth; it’s about the life the teeth inspire you to live.</p>

        </div>

    </div>
    <section className='w-full sm:mt-5 sm:p-5 sm:flex sm:flex-col sm:gap-5'>
    <h1 className='w-full text-center font-brandon sm:text-2xl sm:font-brandonBold'><Link className='hover:text-[#A2D1DC]'>EXPERIENCE A NEW KIND OF SMILE AT APA AESTHETIC</Link></h1>
    <p className='w-full text-center text-xl font-brandon'>Traditional craftsmanship meets cutting-edge technology to deliver restorative dentistry with natural results and enduring benefits.</p>
    <div className='w-full sm:flex sm:flex-row '>
                <div className='sm:w-[33%] sm:flex sm:flex-col sm:gap-2 font-brandon'>
                  <div> <img src={artistry} alt='artistry'/></div>
                 <div className='w-full sm:p-3'>
                     <h1 className='text-2xl font-brandonBold uppercase'><Link className='hover:text-[#A2D1DC]'>Dentistry as Artistry</Link></h1>
                  <p className='text-lg'>With a custom approach to smile design that seamlessly marries digital and analog techniques, the result is more than a makeover; it's a transformation.</p>
                 </div>
                </div>
                 <div className='sm:w-[33%] sm:flex sm:flex-col sm:gap-2 font-brandon'>
                  <div> <img src={unmatched} alt='artistry'/></div>
                    <div className='w-full sm:p-3'>
                         <h1 className='text-2xl font-brandonBold uppercase'><Link className='hover:text-[#A2D1DC]'>Unmatched in Quality</Link></h1>
                  <p className='text-lg'>To bring each smile to life, Dr. Behnam has assembled the world’s most accomplished ceramists, hailing from Belgium.</p>
                    </div>
                </div>
                <div className='sm:w-[33%] sm:flex sm:flex-col sm:gap-2 font-brandon'>
                  <div> <img src={impossible} alt='artistry'/></div>
                    <div className='w-full sm:p-3'>
                         <h1 className='text-2xl font-brandonBold uppercase'><Link className='hover:text-[#A2D1DC]'>Impossible to Replicate</Link></h1>
                  <p className='text-lg'>Apa Aesthetic is forging a new path in cosmetic dentistry, creating the most sought-after smiles in the industry and delivering the best in care.</p>
                    </div>
                </div>

    </div>

    </section>

    {/* swiper */}
    <section className='w-full'>

            <div className="w-full h-screen">
        <Swiper 
        modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000, // هر ۳ ثانیه عوض بشه
        disableOnInteraction: false, // بعد از لمس یا hover هم ادامه بده
      }}
      speed={1000} // سرعت fade
      loop={true}
      className=" !relative"
        >

          <SwiperSlide><img src={artistry} alt=''/></SwiperSlide>
          <SwiperSlide><img src={unmatched} alt=''/></SwiperSlide>
          <SwiperSlide><img src={impossible} alt=''/></SwiperSlide>
          <div className='absolute top-0 left-0 w-full h-full bg-black z-10 opacity-35'>

          </div>
           <div className='absolute top-0 left-0 w-full h-full z-20 sm:flex sm:flex-col sm:justify-end sm:items-start sm:pb-5'>
           <div className='sm:p-5 sm:flex sm:flex-col sm:gap-4 sm:w-1/2'>
            <h1 className='text-4xl text-white font-brandonBold w-full'>Revolutionizing Modern Dentistry</h1>
            <p className='font-brandon text-xl text-white'>No ordinary office would do because there is nothing ordinary about Apa Aesthetic. With Dr. Michael Apa at the helm, the practice is an industry disruptor, elevating oral care from need-based to want-based with a one-of-a-kind experience that begins when you walk in the door.</p>
            <div className='text-white sm:text-xl font-brandonBold  uppercase sm:hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white hover:border-none group inline-block'>About Behnam Aesthetic
            <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
            </Link>
              
            </div>
            </div>
          </div>

        </Swiper>
    </div>
    </section>
    <BeforeAndAfter/>
    <section className='w-full bg-black text-white sm:p-5'>
    <h1 className='w-full text-center font-brandonBold sm:text-2xl uppercase'>Dentistry reimagined</h1>
    <p className='text-center font-brandon text-xl sm:w-[70%] m-auto'>Apa Aesthetic represents the highest echelon of talent from across the globe and stands unrivaled in innovation, creativity, and skill. Prioritizing both the clinical results and the patient experience, the practice offers cosmetic dentistry, reimagined.</p>
    </section>
    <section className='flex'>
            <div className='w-[33.33%] h-[600px] bg-cover bg-center relative bg-no-repeat  bg-[url("assets/photos/s1.jpg")]'>
              <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0'>
     
              </div>
              <div className='absolute w-full h-full top-o left-0 p-5 flex flex-col justify-end items-start'>
                <h1 className='text-white w-full text-xl font-brandonBold  uppercase '>1. Schedule a consultation</h1>
                <p className='text-white w-full   font-brandon'>Behnam Aesthetic owns the art of the smile with results that redefine the industry. The patient journey begins with a dialog to understand goals and communicate possibilities.</p>
              </div>
            </div>

            <div className='w-[33.33%] h-[600px] bg-cover bg-center relative bg-no-repeat  bg-[url("assets/photos/s2.jpg")]'>
              <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0'>
     
              </div>
              <div className='absolute w-full h-full top-o left-0 p-5 flex flex-col justify-end items-start'>
                <h1 className='text-white w-full text-xl font-brandonBold  uppercase '>2. Transform your smile</h1>
                <p className='text-white w-full   font-brandon'>Restored teeth should look like teeth. Apa Aesthetic promises a smile makeover with undetectable work and transformative results, so your teeth don't enter a room before you do.</p>
              </div>
            </div>
             <div className='w-[33.33%] h-[600px] bg-cover bg-center relative bg-no-repeat  bg-[url("assets/photos/s3.jpg")]'>
              <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0'>
     
              </div>
              <div className='absolute w-full h-full top-o left-0 p-5 flex flex-col justify-end items-start'>
                <h1 className='text-white w-full text-xl font-brandonBold  uppercase '>3. Experience the Difference</h1>
                <p className='text-white w-full   font-brandon'>At Apa Aesthetic, your smile makeover is the beginning of a lifelong relationship. From professional cleanings to routine care, enjoy exclusive access to general dentistry services at all of our locations.</p>
              </div>
            </div>

    </section>
    </div>
  )
}

export default Home