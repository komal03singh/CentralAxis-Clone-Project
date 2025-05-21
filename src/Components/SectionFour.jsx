import React from 'react'
import Link from "next/link"

function SectionFour() {
  return (
    <div className='container mx-auto px-6 py-14'>
        <div className="bg-[#151021] flex flex-col lg:flex-row rounded-xl gap-9 p-6 lg:justify-between lg:p-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-medium lg:text-4xl">We&apos;ve Built the Future of Data Centers</h1>
                <p className="text-[#787882] text-lg lg:text-xl">Contact our team for a demo</p>
            </div>

            <div className="flex flex-col gap-3 justify-center items-center">
                <Link href={""} className=" px-3.5 text-sm font-normal md:px-5 bg-[#8172EE] rounded-full p-1.5">Set Up a Time</Link>
                <Link href={""} className="px-3.5 text-sm font-normal md:px-5 border-white/10 rounded-full p-1.5 bg-[#27272A]">Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default SectionFour
