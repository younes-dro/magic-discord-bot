'use client'
import React from 'react'

const CustomLoaderSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  )
}

export default CustomLoaderSpinner
