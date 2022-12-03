import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdpzyoqjxbdafrnkqkat.supabase.co';
const supabaseAnonKey = '   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkcHp5b3FqeGJkYWZybmtxa2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwMjk2OTAsImV4cCI6MTk2MzYwNTY5MH0.jfrpxO12Cg0jnNqyvOKlci_jqz7pHE7Pik0m2OSPBmU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
