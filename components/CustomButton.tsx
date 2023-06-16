'use client';
import { customButtonProps } from '@/types';
import React from 'react'


const CustomButton = ({title,containerStyles, handleClick, btnType}:customButtonProps) => {
    return (
        <div>
            <button disabled={false} type={btnType} className={`custom-btn ${containerStyles} `} onClick={handleClick}>
               <span className={`flex-1`}>
                {title}
               </span>
            </button>
        </div>
    )
}

export default CustomButton