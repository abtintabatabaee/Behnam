import React from 'react'
import Layout from '../components/Layout'
import smile from "../assets/photos/smile.jpg"
import { Link } from 'react-router-dom'
import apa2 from '../assets/photos/ChatOn-image.jpg'
import apa1 from '../assets/photos/ChatOn-image-(1).jpg'
import LazyBackground from '../components/LazyBackground'
import porcelainVeneer from '../assets/photos/porcelainVeneer.jpg'
import tooth from '../assets/photos/tooth.jpg'
const PorcelainVeneers = () => {
  return (
    <Layout>
 <LazyBackground src={porcelainVeneer} className='w-full relative   sm:h-[700px] bg-center  h-[450px]  bg-cover'>
        <div className='absolute top-0 left-0 bg-black opacity-25 w-full h-full'></div>
        <div className='absolute w-full h-full flex flex-col justify-center items-center p-5 text-start gap-5 sm:w-1/2'>

            <h1 className='w-full text-white text-3xl font-bold'>Herstelde tanden die er precies zo uitzien als echte tanden</h1>
            <p className='w-full text-white font-brandon text-xl'>De restauraties van TANDIS worden zo ontworpen en uitgevoerd
dat ze volledig opgaan in jouw natuurlijke glimlach.
Het resultaat is niet alleen duurzaam en functioneel,
maar ook visueel niet te onderscheiden van de omringende tanden..</p>
        </div>
                </LazyBackground>
{/* quotation section */}
                <section className='w-full sm:flex sm:flex-row sm:mt-10 sm:mb-10 sm:p-5 sm:h-[400px] flex flex-col mt-10 mb-10'>
                        <div className='sm:border-none sm:w-1/2 sm:flex sm:flex-col sm:gap-5 sm:p-5 w-full flex flex-col gap-5 border-b-[1px] border-[#1a1a1a] p-8 text-lg'>
                            <h1 className='font-brandonBold sm:text-3xl'>TANDIS keramische facings — natuurlijke esthetiek met
klinische precisie</h1>
                            <p className='font-brandon sm:text-xl'>Bij TANDIS is een facing geen simpel mooi schildje;
het is een zorgvuldige restauratie die moet passen bij uw tanden, uw tandvlees en uw kauwfunctie.
Onze facings worden vervaardigd met hoogwaardige keramiek en verfijnde technieken,
zodat kleur, transparantie en vorm niet te onderscheiden zijn van echte tanden—
niet té wit, niet kunstmatig.</p>
                            <p className='font-brandon sm:text-xl'>Elke facing wordt ontworpen met een grondige analyse van de beet, de contactpunten en de
mondgezondheid,
om een resultaat te bieden dat jarenlang natuurlijk blijft en correct functioneert.</p>
                            <p className='font-brandon sm:text-xl'>Echte esthetiek krijgt waarde wanneer zij is gebouwd op de juiste behandeling.</p>
                        </div>

                        <div className='sm:w-1/2 w-full  sm:flex sm:flex-col sm:justify-center sm:items-start sm:p-5  flex flex-col p-5'>   
                        <div className=' sm:border-l-[1px] sm:border-[#1a1a1a] sm:p-7 sm:flex sm:flex-col sm:gap-8 w-full p-5 flex flex-col gap-8'>
                        <q className='font-brandonItalic font-bold text-3xl ' cite='https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk'>
                            I always say the best veneers are undetectable; they look, feel, and function like natural teeth.

                        </q>
                                <p className='font-brandon sm:text-2xl'>-Dr.Behnam</p>
                                </div>

                        </div>

                </section>
                {/* tooth pic */}
                <section className='w-full'>
                        <LazyBackground src={tooth} className='w-full sm:h-[700px] sm:bg-auto  sm:bg-right  z-0 relative h-[800px]'>

                 <div className='w-full h-full absolute top-0 left-0 z-5 p-5'>

                            <div className='sm:w-1/2 w-full flex flex-col gap-5 p-5 sm:border-b-[1px] sm:border-white'>
                            <h1 className='text-white font-brandonBold sm:text-3xl text-2xl'>De voordelen van TANDIS keramische facings</h1>
                            <p className='text-white font-brandon sm:text-xl'>Bij TANDIS is een facing geen puur esthetisch laagje—
het is een precisiebehandeling die gezondheid, functie en een natuurlijke uitstraling tegelijk verbetert.</p>
<h1 className='font-brandonBold sm:text-3xl text-2xl text-white'>Met de keramische facings van TANDIS kunt u:</h1>
                            <ul className='font-brandon text-white p-5 list-disc sm:text-xl'>
                                <li>Verkleuring, breukjes, spleetjes en standafwijkingen corrigeren</li>
                                <li>De kauwfunctie en een gezonde beet herstellen</li>
                                <li>Het tandvlees en omliggende weefsels in een betere conditie brengen</li>
                                <li>Een natuurlijk, duurzaam en volledig geïntegreerd resultaat bereiken</li>
                            </ul>
                            </div>


                            <div className='sm:w-1/2 w-full p-5 flex flex-col sm:gap-8 gap-5'>
                                <p className='text-white sm:text-3xl text-2xl  font-brandon'>Ontworpen om jarenlang mooi én functioneel te blijven</p>
                                <p className='font-brandon text-white sm:text-xl'>Onze facings worden ontwikkeld om hun natuurlijke uitstraling te behouden
en correct te functioneren zonder onnodige belasting of slijtage.</p>
                            </div>

                        </div>
                        </LazyBackground>
                </section>

                {/* girl with smile */}
                <section className='w-full bg-[#1a1a1a] p-5 sm:p-0'>
                    <div className='w-full relative sm:h-[800px]'>
                            <img className='w-full h-full object-cover' src={smile} alt='smily-girl'/>
                            <div className='sm:w-1/2 w-full sm:absolute sm:top-[30%] sm:right-10 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-8 flex flex-col items-center justify-center gap-5 p-5'>
                                <h1 className='text-white font-brandonBold text-2xl uppercase'>Bij TANDIS is uw glimlach het resultaat van expertise, niet van toeval.</h1>
                                <p className='text-white font-brandon text-xl'>Ons team werkt met jarenlange klinische ervaring en een sterke focus op nauwkeurige diagnostiek.
Elke behandeling begint met een grondige analyse van uw mondgezondheid en wat u écht nodig hebt.
We voeren esthetische behandelingen alleen uit wanneer de functie en gezondheid volledig in orde zijn.
Zo ontstaat een glimlach die natuurlijk oogt, correct functioneert
en dankzij vakmanschap — niet snelle oplossingen — jarenlang mooi blijft.</p>
                               {/* <div className='text-white  font-brandonBold  uppercase sm:hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-white hover:border-none group inline-block'>LEARN ABOUT THE SMILE MAKEOVER PROCESS
                                          <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                                          </Link>
                                            
                                          </div> */}
                            </div>
                    </div>
                </section>

                <section className='sm:p-5 sm:h-[900px] sm:flex sm:flex-row sm:items-start sm:justify-center sm:gap-10 p-5 flex flex-col w-full'>
                            <div className='sm:w-[45%] flex flex-col  sm:h-[700px] sm:relative p-5'>
                                <div className='sm:w-full sm:h-full relative'>
                                    <img src={apa1} alt='apa' className='h-full w-full object-cover object-center'/>
                                     <div className='absolute w-full h-full top-0 left-0 bg-black opacity-35'></div>
                                </div>
                                <div className='sm:absolute sm:top-[85%] sm:h-[200px] sm:left-16 sm:p-10 bg-white sm:w-[80%] w-full flex flex-col justify-start items-start gap-5 p-5'>
                                    <h1 className='sm:w-full text-2xl font-brandonBold sm:text-start uppercase'>Het zijn de kleine details die het verschil maken</h1>
                                    <p className='sm:w-full sm:text-lg font-brandon sm:text-start'>Bij TANDIS controleren we elk contactpunt, elke lijn en elke millimeter.Die precisie zorgt voor een resultaat dat niet alleen mooi is, maar vooral duurzaam en comfortabel blijft.</p>
                                      <div className='font-brandonBold  uppercase sm:hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-black hover:border-none group inline-block'>view more stories
                                          <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                                          </Link>
                                            
                                          </div>
                                </div>
                            </div>

                             <div className='sm:w-[45%] flex flex-col  sm:h-[700px] relative p-5'>
                               <div className='sm:w-full sm:h-full relative'>
                                    <img src={apa2} alt='apa2' className='h-full w-full object-cover object-center'/>
                                     <div className='absolute w-full h-full top-0 left-0 bg-black opacity-35'></div>
                                </div>
                                <div className='sm:absolute sm:top-[85%] sm:h-[200px] sm:left-16 sm:p-10 bg-white sm:w-[80%] w-full flex flex-col justify-start items-start gap-5 p-5'>
                                    <h1 className='sm:w-full text-2xl font-brandonBold sm:text-start uppercase'>Bij TANDIS betekent mondzorg ook zelfzorg.</h1>
                                    <p className='sm:w-full sm:text-lg font-brandon sm:text-start'>Ons gespecialiseerde team is opgeleid om je te begeleiden in een persoonlijk behandeltraject;een traject dat zowel je mondgezondheid versterkt als je zelfvertrouwen verhoogt.</p>
                                      <div className='font-brandonBold  uppercase sm:hover:text-[#A2D1DC] '><Link className='relatrive border-b-[1px] border-black hover:border-none group inline-block'>view more stories
                                          <span className='block h-[2px] bg-[#A2D1DC] mt-1 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>
                                          </Link>
                                            
                                          </div>
                                </div>
                            </div>

                </section>

    </Layout>
  )
}

export default PorcelainVeneers