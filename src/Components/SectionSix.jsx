import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SectionSix() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 px-6">
      <div className="relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-white/10 p-6 h-[250px]">
        <img className="absolute left-0 top-0 h-full w-full object-cover" style={{ filter: "blur(2px)" }} src="/background.png" alt="bg"/>
            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60 z-0"></div>

            <div className="relative z-20 flex flex-col items-center gap-2 text-center">
                <h4 className="text-center text-3xl font-medium text-white sm:max-w-full sm:px-0 md:text-4xl">Book a Demo</h4>
                <p className="mb-4 text-lg text-zinc-200 md:text-xl">See how CentralAxis can revolutionize your data center operations.</p>
                <div className="flex items-center gap-2">
                    <Link href="https://calendly.com/margarita-centralaxis/30min">
                        <span className="rounded bg-white px-4 py-2 text-base font-semibold text-black">Schedule Now</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSix
