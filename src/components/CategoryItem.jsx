import React from 'react'

const CategoryItem = ({imgSrc, title}) => {
  return (
    <div className='h-60 w-[min(48vw,11rem)] max-[370px]:w-[80vw] bg-Beige rounded-[15px] shadow-gray-400 shadow-lg p-2'>
        <div className='flex flex-col gap-1 items-center pt-1'>
            <div style={{backgroundImage:`url(${imgSrc})`}} className='h-44 max-[370px]:w-[76vw] w-[min(44vw,10rem)] bg-cover bg-center rounded-[10px]' ></div>
            <h1 className='font-bold py-2'>{title}</h1>
        </div>
    </div>
  )
}

export default CategoryItem