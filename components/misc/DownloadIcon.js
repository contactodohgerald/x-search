import React from 'react'

function DownloadIcon({...props}) {
  return (
    <svg
        title="Download as PDF"
        className="w-6 h-6 dark:text-orange-500 cursor-pointer"
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
        d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        ></path>
    </svg>
  )
}

export default DownloadIcon