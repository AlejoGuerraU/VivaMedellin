'use client';
import React from 'react'
import Navbar from '@/app/components/Organismos/Navbar/page'
import CajaComentarios from '@/app/components/Organismos/CajaComentarios/page'
import Vertical from '@/app/components/Organismos/Vertical/page'
import BoxStars from '@/app/components/Organismos/BoxStars/page'

const page = () => {
  return (
    <div >
      <Navbar />
      <div className=' flex justify-start items-start'>
        <Vertical />
        <div className=' flex flex-col  justify-center items-center text-bank2 font-bold'>
          <span>Comentarios</span>
           <CajaComentarios />
           <BoxStars />
        </div>
       
      </div>
    </div>
  )
}

export default page
