import React from 'react'
import Image from 'next/image'

function Card2( {heading, content, imageUrl} ) {
  return (
    <div className='flex p-4 w-[280px] flex-col gap-4 px-6 lg:flex-row lg:gap-6 bg-[#18181B] lg:w-full lg:p-5 lg:px-0 rounded-lg border border-white/10'>
        <div className='rounded-full p-4 flex items-center justify-center m-4 bg-amber-50'>
          <Image height={30} width={30} src={imageUrl} alt="svgs" />
        </div>

        <div className='flex flex-col items-start gap-1'>
          <h2 className='text-lg font-medium'>{heading}</h2>
          <p className='text-[#787882]'>{content}</p>

        </div>

      </div>
      
  )
}

export default Card2
