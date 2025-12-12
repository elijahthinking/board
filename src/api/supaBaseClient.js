import { createClient } from '@supabase/supabase-js';

const supaBaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supaBaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// 키확인
if (!supaBaseUrl || !supaBaseAnonKey) {
  console.error('환경변수에러@ env 설정파일 확인 필요!')
}
const supabase = createClient(supaBaseUrl, supaBaseAnonKey);
export default supabase;