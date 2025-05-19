"use client";

import Card1 from "@/Components/Card1";
import Card1Data from "@/Data/Card1Data";
import Image from "next/image";
import Link from "next/link";;

export default function Home() {


  return (
    <>
      <nav className="flex sticky border-white/10 top-0 bg-black/40 backdrop:blur-xl justify-center items-center border-b">
        <div className="container  flex justify-between items-center h-16 py-4">
          <div className="flex items-center w-fullgap-1 py-2 ">
            <Link href="/">
              <Image className="p-2 w-14 h-15" src="logo.webp" alt="logo" />
            </Link>
            <Link className="text-2xl font-semibold" href="/">CentralAxis</Link>
          </div>

          <div className="flex font-medium text-sm space-x-6">
            <div className="group relative py-4">
              <button className=" hover:cursor-pointer transition-colors group-hover:text-foreground/80" >Data Center Infrastructure Management<span className="ml-1">▼</span></button>
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out flex flex-col absolute right-0 mt-2 shadow-lg p-4 rounded-md bg-black border border-white/10 w-69 gap-4 z-40 ring-1 ring-border ring-opacity-5">
                      <Link href="" className="hover:text-foreground/80">Monitoring Devices</Link>
                      <Link href="" className="hover:text-foreground/80">Asset Tracking</Link>
                      <Link href="" className="hover:text-foreground/80">Network Management</Link>
                      <Link href="" className="hover:text-foreground/80">Change Management</Link>
                      <Link href="" className="hover:text-foreground/80">Colocation Management</Link>
                      <Link href="" className="hover:text-foreground/80">Data Center Planner</Link>
                      <Link href="" className="hover:text-foreground/80">Firmware Management</Link>
                      <Link href="" className="hover:text-foreground/80">IP Address Management</Link>
                      <Link href="" className="hover:text-foreground/80">Customer Portal</Link>
                      <Link href="" className="hover:text-foreground/80">Custom Insights</Link>
                      <Link href="" className="hover:text-foreground/80">Custom Data Center Solutions</Link>
                    </div>
            </div>
            <div className="group relative py-4">
              <button className=" hover:cursor-pointer transition-colors group-hover:text-foreground/80" >Intelligence Solutions<span className="ml-1">▼</span></button>
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out flex flex-col absolute right-0 mt-2 shadow-lg p-4 rounded-md bg-black border border-white/10 w-69 gap-4 z-40 ring-1 ring-border ring-opacity-5">
                      <Link href="" className="hover:text-foreground/80">Digital Twins</Link>
                      <Link href="" className="hover:text-foreground/80">Smart Power Mapping</Link>
                      <Link href="" className="hover:text-foreground/80">Predictive Failure and Alerting</Link>
                      <Link href="" className="hover:text-foreground/80">Smart Control Systems</Link>
                    </div>
            </div>
            <div className="group relative py-4">
              <button className=" hover:cursor-pointer transition-colors group-hover:text-foreground/80" >Data Center Compliance<span className="ml-1">▼</span></button>
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out flex flex-col absolute right-0 mt-2 shadow-lg p-4 rounded-md bg-black border border-white/10 w-69 gap-4 z-40 ring-1 ring-border ring-opacity-5">
                      <Link href="" className="hover:text-foreground/80">DCOI Compliance</Link>
                      <Link href="" className="hover:text-foreground/80">(EU) 2023/1791</Link>
                      <Link href="" className="hover:text-foreground/80">EN 50600</Link>
                      <Link href="" className="hover:text-foreground/80">LEED Certification</Link>
                      <Link href="" className="hover:text-foreground/80">ISO/IEC 30134-2</Link>
                      <Link href="" className="hover:text-foreground/80">(EPA) ENERGY STAR</Link>
                      <Link href="" className="hover:text-foreground/80">European Commission Joint Research Centre (JRC)</Link>
                    </div>
            </div>
            <div className="group relative py-4">
              <button className=" hover:cursor-pointer transition-colors group-hover:text-foreground/80" ><span className="ml-1">▼</span>Sustainability Blog</button>
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out flex flex-col absolute right-0 mt-2 shadow-lg p-4 rounded-md bg-black border border-white/10 w-69 gap-4 z-40 ring-1 ring-border ring-opacity-5">
                      <Link href="" className="hover:text-foreground/80">Energy Efficiency</Link>
                      <Link href="" className="hover:text-foreground/80">Stranded Energy Map</Link>
                      <Link href="" className="hover:text-foreground/80">Environmental Product Declaration</Link>
                      <Link href="" className="hover:text-foreground/80">Renewables Integration</Link>
                      <Link href="" className="hover:text-foreground/80">Power Resource Management</Link>
                  </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex flex-col relative h-auto w-full -z-10 ">
        <section className="relative w-full lg:h-auto grid grid-cols-[120px_auto_120px] grid-rows-[320px_100px] border-b border-white/10">
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
          <div className="flex justify-center border-t-1 border-white/10">
            <Link href="#" className="flex justify-center items-center border-1 border-white/10 w-2/6 h-14 bg-[#7869dc] -z-10">
              Request Demo
            </Link>
          
          </div>
          <div className="border-t-1 border-l-1 border-white/10"></div>
        </section>

        <section className="py-14 flex flex-col items-center">
          <h4 className="text-[#787882]">Seamless integrations with any data center hardware</h4>
          <div className="mt-8 p-4 overflow-hidden">
            <div className="flex gap-14 animate-[var(--animate-scroll)]">
              <Image className="w-32 h-20" src="/logos/nvidia.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/amd.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/cisco.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/dell.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/hp.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/intel.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/lenovo.svg" alt="nvidia logo" />
              <Image className="w-28 h-16" src="/logos/schneider.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/supermicro.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/nvidia.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/amd.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/cisco.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/dell.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/hp.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/intel.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/lenovo.svg" alt="nvidia logo" />
              <Image className="w-28 h-16" src="/logos/schneider.svg" alt="nvidia logo" />
              <Image className="w-32 h-20" src="/logos/supermicro.svg" alt="nvidia logo" />
          </div>

          </div>
        </section>

        <section className="flex flex-col gap-10 container mx-auto px-6 py-14">
            <div  className="flex flex-col items-center gap-3 self-center ">
              <h3 className="text-[#787882] bg-[#18181B] text-base font-medium px-3.5 pb-px min-h-7 rounded-full">Built for AI</h3>
              <h2 className="text-3xl font-medium md:text-4xl">Modernizing the Digital Backbone</h2>
              <p className=" text-[#787882] max-w-screen-md text-center text-lg font-light md:text-xl">Data center software (DCIM, BMS and EPMS) has stagnated. We&apos;ve built a better way.</p>
            </div>
            <div className="flex flex-col gap-6">
              {Card1Data?.map((data,index)=>(
                <Card1 key={index} heading={data.heading} content={data.content} ulList={data.ulList} videoUrl={data.videoUrl}/>

              ))}
              
            </div>
        </section >

        <section className='container mx-auto px-6 py-14'>
          <div className="bg-[#151021] flex flex-col lg:flex-row rounded-xl gap-9 p-6 lg:justify-between lg:p-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-medium lg:text-4xl">We&apos;ve Built the Future of Data Centers</h1>
              <p className="text-[#787882] text-lg lg:text-xl">Contact our team for a demo</p>

            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Link className=" px-3.5 text-sm font-normal md:px-5 bg-[#8172EE] rounded-full p-1.5">Set Up a Time</Link>
              <Link className="px-3.5 text-sm font-normal md:px-5 border-white/10 rounded-full p-1.5 bg-[#27272A]">Learn More</Link>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
