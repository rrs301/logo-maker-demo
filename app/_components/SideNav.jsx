"use client"
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function SideNav() {
    const pathParam=useSearchParams();
    const [selectedOption,setSelectedOption]=useState();
    useEffect(()=>{
        setSelectedOption(pathParam.get('select'))
    },[pathParam])
  return (
    <div className='border shadow-sm h-screen flex flex-col'>
        <Link href={'/?select=icon'} className={`p-3  text-lg px-7 text-gray-500
        hover:bg-primary hover:text-white cursor-pointer my-2
        ${selectedOption=='icon'&&'bg-primary text-white'}
        `}>Icon</Link>
          <Link href={'/?select=background'} className={`p-3  text-lg px-7 text-gray-500
        hover:bg-primary hover:text-white cursor-pointer my-2
        ${selectedOption=='background'&&'bg-primary text-white'}
        `}>Background</Link>
           <Link href={'/?select=icon'} className={`p-3  text-lg px-7 text-gray-500
        hover:bg-primary hover:text-white cursor-pointer my-2
        ${selectedOption=='Upgrade'&&'bg-primary text-white'}
        `}>Upgrade</Link>

    </div>
  )
}

export default SideNav