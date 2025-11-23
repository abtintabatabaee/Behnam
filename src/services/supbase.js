import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mghjjzmyuuvrnydiaqcb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naGpqem15dXV2cm55ZGlhcWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTU1NDYsImV4cCI6MjA3ODYzMTU0Nn0.XW3RhwfjldSxEEZSjy7t783sz2LhShh4n-hcyEBJfnk"; // کلید پروژه خودت

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const getSignedUrl = async (filePath) => {
  if (!filePath) return null;

  const { data, error } = await supabase
    .storage
    .from("patient-images")
    .createSignedUrl(filePath, 3600); // اعتبار 1 ساعت

  if (error) {
    console.log("Error creating signed URL:", error);
    return null;
  }

  return data.signedUrl;
};
