import React from 'react';
import ButtonSection from '../../common/ButtonSection';
import {Pacifico} from "next/font/google";
import Image from 'next/image';
import OfferImage from "@/assets/images/offerImage.png"
const pacifico = Pacifico({
    weight: '400', // Pacifico only has one weight
    subsets: ['latin'],
  });

const OfferSection = () => {
    return (
        <>
        <div className='bg-[#F4F8FF] w-full px-[80px] py-10'>
            <div className='flex items-center justify-between bg-[#EEECFB] px-8 pt-2'>
                <div className='w-[60%]'>
                    <h1 className={`text-[#581FC1] text-[24px]  leading-10 ${pacifico.className}`}>Big Deal</h1>
                    <p className='text-[48px] text-black leading-[62.8px] mt-4 font-semibold'><span className='text-[#581FC1]'>30%</span> Off for New Customers</p>
                    <div className='mt-3'>
                        <ButtonSection shadow={false} />
                    </div>
                </div>
                <div className='w-[40%]'>
                    <div className='w-[95%]'>
                        <Image className='w-full h-[438px]' src={OfferImage} alt='offer' width={500} height={438} />
                    </div>

                </div>
            </div>

        </div>
            
        </>
    );
};

export default OfferSection;