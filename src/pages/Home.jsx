import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import artistry from "../assets/photos/Dentistry-as-Artistry-Image-panorama-73134d7aac218e0a729061d16394bac5-seu6g87koxi5.jpg"
import unmatched from "../assets/photos/Unmatched-in-Quality-Image-panorama-bd255f5588a16e3c3ac052cec0808f10-syqrh407lnkw.jpg"
import impossible from "../assets/photos/Impossible-to-Replicate-Image-panorama-af0feaa553d82aae8cdcd0e318d3346f-yzqcri75k86e.jpg"

const Home = () => {
  return (
    <div>
    <Header/>
    <div className="w-full relative h-[700px] bg-no-repeat bg-cover bg-center bg-[url('assets/photos/antwerp3.jpg')]">
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
                         <h1 className='text-2xl font-brandonBold uppercase'><Link className='hover:text-[#A2D1DC]'>Unmatched in Quality</Link></h1>
                  <p className='text-lg'>Apa Aesthetic is forging a new path in cosmetic dentistry, creating the most sought-after smiles in the industry and delivering the best in care.</p>
                    </div>
                </div>


    </div>

    </section>
    </div>
  )
}

export default Home