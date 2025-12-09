import React from 'react'
import Layout from '../components/Layout'

const CosmeticDentistry = () => {
  return (
    <Layout>
                <div className='w-full relative bg-[url("assets/photos/cosmeticDentistry.jpg")] sm:h-[700px] sm:bg-center sm:bg-cover h-[450px] bg-center bg-cover'>
        <div className='absolute top-0 left-0 bg-black opacity-25 w-full h-full'></div>
        <div className='absolute w-full h-full flex flex-col justify-center items-center p-5 text-start gap-5 sm:w-1/3'>

            <h1 className='w-full text-white text-3xl font-bold'>De combinatie van technologie en vakmanschap</h1>
            <p className='w-full text-white font-brandon text-xl'>We werken met digitale scanners, nauwkeurige beeldvorming en moderne diagnostische tools.
Maar een belangrijk deel van het werk — zoals het vormgeven van tanden of het controleren van
contactpunten — gebeurt nog steeds met de hand en met vakmanschap.
Juist deze combinatie maakt het resultaat zo precies en betrouwbaar.</p>
        </div>
                </div>
                    <section className='w-full sm:p-10 sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-10 sm:mt-2 flex flex-col gap-10 p-10 justify-center items-center'>
                            <h1 className='sm:w-full font-bold uppercase text-2xl'>Diagnose vóór elke ingreep</h1>
                            <p className='sm:w-[60%] font-brandon text-lg'>Cosmetic dentistry is the business of smiles—after all, a brilliant smile is priceless. At the helm of this transformative field is Ben's Aesthetic, Dr. Behnam's visionary practice delivering the world’s most coveted and customized smiles.</p>
                            <p className='sm:w-[60%] font-brandon text-lg'>In TANDIS nemen we de tijd om een volledig beeld van je mond te krijgen voordat we iets doen.
We onderzoeken slijtage, ontstekingen, oude restauraties en hoe de tanden met elkaar samenwerken.
Pas wanneer alles duidelijk is, kiezen we de meest effectieve en minst invasieve behandeling.
Heldere uitleg. Doordachte keuzes.
Zorg zonder overbehandeling.</p>

                    </section>


                <div className='sm:w-full sm:flex sm:flex-row bg-black flex flex-col-reverse sm:p-1 p-5 gap-5'>
            <div className='sm:w-1/2 sm:flex sm:flex-col sm:items-start sm:justify-center sm:gap-5 sm:p-8 w-full flex flex-col justify-center items-start gap-8 p-8'>
                <h1 className='text-white sm:text-2xl uppercase font-bold sm:w-full w-1/2 text-2xl'>Vertaling naar het Nederlands
Een glimlach herstellen begint bij harmonie — van tandstand
tot mondgezondheid.</h1>
                <p className='font-brandon text-white sm:text-xl'>Bij TANDIS ontstaat een betere glimlach door twee elementen te combineren:
een correcte positie van de tanden en zorgvuldige behandelingen voor een gezonde mond.
Soms is orthodontie voldoende om orde en juiste contactpunten te creëren,
en soms kan een kleine restauratie de functie al sterk verbeteren.</p>
                <p className='font-brandon text-white sm:text-xl'>Wij kiezen alleen behandelingen die jouw mond écht gezonder maken en de werking ervan verbeteren.
Een glimlach die goed functioneert, ziet er vanzelf goed uit.</p>
            </div>

            {/* picture of dr working container */}
    <div className='sm:w-1/2 sm:h-[600px]  w-full h-[400px] sm:p-5'>

            <div className='sm:w-full sm:h-full bg-[url("assets/photos/drWorking.jpg")] sm:bg-center sm:bg-cover w-full h-full bg-center bg-cover'></div>
    </div>
                </div>

                    {/* antwerp another picture */}

                    <section className='w-full relative sm:h-[600px] h-[400px] bg-right bg-no-repeate bg-cover bg-[url("assets/photos/image1.jpeg")] sm:bg-bottom sm:bg-no-repeate sm:bg-cover'>

                    <div className='absolute top-0 left-0 bg-black w-full h-full opacity-25'></div>

                    <div className='absolute top-0 left-0 w-full h-full  sm:p-5 sm:flex sm:flex-col sm:gap-5 sm:justify-center sm:itmes-center flex flex-col justify-center items-center gap-5 p-5'>
                    <h1 className='font-brandonBold sm:text-3xl text-2xl text-white sm:text-center uppercase'>TANDIS Praktijk</h1>
                    <p className='text-white sm:text-xl text-lg text-center font-brandon sm:text-center'>TANDIS let op de details die je ogen niet zien, maar waar je glimlach van afhankelijk is.</p>

                    </div>


                    </section>
    </Layout>
  )
}

export default CosmeticDentistry