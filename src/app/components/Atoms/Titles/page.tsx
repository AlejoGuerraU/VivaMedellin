import React from 'react'
interface Indexprops {
    title: string;  
}

const HeroTitle = ({title=''}:Indexprops) => {
  return (
    <h1 className=' flex justify-center text-bank2 w-full font-bold'>{title}</h1>
  )
}
const MediumTitle = ({title=''}:Indexprops) => {
  return (
    <h2 className='flex justify-center text-bank2 w-full font-bold'>{title}</h2>
  )
}
const SubTitle = () => {
  return (
    <h3>subtitle</h3>
  )
}

export {HeroTitle, MediumTitle, SubTitle}