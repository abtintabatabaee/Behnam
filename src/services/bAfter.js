import instance from "./instance";

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mghjjzmyuuvrnydiaqcb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naGpqem15dXV2cm55ZGlhcWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTU1NDYsImV4cCI6MjA3ODYzMTU0Nn0.XW3RhwfjldSxEEZSjy7t783sz2LhShh4n-hcyEBJfnk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const getPatients = async () => {
  const { data, error } = await supabase
    .from("patients")  // اسم جدول
    .select("*");      // همه ستون‌ها

  if (error) {
    console.log("Fetch error:", error);
    return [];
  }

  return data;
};
export const getPatientImageUrl = (filePath) => {
  if (!filePath) return "";
  
  // اگر باکت Public هست:
  const { publicUrl } = supabase
    .storage
    .from("patient-images")
    .getPublicUrl(filePath);

  return publicUrl;

  // اگر باکت Private هست، از Signed URL استفاده کن:
  // const { data } = await supabase
  //   .storage
  //   .from("patient-images")
  //   .createSignedUrl(filePath, 60); // 60 ثانیه اعتبار
  // return data.signedUrl;
};


const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naGpqem15dXV2cm55ZGlhcWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTU1NDYsImV4cCI6MjA3ODYzMTU0Nn0.XW3RhwfjldSxEEZSjy7t783sz2LhShh4n-hcyEBJfnk"; 
export const postData = async (body)=>{

    try {
        const url ="/patients"
        const response = await instance.post(url,body,{

             headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        }
        })
        return response
        
    } catch (error) {
        console.log(error);
        
    }
}