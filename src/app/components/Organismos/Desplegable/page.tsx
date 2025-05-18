"use client";
import React, { useState } from 'react';
import Icon from '@/app/components/Atoms/Icon/page';
import NavTitle from '@/app/components/Atoms/NavTitle/page'

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <div className='flex flex-row ml-2 justify-between items-center bg-bank4'>
        <span> Selecciona</span>
        <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
          <Icon icon="material-symbols:arrow-drop-down-rounded" />
        </button>
      </div>

      {isOpen && (
        <div className='bg-white absolute shadow-md w-48 right-2 inset-x-10 top-40 rounded-md p-2'>
          <NavTitle title='home' link='/' />
          <NavTitle title='about' link='/' />
          <NavTitle title='contact' link='/' />
          <NavTitle title='services' link='/' />
          <NavTitle title='products' link='/' />
          <NavTitle title='blog' link='/' />
        </div>
      )}
    </div>
  );
};

export default Page;