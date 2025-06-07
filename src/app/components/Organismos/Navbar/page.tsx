import React from 'react'
import Icon from '@/app/components/Atoms/Icon/page'

const Page = () => {
  return (
    <div>
      <nav
        className='flex justify-between items-center h-20 w-full bg-white px-4 md:px-8 shadow-2xs'
        role="navigation"
        aria-label="Main navigation"
      >
        <picture>
          <img src="/logo.png" alt="logo" className="h-10 w-auto object-contain" />
        </picture>

        <div className='flex items-center text-bank2 font-bold gap-2'>
          <span>@Usuario_1</span>         
           <Icon icon={'qlementine-icons:user-24'} />
        </div>
      </nav>

      <hr className="m-0 p-0 border-0 h-px bg-gray-300" />
    </div>
  )
}

export default Page
