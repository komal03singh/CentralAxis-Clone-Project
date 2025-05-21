'use client';

import Image from "next/image";
import Link from "next/link";
import SectionOne from "@/Components/SectionOne";
import SectionTwo from "@/Components/SectionTwo";
import SectionThree from "@/Components/SectionThree";
import SectionFour from "@/Components/SectionFour";
import SectionFive from "@/Components/SectionFive";
import SectionSix from "@/Components/SectionSix";
import SectionSeven from "@/Components/SectionSeven";

export default function Home() {


  return (
    <>
      <nav className="flex sticky border-white/10 top-0 bg-black/80 backdrop:blur-xl justify-center items-center border-b">
      <div className="container  flex justify-between items-center h-16 py-4">
        <div className="flex items-center gap-1 py-2 ">
          <Link href="/">
            <Image className="p-2" height={60} width={56} src="/logo.webp" alt="logo" />
          </Link>
          <Link href="/" className="text-2xl font-semibold" >CentralAxis</Link>
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
          <section>
            <SectionOne/>
          </section>

          <section >
            <SectionTwo/>
          </section>

        <section >
          <SectionThree/>
        </section >

        <section>
          <SectionFour/>
        </section>

        <section>
          <SectionFive/>
        </section>

        <section>
          <SectionSix/>
        </section>


        <section>
          <SectionSeven/>
        </section>

      </main>

      <footer className="flex items-center justify-center border-t border-white/10">
        <div className="container flex flex-col justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex p-4 items-center text-sm text-center md:text-left">
            <Image className="p-2" height={55} width={52} src="/logo.webp" alt="logo" />
            <p className="font-light">Copyright © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
