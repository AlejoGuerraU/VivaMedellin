'use clien';
import React from 'react'
import RatingStars from '@/app/components/Moleculas/RatingStars/page'

const Page = () => {

    const handleRatingChange = (value: number) => {
        console.log('Calificación seleccionada:', value);
    };

    return (
        <div>
            <RatingStars onChange={handleRatingChange} />
        </div>
    )
}

export default Page