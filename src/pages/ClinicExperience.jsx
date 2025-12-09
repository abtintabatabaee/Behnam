import React from 'react'
import Layout from '../components/Layout'
import BeforeAndAfter from '../components/BeforeAndAfter'

const ClinicExperience = () => {
  return (
    <Layout>

    <section className='w-full bg-[#1a1a1a] flex flex-col  sm:p-5'>
    <h1 className='w-full font-brandonBold text-2xl text-white text-start p-5 uppercase'>Welkom bij TANDIS Dental Clinic</h1>
    <ul className='sm:w-1/2 w-full flex flex-col gap-5 p-5'>
      <li className='font-brandon text-xl text-[#A2D1DC]'>Bij TANDIS is tandheelkundige zorg meer dan een behandeling—
het is een professionele, nauwkeurige en betrouwbare ervaring.</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'>Ons team, met jarenlange klinische expertise en gebruik van de nieuwste technologie,
biedt zorg die volledig gericht is op juiste diagnose, nauwkeurig werk en de lange-termijngezondheid
van uw mond.</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'>We hebben een rustige, respectvolle en goed georganiseerde omgeving gecreëerd
waarin elke patiënt zich ondersteund voelt door een ervaren en zorgzaam team.</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'>✔ Zorg voor het hele gezin — voor alle leeftijden</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'>✔Een rustige, professionele en moderne omgeving</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'>✔Een ervaren team ,toegewijd aan correcte en duurzame
behandelingen</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'>Bij TANDIS geloven we dat een goede tandheelkundige ervaring begint met wetenschappelijke zorg, een juiste diagnose en een professioneel team.</li>
      <li className='font-brandon text-xl text-[#A2D1DC]'></li>
    </ul>

    </section>
                <div className='w-full sm:h-[700px] h-[500px] bg-cover bg-center sm:bg-cover sm:bg-center bg-[url("assets/photos/clinicBg.jpg")] relative'>
                    <div className='absolute w-full h-full bg-[#1a1a1a] opacity-35'></div>
                    <div className='absolute top-0 w-full h-full left-0 p-5 flex flex-col items-start justify-center gap-5'>
                        <h1 className='uppercase text-white text-2xl font-brandonBold'>Where Excellence Meets Innovation</h1>
                        <p className='text-white font-brandon text-xl'>Ben’s Aesthetic stands as the premier dental practice for desire-driven care and transformative outcomes.</p>
                    </div>

                 
                </div>
                   <div className='sm:w-1/2 w-full flex flex-col gap-3 p-5 font-brandon text-lg'>
                            <h1 className='font-brandonBold sm:text-2xl  uppercase'>Over de TANDIS-ervaring</h1>
                            <p>Bij TANDIS voel je meteen het verschil.</p>
                            <p>Een nieuwe, moderne praktijk waar zorg persoonlijk, precies en ontspannen wordt aangeboden.</p>
                            <p>Elke behandeling — van smile-design tot algemene tandheelkunde — wordt volledig op jou afgestemd.</p>
                            <p>Dat alles in een frisse, rustige omgeving met de nieuwste technologie.</p>
                            <p>Eenvoudige, duidelijke en persoonlijke tandheelkunde.</p>

                    </div>
                    <div className='w-full bg-[#1a1a1a] sm:flex sm:flex-row flex flex-col p-8 sm:p-8'>
                    <div className='sm:w-1/2 w-full sm:flex sm:flex-col sm:gap-5 sm:p-5 flex flex-col gap-5 p-5'>
                      <div>
                        <h1 className='uppercase text-white sm:text-2x text-2xl mb-3 sm:mb-1 font-brandonBold'>Bij TANDIS begint schoonheid met de juiste zorg</h1>
                        {/* <p className='text-white font-brandon'>At Ben's Aesthetic, we continually challenge the status quo, finding new ways to improve our treatment plans, promote oral health and elevate the world of dentistry.</p> */}
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>Eerst gezondheid, daarna esthetiek</h1>
                        <p className='text-white font-brandon'>Met nauwkeurige restauraties, digitale diagnostiek en hoogwaardige behandelingen bouwen we eerst aan een gezonde basis — daarna creëren we een mooie glimlach.</p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>Een gevoel van vertrouwen.</h1>
                        <p className='text-white font-brandon'>We leggen elke stap helder uit. Niets blijft onduidelijk.
Samen bespreken we de mogelijkheden en nemen we beslissingen in overleg.</p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>Natuurlijke en duurzame resultaten.</h1>
                        <p className='text-white font-brandon'>Onze focus ligt op echte schoonheid: een glimlach die past bij jouw gezicht, gezond blijft en de natuurlijke tanden respecteert.</p>
                      </div>
                       <div>
                        <h1 className='uppercase text-[#A2D1DC] sm:text-2xl font-brandonBold'>begeleiding tijdens het hele traject.</h1>
                        <p className='text-white font-brandon'>De behandeling is niet het einde — het is het begin van blijvende zorg en opvolging.</p>
                      </div>

                    </div>
                    <div className='sm:w-1/2  sm:h-[600px] w-full h-[300px] bg-center bg-cover  bg-[url("assets/photos/unitPic.jpg")]'></div>

                    </div>
                    <BeforeAndAfter/>

    </Layout>
  )
}

export default ClinicExperience