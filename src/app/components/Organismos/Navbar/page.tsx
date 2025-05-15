import React from 'react'
import { HeroTitle } from '@/app/components/Atoms/Titles/page'

const Page = () => {
    return (
            <nav className='flex flex-row'>
                <div>
                    <a href="/Delete">
                        <img src="/mdi--account-circle.svg" alt="usuario" />
                    </a>
                </div>
                <div className='flex-1 items-center'>
                    <HeroTitle />
                </div>
            </nav>
        
    )
}

export default Page