import React from 'react'
import Layout from '../components/Layout'

const Location = () => {
  return (
    <Layout>
                    <section className='w-full p-5 bg-[#1a1a1a] flex flex-col  gap-10'>

                        <p className=' text-center text-white font-brandonBold text-2xl uppercase'>Onze locatie</p>

                        <div className='w-full group  bg-center bg-cover h-[400px]  sm:h-[1000px] bg-[url("assets/photos/location.png")]  relative'>
                                <div className='absolute z-0  top-0 left-0 w-full h-full bg-black opacity-45 duration-150 ease-in group-hover:opacity-75'></div>
                            {/* <div className='absolute w-full   h-full top-0 left-0 text-white uppercase flex flex-row justify-center items-center font-bold sm:text-4xl text-2xl z-10'>ANTWERPEN</div> */}
                        </div>
                    </section>
                    <section className='w-full m-auto flex justify-center items-center p-5 bg-[#1a1a1a]'>
  
    <iframe className='sm:w-1/3 w-1/2 h-[150px] sm:h-[200px]'
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1249.5776588432916!2d4.404518100000017!3d51.21621440000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6fa1661dd19%3A0x3066da7075d264f9!2sHuidevettersstraat%2057%2F59%2C%202000%20Antwerpen%2C%20Belgium!5e0!3m2!1sen!2s!4v1765212042444!5m2!1sen!2s"
      title="Tandis"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>




                    </section>

    </Layout>
  )
}

export default Location