import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide  } from "swiper/react";
import {  Autoplay,Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import swiper1 from "../assets/photos/swiper1.jpg"
import swiper2 from "../assets/photos/swiper2.jpg"
import swiper3 from "../assets/photos/swiper3.jpg"

const AboutUs = () => {
  return (
    <Layout>
                        <section className='w-full sm:h-[800px] bg-[url("assets/photos/aboutUs.jpg")] sm:bg-cover sm:bg-center relative h-[400px] bg-center bg-cover'>
                                <div className='w-full h-full abolute top-0 left-0 bg-black opacity-25 z-5'></div>
                                <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center sm:items-start items-center  p-5 sm:p-8 gap-5'>
                                    <h1 className='text-white sm:text-3xl text-2xl font-brandonBold w-full'>EXPERIENCE WANT-BASED DENTISTRY</h1>
                                    <p className='text-white font-brandon text-2xl sm:w-1/2 w-full'>BEN'S Aesthetic treatment plans are carefully designed to meet each patient's aesthetic goals while addressing essential oral health issues.</p>
                                </div>
                        </section>

                        <section className='w-full p-8 flex flex-col justify-center items-start'>
                        <h1 className='sm:text-3xl font-semibold uppercase w-full text-2xl'>We are BEN Aesthetic</h1>
                                <ul className='font-brandon flex flex-col  gap-5 sm:w-[60%] w-full text-xl mt-5'>
                                    <li>Ben Aesthetic has revolutionized modern dentistry by delivering unrivaled personalized service to create one-of-a-kind smiles for patients around the globe.</li>
                                    <li>To achieve his bold vision, Dr. Behnam has assembled the world’s most accomplished dentists and master ceramists, each with his or her own technical expertise and artistic talent. Together, this dream team is realizing an ambitious mission—to be the best in their field and create the world’s most sought-after smiles.</li>
                                    <li>Through thoughtful communication and care, Ben Aesthetic supports patients on their individual journeys and instills the trust and confidence synonymous with the Apa name. In prioritizing both the clinical results and the patient experience, the practice continually strengthens its reputation as the ultimate destination for aesthetic dentistry.</li>
                                </ul>
                        </section>

                        <section className='w-full p-5 sm:fle sm:gap-0 sm:flex-row sm:justify-between flex flex-col gap-10'>
              <div className='sm:w-[49%] w-full sm:h-[700px] h-[350px] bg-center bg-cover bg-[url("assets/photos/Meet-Dr.-Apa-Image-scaled.jpg")] relative'>
                  <div className='absolute sm:bg-white top-[40%] left-[20%]  sm:top-[90%] sm:left-16 sm:w-[80%] sm:h-[150px] p-5 sm:flex sm:flex-row sm:justify-center sm:items-start '>
                  <div className='sm:text-black text-white sm:text-xl font-brandonBold  uppercase hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white sm:border-black hover:border-none group inline-block'>meet dr.behnam
                              <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                              </Link>
                                
                              </div>
                  </div>

              </div>

             <div className='sm:w-[49%] w-full sm:h-[700px] h-[350px] bg-center bg-cover bg-[url("assets/photos/Meet-Our-Team-Image-V2.jpg")] relative'>
                  <div className='absolute sm:bg-white top-[40%] left-[20%]   sm:top-[90%] sm:left-16 sm:w-[80%] sm:h-[150px] p-5 flex justify-center items-start'>
                  <div className='sm:text-black text-white sm:text-xl font-brandonBold  uppercase hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white sm:border-black hover:border-none group inline-block'>meet the team
                              <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                              </Link>
                                
                              </div>
                  </div>

              </div>
                        </section>

                        <section className='w-full sm:mt-10 p-5 sm:flex sm:flex-row relative  bg-cover bg-center sm:bg-none bg-[url("assets/photos/image1-1.jpg")]'>
                <div className='sm:w-1/2 relative'>
                  <div className='p-5 flex flex-col gap-8  sm:bg-white sm:text-black text-white sm:w-full  sm:absolute left-[30%] top-[20%]'>
                    <h1 className='font-brandonBold text-3xl uppercase'>There’s Only One Ben Aesthetic</h1>
                    <p className='font-brandon text-lg'>What unites us? Passion and purpose. Together, we’re setting new standards, innovating aesthetic dentistry, and going the extra mile to give you our signature finest—and best-in-class results you’ll only find at Apa Aesthetic. And that’s something worth smiling about.</p>
                    <p className='font-brandon text-lg'>By revitalizing some of the world’s most recognizable smiles, Dr. Behnam has become something of a celebrity himself. His media appearances and significant social media following have made Apa Aesthetic the premiere dental brand for global dignitaries and luminaries.</p>
                  </div>
                </div>
                <div className='sm:w-1/2 sm:h-[600px] hidden sm:block sm:mt-0 mt-5 w-full h-[400px] bg-cover bg-center bg-[url("assets/photos/image1-1.jpg")]'>
                </div>
                        </section>

                         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
       className='!w-full mt-5'
        autoplay={{
        delay: 2000, // هر ۳ ثانیه عوض بشه
        disableOnInteraction: false, // بعد از لمس یا hover هم ادامه بده
      }}
      speed={1000} // سرعت fade
      loop={true}
    >
      <SwiperSlide className='!w-full !p-5 sm:!h-[700px] !h-[500px] !relative'>
            <img className='w-full !h-full !object-cover' src={swiper1} alt=''/>
             <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-20 '>
          <h1 className='text-white font-brandonBold text-2xl'>ENTIRELY BESPOKE AND REMARKABLY NATURAL</h1>
          <p className='text-white font-brandon text-xl'>Our custom approach to hand-layered porcelain veneers marries digital and analog techniques for natural results that last.</p>

          </div>
         
      </SwiperSlide>  
      <SwiperSlide className='!w-full !p-5 sm:!h-[700px] !h-[500px]'>
         <img className='w-full !h-full !object-cover' src={swiper2} alt=''/>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-20 '>
          <h1 className='text-white font-brandonBold text-2xl'>Revolutionizing Modern Dentistry</h1>
          <p className='text-white font-brandon text-xl'>We continually challenge the status quo and understand that advancement does not come from smiles alone, but from the entirety of the patient experience – from our office environment to our ethics and engagement.</p>

          </div>
      </SwiperSlide>
       <SwiperSlide className='!w-full !p-5 sm:!h-[700px] !h-[500px]'>
         <img className='w-full !h-full !object-cover' src={swiper3} alt=''/>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-20 '>
          <h1 className='text-white font-brandonBold text-2xl'>FORM MEETS FUNCTION</h1>
          <p className='text-white font-brandon text-xl'>Each dental restoration is hand-crafted using porcelain powder and a paintbrush to mimic a natural tooth, promote oral health and ensure facial harmony.</p>

          </div>
      </SwiperSlide>
     
    </Swiper>

    </Layout>
  )
}

export default AboutUs