import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 overflow-hidden relative h-full w-80 rounded-3xl'>
      <img className='h-full w-full object-cover' src={props.img}/>
      <RightCardContent tag={props.tag}id={props.id} />
    </div>
  )
}

export default RightCard
