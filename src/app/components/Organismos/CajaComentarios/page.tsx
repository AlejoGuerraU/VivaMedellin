import React from 'react'
import Icon from '@/app/components/Atoms/Icon/page'

const Page = () => {
    return (
        <div className=' rounded-md mt-5 mr-5 ml-5 w-[1200px] text-bank2 bg-bank4 font-bold  border-[1px] border-[#043D74]'>

            <div className=' h-50  ml-1'>
                <div className=' flex justify-between'>
                    <div className=' flex flex-row gap-2'>
                        <Icon icon={'qlementine-icons:user-24'} />
                        <span>@Usuario_1 </span>
                    </div>
                    <div className=' flex justify-end'>
                        <button className=' cursor-pointer'><Icon icon={'ri:more-2-fill'} /></button>
                    </div>
                </div>
                <p className='mt-4 mb-6 text-sm font-normal'> Comentarios acerca del evento</p>

            </div>

            <div className='flex justify-end p-4'>
                <button className='text-sm font-semibold hover:underline'>
                    Responder
                </button>
            </div>

        </div>
    )
}

export default Page