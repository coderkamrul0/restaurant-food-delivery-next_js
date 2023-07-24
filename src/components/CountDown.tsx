'use client'
import React from 'react'
import Countdown from 'react-countdown'
const endingDate = new Date("2023-08-25")

const CountDown = () => {
  return (
    <Countdown date={endingDate} className='text-yellow-300 font-bold text-5xl'/>
  )
}

export default CountDown