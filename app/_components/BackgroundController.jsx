import { Slider } from '@/components/ui/slider'
import React, { useContext, useEffect, useState } from 'react'
import ColorPickerController from './ColorPickerController'
import { ControllerValueContext } from '../_context/ControllerValueContext'

function BackgroundController() {
   const {value,setValue}=useContext(ControllerValueContext);
  const storageValue=JSON.parse(localStorage.getItem("value"))
    const [rounded,setRounded]=useState(value?value?.bgRounded:250)
    const [padding,setPadding]=useState(value?value?.bgPadding:250)
    const [color, setColor] = useState(value?value?.bgColor:'#000');

    useEffect(()=>{
      if(rounded||padding||color)
      {
       // const value=JSON.parse(localStorage.getItem("value"))
      const update={
        ...storageValue,
        bgRounded:rounded,
        bgPadding:padding,
        bgColor:color
      }
      localStorage.setItem("value",JSON.stringify( update))
      setValue(update)
      
    }
    },[rounded,padding,color])
  return (
    <div>
         <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Rounded <span>{rounded} px</span></label>
                <Slider defaultValue={[rounded]} max={512} step={1} onValueChange={(e) => setRounded(e[0])} />
            </div>
            <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Padding <span>{padding} px</span></label>
                <Slider defaultValue={[40]} max={100} step={1} onValueChange={(e) => setPadding(e[0])} />
            </div>
            <div className='py-3 '>
                <label className='p-2 flex justify-between my-2 text-sm'>Background</label>
               <ColorPickerController hideControls={false} selectedColor={(v)=>{setColor(v);console.log(v)}} />
            </div>
    </div>
  )
}

export default BackgroundController