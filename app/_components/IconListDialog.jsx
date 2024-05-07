import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { icons } from 'lucide-react';
import { iconList } from '@/constant/icons';
  
function IconListDialog({selectedIcon}) {

    const [openList,setOpenList]=useState(false);
    const [icon,setIcon]=useState('Anchor')
    const Icon = ({ name, color, size }) => {
        const LucideIcon = icons[name];
        if(!LucideIcon)
        {
            return ;
        }
        return <LucideIcon color={color} size={size} />;
      };
  return (
    <div>
        <div className=' p-3
         cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px]
          flex items-center justify-center' onClick={()=>{setOpenList(true);}}>
           <Icon name={icon} color={'#000'} size={20} 
        /></div>
    
      
    <Dialog open={openList}>
    
    <DialogContent >
      <DialogHeader>
        <DialogTitle>Pick Your Icon</DialogTitle>
        <DialogDescription className='overflow-auto h-[400px]'>
                <div className='grid grid-cols-2 md:grid-cols-4
                 gap-4 lg:grid-cols-5 p-6'>
                    {iconList.map((icon,index)=>(
                        <div className='p-3 border flex rounded-sm 
                         items-center justify-center' onClick={()=>{selectedIcon(icon);setIcon(icon);setOpenList(false)}}>
                        <Icon name={icon} color={'#000'} size={20}    /> 
                       
                        </div>
                     
                    ))}
                </div>  
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  </div>
  
  )
}

export default IconListDialog