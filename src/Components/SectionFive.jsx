import React from 'react'
import Card2Data from "@/Data/Card2Data";
import Card2 from "@/Components/Card2";

function SectionFive() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-0 lg:p-28  gap-10 lg:container lg:mx-auto py-14">
        <div className="h-full w-1/2 flex flex-col gap-3 items-start lg:pr-12">
            <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base bg-[#18181B] text-[#787882]">Built for Scale</h3>
            <h4 className=" text-left text-3xl font-medium md:text-4xl max-w-md">Dynamic Resource Management</h4>
            <p className=" max-w-screen-md text-pretty text-left text-lg font-light md:text-xl text-[#787882]">Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.</p>
        </div >
        
        <div className="w-1/2 h-full flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
            {Card2Data.map((data,index)=>(
                <Card2 key={index} heading={data.heading} content={data.content} imageUrl={data.imageUrl}/>
            ))}
        </div>
    </div>
  )
}

export default SectionFive
