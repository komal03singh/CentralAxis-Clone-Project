import React from 'react'
import Image from "next/image";


function Card1({heading,content,ulList=[],videoUrl}) {

  return (
    <div className='flex min-h-96 w-full rounded-lg border border-white/10 bg-[#18181B] '>

        <div className='flex flex-col gap-8 p-10 pt-10 md:flex-1 md:p-10 w-1/2'>
             <div className='flex flex-col items-start gap-2'>
              <h2 className='text-2xl font-medium md:text-3xl'>{heading}</h2>
              <p className='font-normal md:text-lg text-[#A1A1AA]'>{content}</p>
             </div>
             <ul className='flex flex-col items-start gap-3 pl-2 md:text-lg'>
              {ulList?.map((List,index)=>(
                <li className='flex items-center gap-4 font-normal text-[#A1A1AA]' key={index}>

                  <Image className='w-6 h-6 bg-[#787882] rounded-full' src="/tick.svg" alt="" />

                  
                  
                  {List}</li>
              ))}
            </ul>
        </div>
           
        <div className='w-1/2 flex justify-center items-center'>
          <div className='p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]'> 
            <video autoPlay muted loop src={videoUrl}></video>
          </div>
        </div>
    </div>
  )
}

export default Card1
