import React from 'react'
import Layout from '../components/Layout'
import BeforeAndAfter from '../components/BeforeAndAfter'
import unmatched from "../assets/photos/Unmatched-in-Quality-Image.jpg"

const BeforAndAfterPage = () => {
  return (
    <Layout>
                    <section className='w-full bg-cover bg-center relative h-[500px] sm:h-[800px] bg-[url("assets/photos/A-Minimally-Invasive-Approach-Image.jpg")]'>
                                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-35'></div>
                                    <div className='absolute top-0 left-0 w-full h-full p-8 sm:w-1/2 flex flex-col gap-5 items-start justify-center'>
                                        <h1 className='text-white font-brandonBold text-3xl'>A MINIMALLY INVASIVE APPROACH</h1>
                                        <p className='text-white font-brandon text-xl'>We preserve as much of the original tooth structure as possible, to reduce patient discomfort and recovery time. Our advanced techniques produce impressive aesthetic results while maintaining the health and integrity of your natural teeth.</p>
                                    </div>

                    </section>
                     <section className='w-full bg-cover sm:bg-white bg-center relative sm:h-[800px] sm:p-0 p-5 bg-black sm:bg-[url("assets/photos/Unmatched-in-Quality-Image.jpg")]'>
                      <img className='sm:hidden block' src={unmatched} alt=''/>
                                    <div className='sm:absolute hidden sm:block top-0 left-0 w-full h-full bg-black opacity-35'></div>
                                    <div className='sm:absolute top-0 left-0 w-full sm:p-8 sm:w-1/2 p-5 sm:h-full flex flex-col gap-10 items-start justify-center'>
                                   
                                <div className='sm:border-b-[1px] sm:w-full w-full sm:h-1/3 sm:border-white flex flex-col justify-start gap-5 '>
                                      <h1 className='text-white font-brandonBold text-2xl sm:text-3xl'>INTENTIONAL TREATMENT PLANNING</h1>
                                        <p className='text-white font-brandon text-xl '>While the results are dramatic—and often life-changing—Apa Aesthetic treatment plans are minimally invasive. Our team, featuring the dental industry’s most talented artisans, has perfected the art of the smile, marrying traditional craftsmanship with cutting-edge technology.</p>
                                </div>
                                      
                                      <div className=' sm:w-full  sm:flex sm:flex-col justify-start sm:gap-5'>
                                      <q className='text-white font-brandonItalic font-semibold text-3xl'>Few people look at dentistry the same way that we do. We interpret every patient’s needs and approach every case as a profound collaboration. Together, we are creating something emotional, something that lights up our clients’ faces—and their lives."</q>
                                        <p className='text-white font-brandon text-xl '>-Dr.Behnam</p>
                                </div>
                                    </div>

                                 

                    </section>

                    <BeforeAndAfter/>

                      <section className='w-full bg-cover bg-center relative h-[500px] sm:h-[800px] bg-[url("assets/photos/Get-A-Smile-Makeover-Image.jpg")]'>
                                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-35'></div>
                                    <div className='absolute top-0 left-0 w-full h-full p-8 sm:w-1/2 flex flex-col gap-5 items-start justify-center'>
                                        <h1 className='text-white font-brandonBold text-3xl'>GET A SMILE MAKEOVER AT APA AESTHETIC</h1>
                                        <p className='text-white font-brandon text-xl'>The final result is more than a set of porcelain veneers—it’s a transformation that makes you happier, healthier, and more confident. If you’re ready to take the first step, schedule a consultation at the Apa Aesthetic location most convenient to you.</p>
                                    </div>

                    </section>

    </Layout>
  )
}

export default BeforAndAfterPage