import { useEffect, useState } from "react"
import { getPatients } from "../services/bAfter";
import { createClient } from "@supabase/supabase-js";
import { getSignedUrl } from "../services/supbase";



const BeforeAndAfter = () => {
const SUPABASE_URL = "https://mghjjzmyuuvrnydiaqcb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naGpqem15dXV2cm55ZGlhcWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTU1NDYsImV4cCI6MjA3ODYzMTU0Nn0.XW3RhwfjldSxEEZSjy7t783sz2LhShh4n-hcyEBJfnk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

 const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPatients();

      // برای هر بیمار لینک عکس signed URL بساز
      const patientsWithImages = await Promise.all(
        data.map(async (p) => {
          const imageUrl = p.image_url ? await getSignedUrl(p.image_url) : null;
          return {
            ...p,
            imageUrl,
          };
        })
      );

      setPatients(patientsWithImages);
    }

    fetchData();
  }, []);


  console.log({"this is data":patients});
 
  


  return (
    <div className='w-full mt-5 sm:p-1 p-2'>
                <h1 className='w-full text-center font-brandonBold text-xl'>Waar Esthetiek en Duurzame Gebitsgezondheid Samenkomen</h1>
                <p className='w-full text-center font-brandon text-lg'>Tandis combineert verfijnde esthetiek met geavanceerde mondgezondheid, voor natuurlijk evenwichtige en gezonde glimlachen met een tijdloze uitstraling.</p>
                <div className='sm:w-[80%] sm:m-auto flex flex-wrap justify-center items-center'>
                  {patients?.map(elem=>
                  
                    <div key={elem.id} className="mb-6  p-4 rounded">

                         
                          <img className="w-[300px] h-[300px] object-cover" src={elem.imageUrl} alt=""/>

                          </div>
                  )}
                </div>


    </div>
  )
}

export default BeforeAndAfter