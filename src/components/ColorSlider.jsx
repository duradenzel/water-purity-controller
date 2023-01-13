import React from 'react'

const ColorSlider = ({sliderValue}) => {
  return (
    <div>
        <input id="slide" className='w-full' type="range" min="0" max="500" value={500 - sliderValue} readOnly />
    </div>
  )
}

export default ColorSlider