import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://qkjeqytfymzdslhslqpk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFramVxeXRmeW16ZHNsaHNscXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMzY3MjAsImV4cCI6MjA1OTkxMjcyMH0.u7RiwEY2A1jlhCXOTGBE36jg9SMHFRWWtp4TPrkijNc"
);

async function tes() {
    const { data, error } = await supabase.from("guru").select();

    console.log(data);
}

tes();

export { supabase };

// Karena disini menggunakan ESM, jadi selalu gunakan type="module" di HTML ketika mengimport script
