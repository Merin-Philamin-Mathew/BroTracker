import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/admin/login')
    })
  return (
    <div>
      
    </div>
  )
}

export default Home
