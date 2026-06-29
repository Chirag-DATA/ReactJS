import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-6 w-2/3 flex flex-nowrap gap-10 rounded-4xl overflow-x-auto'>
      {props.users.map(function(elem,idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
