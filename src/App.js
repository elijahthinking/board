import React, { useEffect } from 'react'
import {supabase} from './api/supaBaseClient.js'

const App = () => {
  useEffect(() => {
    // supabase 테스트
    //select * from users;
    const checkConnection = async () => {
      const result = await supabase.from('users').select('*')
      console.log(result)
    }
  }, [])


  return (
    <div>App</div>
  )
}

export default App