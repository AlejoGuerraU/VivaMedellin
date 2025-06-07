import React from 'react'
import Icon from '@/app/components/Atoms/Icon/page'

const Page = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
    const iconName = filled ? "solar:star-bold" : 'solar:star-line-duotone';
    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="text-yellow-500 transition-transform hover:scale-110"
        >
            <Icon icon={iconName} />
        </button>
    );
}

export default Page