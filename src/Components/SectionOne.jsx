import React from 'react'
import Link from "next/link"

function SectionOne() {
  return (
    <div className="flex sticky relative w-full lg:h-auto lg:grid grid-cols-[120px_auto_120px] grid-rows-[320px_100px] border-b border-white/10">
      <div className="border-r border-white/10"></div>
            <div className="flex flex-col items-center" >
                <div className="border-red-100 mt-20 max-w-4xl">
                    <h1 className="text-6xl font-medium text-center">Data Center Management Software</h1>
                    <p className="text-center text-base mt-2 text-[#787882]">Increase uptime, reduce costs, automate operations, and stay compliant.</p>
                    <p className="text-center text-base mt-4 text-[#787882]">Built for colocations, data centers, and cloud provoders.</p>
                </div>
                </div>          
                <div className="border-l-1 border-white/10"></div>          
                <div className="border-t-1 border-r-1 border-white/10"></div>
                <div className="flex justify-center border-t-1 border-white/10 hover:cursor-pointer">
                  <Link href="https://calendly.com/margarita-centralaxis/30min" className="flex justify-center items-center border-1 border-white/10 w-2/6 h-14 bg-[#7869dc] -z-10 ">
                    Request Demo
                  </Link>
                
                </div>
                <div className="border-t-1 border-l-1 border-white/10"></div>
    </div>
  )
}

export default SectionOne
