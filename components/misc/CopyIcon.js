import React from 'react'

function CopyIcon({...props}) {
  return (
    <svg
        className="w-6 h-6 dark:text-green-500 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
    </svg>
  )
}

export default CopyIcon