'use client';
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
    car: CarProps;

}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false);
    const carRent = calculateCarRent(city_mpg, year)


    return (
        <div className='car-card group'>
            <div className='car-card_-content'>
                <h2 className='car-card__content-title'>
                    {
                        make
                    }{model}
                </h2>
            </div>
            <p className='text-[32px] font-extrabold mt-6 flex '>
                <span className='self-start text-sm font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-sm font-medium'>
                    /day
                </span>
            </p>

            <div className='relative w-full h-40 object-contain my-3 '>
                <Image src={"/hero.png"} alt='car image' fill priority className='object-contain' />
            </div>
            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={"/steering-wheel.svg"} alt='steering-wheel' width={20} height={20} />
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={"/tire.svg"} alt='tire' width={20} height={20} />
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src={"/gas.svg"} alt='fas' width={20} height={20} />
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className='car-card__btn-container'>
                    <CustomButton title="View More" containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyle="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)} />
                </div>

            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard