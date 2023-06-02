import { ArrowLeft } from 'lucide-react'
import React from 'react'

export function ErrorPage() {
  return (
    <div className="py-10">
      <div className="text-center h-[70vh]">
        <p className="text-base font-semibold ">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos:t find the page you&apos;re looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
           <button className="px-4 p-3 bg-[#d27548] uppercase text-white font-normal rounded">
            book now
          </button>
           <button className="px-4 p-3 bg-[#d27548] uppercase text-white font-normal rounded">
            book now
          </button>
        </div>
      </div>
    </div>
  )
}
