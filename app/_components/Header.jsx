import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='p-3 border shadow-sm flex justify-between items-center'>
        <Image src={'/logo.svg'} width={170} height={100}/>
        <Button className="flex gap-2"> <Download className='h-5 w-5'/> Download</Button>
    </div>
  )
}

export default Header