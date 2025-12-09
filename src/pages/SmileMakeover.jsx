import React from 'react'
import Layout from '../components/Layout'
import BeforeAndAfter from '../components/BeforeAndAfter'
import LazyBackground from '../components/LazyBackground'
import smileMakeover from '../assets/photos/smileMakeover.jpg'
import makeover from '../assets/photos/makeover.jpg'
import RevealOnScroll from '../components/RevealOnScroll'
const SmileMakeover = () => {
  return (
    <Layout>
    <LazyBackground src={smileMakeover} className='w-full sm:h-[800px] sm:bg-center sm:bg-cover relative h-[400px] bg-cover bg-center'>

    <div className='w-full h-full bg-black opacity-35 absolute top-0 left-0 z-5'></div>

    <div className='w-full h-full z-10 absolute top-0 left-0 flex flex-col items-start justify-center gap-5 p-10'>
            <h1 className='text-white uppercase font-brandonBold sm:text-3xl text-2xl'>Elke glimlach heeft zijn eigen verhaal.</h1>
            <p className='text-white sm:text-2xl font-brandon text-2xl'>We analyseren de mondgezondheid, de beet en de gezichtsstructuur zorgvuldig,
en ontwerpen een behandeling die zowel de gezondheid verbetert als de uitstraling</p>

    </div>

    </LazyBackground>

    <section className='w-full p-8 flex flex-col gap-5'>
    <h1 className='font-brandonBold text-2xl sm:w-1/2'>BEN'S AESTHETIC'S UNIQUE APPROACH</h1>
        <p className='font-brandon text-xl sm:w-[60%]'>We bieden behandelingen die niet alleen vandaag goed zijn, maar jarenlang meegaan.
Elke glimlach wordt ontworpen met aandacht voor duurzaamheid, behoud van natuurlijke weefsels
en het verminderen van toekomstige behandelbehoeften.</p>
    </section>

 <LazyBackground src={makeover} className='w-full sm:h-[800px]  sm:bg-center sm:bg-cover relative h-[300px] bg-cover bg-center'>

    </LazyBackground>
            <RevealOnScroll className='w-full sm:h-[800px] bg-[#1a1a1a] sm:p-10'>

            <h1 className='sm:w-full sm:font-brandonBold text-white uppercase sm:text-2xl'>Het Smile-Makeover Proces</h1>
    <div className='w-full mt-5 sm:flex sm:flex-row sm:justify-between sm:items-center'>
    <div className='sm:w-1/2 flex flex-col gap-8'>
                <h1 className='font-brandonBold sm:text-xl text-[#739298] uppercase'>Consultatie</h1>
                <p className='text-white font-brandon sm:text-lg'>Een volledige controle van mond, beet en röntgenfoto’s om jouw echte behoeftes te bepalen.</p>  
              
               
                <div className='flex flex-col gap-5'>
                <div>
                <h1 className='font-brandonBold sm:text-xl text-[#739298] uppercase'>-Voorbereiding</h1>
                    <p className='font-brandon text-white  text-xl'>Digitale scan of afdruk, keuze van vorm en kleur, en alle noodzakelijke voorbereidingen.</p>
                    </div>
                   <div>
                <h1 className='font-brandonBold sm:text-xl text-[#739298] uppercase'>-Behandeling</h1>
                    <p className='font-brandon text-white  text-xl'>De nauwkeurige uitvoering van de hoofdbehandeling — van lichte orthodontie tot restauraties of facings.</p>
                    </div>
                    <div>
                <h1 className='font-brandonBold sm:text-xl text-[#739298] uppercase'>-Eindcontrole</h1>
                    <p className='font-brandon text-white  text-xl'>Controle van alle details, bijtaanpassingen en zekerheid dat het resultaat natuurlijk oogt.</p>
                    </div>
                      <div>
                <h1 className='font-brandonBold sm:text-xl text-[#739298] uppercase'>-Eerste nacontrole</h1>
                    <p className='font-brandon text-white  text-xl'>Na enkele weken een korte controle om stabiliteit en gezondheid te waarborgen.</p>
                    </div>
                     <div>
                <h1 className='font-brandonBold sm:text-xl text-[#739298] uppercase'>-Periodieke follow-up</h1>
                    <p className='font-brandon text-white  text-xl'>Regelmatige controles om het resultaat jarenlang mooi en gezond te houden.</p>
                    </div>
                </div> 
    </div>


    <div className='w-[45%] sm:h-[600px] bg-[url("assets/photos/drMakeover.jpg")] sm:bg-center sm:bg-cover'>


    </div>

    </div>
    </RevealOnScroll>

    <BeforeAndAfter/>
    </Layout>
  )
}

export default SmileMakeover