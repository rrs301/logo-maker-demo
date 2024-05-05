"use client"
import { LayoutGridIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';
import IconControlPanel from './IconControlPanel';
import { useSearchParams } from 'next/navigation';
import BackgroundController from './BackgroundController';

function ControlPanel() {
    const pathParam=useSearchParams();
    const [selectedOption,setSelectedOption]=useState();
    useEffect(()=>{
        setSelectedOption(pathParam.get('select'))
    },[pathParam])


    return (
        <div className='border p-4 h-screen overflow-auto'>
          {selectedOption=='icon'?
             <IconControlPanel/>
             :<BackgroundController/>}
        </div>
    )
}

export default ControlPanel