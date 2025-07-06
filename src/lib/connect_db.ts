import { createClient } from '@supabase/supabase-js'

const superbaseUrl = process.env.REACT_APP_SUPABASE_URL
const superbaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const superbase = createClient(superbaseUrl,superbaseKey)

