import React from 'react'

type SuccessMessageProps = {
    children: string
}

export default function SuccessMessage({children}: SuccessMessageProps) {
  return (
    <div
      className='bg-green-700 text-white text-center py-1 rounded-md uppercase font-bold mb-4 ml-0 lg:ml-10'
    >
      {children}
    </div>
  )
}
