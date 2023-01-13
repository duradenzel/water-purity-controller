import React from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai'


const Warning = () => {
  return (
   <p className='flex'>
      <AiOutlineExclamationCircle id='tickWarning' className='w-5 h-5 text-red-600 text-sm'/>
      <p className='ml-5 mb-2 text-red-600'>Loading a large quantity of readings (1000+) may impact the performance, use with caution! </p>
   </p> 
    
  )
}

export default Warning