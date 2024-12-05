import React from 'react'
import homeSrc from'/public/about.jpg'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'about',
}
export default function Page() {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0 -z-10'>
        <Image src={homeSrc} fill style={{objectFit:'cover'}} alt='home img'/>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-950'></div>
      </div>
      <div className='flex justify-center pt-96'>
        <h1 className='text-white text-6xl'>About Us</h1>
      </div>
    </div>
  )
}