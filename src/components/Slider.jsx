import { useState } from "react"


export function CardSlider() {
  return (
    <div className='container m-auto mb-12'>
        <Card />
    </div>
  )
}

export const Card = ({detail}) => {

  const [hoverEffect, setHoverEffect] = useState(false)

  const style = {
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical'
  }

    return (
      <div className="relative h-[400px] w-[300px] rounded-md mb-7">
      <img
        src={detail.images}
        alt={detail.title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{detail.name}</h1>
        <p className="mt-2 text-sm text-gray-300 overflow-hidden text-ellipsis ease-linear" style={hoverEffect ? null : style } onMouseEnter={() => setHoverEffect(true)} onMouseLeave={() => setHoverEffect(false)}>
        {detail.description}
        </p>
        <button className="mt-2 inline-flex cursor-pointer capitalize items-center text-sm font-semibold text-white border rounded px-3 py-1.5 hover:bg-[#fcf2de] ease-linear hover:text-[#633a29]">
        {detail.type} &rarr;
        </button>
      </div>
    </div>
    )
}

