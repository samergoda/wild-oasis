
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://cbmfadymjsjedtjkgpta.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNibWZhZHltanNqZWR0amtncHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNzM1NjYsImV4cCI6MjAyNTc0OTU2Nn0.uJOCxnFLD63YQkY2lESq8XRvfgyf3JSnUMH6yQyZIM8'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase