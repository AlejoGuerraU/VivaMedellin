'use client';

import React, { useState } from 'react'
import Stars from '@/app/components/Atoms/Stars/page'

const Page = ({ max = 5, onChange }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleClick = (value: React.SetStateAction<number>) => {
        setRating(value);
        if (onChange) onChange(value); // para comunicar a nivel superior si es necesario
    };

    return (
        <div className="flex space-x-1">
            {[...Array(max)].map((_, index) => {
                const value = index + 1;
                return (
                    <Stars
                        key={value}
                        filled={value <= (hoverRating || rating)}
                        onClick={() => handleClick(value)}
                        onMouseEnter={() => setHoverRating(value)}
                        onMouseLeave={() => setHoverRating(0)}
                    />
                );
            })}
        </div>
    )
}

export default Page