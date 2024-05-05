
import { LayoutGridIcon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import ColorPickerController from './ColorPickerController';
import { ControllerValueContext } from '../_context/ControllerValueContext';

function IconControlPanel() {
    const [size, setSize] = useState(280);
    const [rotate, setRotate] = useState(0);
    const [color, setColor] = useState('#000');

    const {value,setValue}=useContext(ControllerValueContext);

    useEffect(()=>{
      const update={
        ...value,
        iconSize:size,
        iconRotate:rotate,
        iconColor:color
      }
      console.log(update)
      setValue(update);
    },[size,rotate,color])
    
  return (
    <div>
            <div className=''>
                <label>Icon</label>
                <LayoutGridIcon className='h-12 w-12 p-3
         cursor-pointer bg-gray-200 rounded-md'/>

            </div>

            <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Size <span>{size} px</span></label>
                <Slider defaultValue={[280]} max={512} step={1} onValueChange={(e) => setSize(e[0])} />
            </div>

            <div className='py-3'>
                <label className='p-2 flex justify-between my-2 text-sm'>Rotate <span>{rotate} °</span></label>
                <Slider defaultValue={[0]} max={360} step={1} onValueChange={(e) => setRotate(e[0])} />
            </div>

            <div className='py-3'>
                <label className='p-2 flex justify-between my-2 text-sm'>Border Color </label>
                <ColorPickerController selectedColor={setColor}/>
            </div>
    </div>
  )
}

export default IconControlPanel