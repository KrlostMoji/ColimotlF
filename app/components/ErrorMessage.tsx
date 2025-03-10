import React from 'react'

type ErrorMessageProps = {
    children: string
}

export default function ErrorMessage({children}: ErrorMessageProps) {
  return (
    <div
      className='bg-red-700 text-white text-center py-1 rounded-md uppercase font-bold mb-4 ml-0 lg:ml-10'
    >
      {children}
    </div>
  )
}
