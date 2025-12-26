import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaMicroscope } from "react-icons/fa";
import { FaUsers } from 'react-icons/fa6';
import { HiBeaker } from "react-icons/hi";
import { PiBagSimpleFill } from "react-icons/pi";

const Model:React.FC = () => {
  const {t} = useTranslation("Intro") 
  return (
    <section className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-start bg-cover"
        style={{
          backgroundImage: 'url(/images/original/news1.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) contrast(1.2) saturate(1.1)',
          
        }}
      />
      
      <div className="relative z-10 h-full flex items-end justify-center py-8">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className='bg-[#f0f0f07e] backdrop-blur-[1px] p-1 sm:p-4 flex flex-col items-center'>
              <FaMicroscope size={40} color='#000'/>
              <p className='text-md font-semibold text-black'>{t("icon1")}</p>
              <span>8</span>
            </div>
            <div className='bg-[#f0f0f07e] backdrop-blur-[1px] p-1 sm:p-4 flex flex-col items-center'>
              <HiBeaker size={40} color='#000'/>
              <p className='text-md font-semibold text-black'>{t("icon2")}</p>
              <span>7</span>
            </div>
            <div className='bg-[#f0f0f07e] backdrop-blur-[1px] p-1 sm:p-4 flex flex-col items-center'>
              <PiBagSimpleFill size={40} color='#000'/>
              <p className='text-md font-semibold text-black'>{t("icon3")}</p>
              <span>76</span>
            </div>
            <div className='bg-[#f0f0f07e] backdrop-blur-[1px] p-1 sm:p-4 flex flex-col items-center'>
              <FaUsers size={40} color='#000'/>
              <p className='text-md font-semibold text-black'>{t("icon4")}</p>
              <span>44</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model
