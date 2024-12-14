import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Hero = () => {
  
    const navigate = useNavigate()
    const bmicalcu = () => {
        
        navigate('/CalcBm')
        toast.success("calculate please")
        
    }
    const emlsend = () => {
      
      navigate('/emailsend')
      toast.success("send please")
      
  }
  return (
    <section className='hero'>
      <div className='content'>
        <div className='title'>
          <h1>FITNESS</h1>
          <h1>FREAK</h1>
          <h1>GYM</h1>
        </div>
        <div className='sub-title'>
          <p>BY -: SHAKEEL AHEMAD KHAN </p>
          <p>JALALABAD (SPN)</p>
        </div>
        <div className='buttons'>
          <button onClick={bmicalcu}>See your fitness</button>
          <button onClick={emlsend}>Contact us!!!</button>
        </div>
      </div>

      
    </section>
  )
}

export default Hero
