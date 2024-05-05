import React, { useState } from 'react'
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'

function ColorPickerController({hideControls=false,selectedColor}) {
    const [color, setColor] = useState('rgba(255,255,255,1)');
    const {valueToHex}=useColorPicker(color, setColor)
  return (
    <div className=''>
        <ColorPicker value={color} onChange={(e)=>{setColor(valueToHex(e)),
        selectedColor(valueToHex(e))}} hideControls={hideControls}
        hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType  />
    </div>
  )
}

export default ColorPickerController