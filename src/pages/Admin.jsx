import React, { useState } from 'react'
import { postData } from '../services/bAfter'
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://mghjjzmyuuvrnydiaqcb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naGpqem15dXV2cm55ZGlhcWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTU1NDYsImV4cCI6MjA3ODYzMTU0Nn0.XW3RhwfjldSxEEZSjy7t783sz2LhShh4n-hcyEBJfnk"; // اینو از پروژه خودت بردار

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const Admin = () => {
    const [name,setName]=useState()
    const [number,setNumber]=useState()
    const [desc,setDesc]=useState()
    const [image,setImage]=useState()

    console.log(name);
    console.log(number);
    console.log(desc);
    console.log(image);

  const postDataHandler = async (e) =>{
    e.preventDefault();
    let imageUrl = null;

   if (image) {
    // ساخت اسم امن برای فایل
    const safeName = image.name
      
    const fileName = `${Date.now()}-${safeName}`;

    const { error } = await supabase.storage
        .from("patient-images")
        .upload(`uploads/${fileName}`, image);

    if (error) {
        alert("خطا در آپلود عکس");
        return;
    }

    // ذخیره فقط path امن
    imageUrl = `uploads/${fileName}`;
}

    const body = {
        name,
        phone: number,
        description: desc,
        image_url: imageUrl
    };

    await postData(body);
};

    
  return (
    <form onSubmit={postDataHandler} className='flex flex-col w-full justify-center items-center mt-20 gap-5'>
                <div className='w-1/3  border-gray-300'>
                    <input onChange={(e)=>setName(e.target.value)} className='p-2 border-[1px] border-gray-400 w-full' type='text' placeholder='patient-name'/>
                </div>
                <div className='w-1/3  border-gray-300'>
                    <input onChange={(e)=>setNumber(e.target.value)} className='p-2 border-[1px] border-gray-400 w-full' type='number' placeholder='patient-number'/>
                </div>
                <div className='w-1/3  border-1 border-gray-300 '>
                    <input onChange={(e)=>setDesc(e.target.value)} className='p-2 border-[1px] border-gray-400 w-full' type='text' placeholder='description'/>
                </div>
                <div className='w-1/3  border-1 border-gray-300'>
                <label>upload image</label>
                    <input onChange={(e)=>setImage(e.target.files[0])} className='p-2 border-[1px] border-gray-400 w-full' type='file' placeholder='insert-image'/>
                </div>
            <button className='w-[150px] p-2 bg-green-500 text-white'>submit</button>
    </form>
  )
}

export default Admin