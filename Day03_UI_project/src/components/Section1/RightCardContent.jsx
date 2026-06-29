import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque explicabo deleniti doloribus ipsam ducimus molestias!</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 font-medium text-white px-8 py-2 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 font-medium text-white px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
