import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className=" w-full px-[12%] py-20 scroll-mt-0">
         <h4 className="text-center mb-2 text-lg font-outfit">What I Offer</h4>
      <h2 className="text-center text-5xl font-outfit">My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit'>
         I specialize in crafting modern, responsive, and visually engaging
            front-end experiences using technologies like React and Tailwind.
      </p>
      <div className='grid lg:grid-cols-3 gap-6 my-6'>
  {serviceData.map(({ icon1, icon2, icon3, title, description }, index) => (
    <div
      key={index}
      className='border border-gray-400 rounded-lg px-8 p-6 cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 hover:shadow-xl/30 dark:hover:bg-[#0a0a0a]'
    >
      <div className='flex items-center justify-center gap-4 mt-6'>
        <Image width={60} height={60} unoptimized src={icon1} alt={`${title} icon 1`} />
        <Image width={60} height={60} unoptimized src={icon2} alt={`${title} icon 2`} />
        <Image className='rounded-2xl' width={60} height={60} unoptimized src={icon3} alt={`${title} icon 3`} />
      </div>
      <h3 className='text-xl font-semibold my-2 mt-10 text-left'>{title}</h3>
      <p className='text-base font-medium leading-6 text-justify'>{description}</p>
    </div>
  ))}
</div>



    </div>
  )
}

export default Services
