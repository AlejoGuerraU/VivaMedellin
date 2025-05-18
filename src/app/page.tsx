import React from 'react'
import Navbar from '@/app/components/Organismos/Navbar/page'
import CajaComentarios from '@/app/components/Organismos/CajaComentarios/page'
import Vertical from '@/app/components/Organismos/Vertical/page'

const page = () => {
  return (
    <div >
      <Navbar />
      <div className=' flex justify-start items-start'>
      <Vertical />
      <CajaComentarios />
      </div>
    </div>
  )
}

export default page
