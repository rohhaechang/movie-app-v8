import React from 'react'

export default function HeaderIcon({Icon, title}) {
  return (
    <div className='mx-4 flex flex-col hover:text-white cursor-pointer active:text-red-400 lg:mx-6'>
      <Icon className="h-8 " />
      <p className='my-2'>{title}</p>
    </div>
  )
}
