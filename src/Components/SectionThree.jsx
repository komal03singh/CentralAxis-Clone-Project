import React from 'react'
import Card1Data from "@/Data/Card1Data";
import Card1 from "@/Components/Card1";

function SectionThree() {
  return (
    <div className="flex flex-col gap-10 container mx-auto px-6 py-14">
      <div className="flex flex-col items-center gap-3 self-center ">
        <h3 className="text-[#787882] bg-[#18181B] text-base font-medium px-3.5 pb-px min-h-7 rounded-full">Built for AI</h3>
        <h2 className="text-3xl font-medium md:text-4xl">Modernizing the Digital Backbone</h2>
        <p className=" text-[#787882] max-w-screen-md text-center text-lg font-light md:text-xl">Data center software (DCIM, BMS and EPMS) has stagnated. We&apos;ve built a better way.</p>
      </div>
      <div className="flex flex-col gap-6">
        {Card1Data?.map((data,index)=>(
          <Card1 key={index} heading={data.heading} content={data.content} ulList={data.ulList} videoUrl={data.videoUrl} vidPosition={data.vidPosition}/>
        ))}
              
      </div>
    </div>
  )
}

export default SectionThree
