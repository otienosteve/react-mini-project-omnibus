import React from 'react'
import BikeItem from './BikeItem'

function BikeList({bikes}) {
console.log(bikes)
    // const [firstBike,secondbike]=bikes
  return (<div div className='container'>
    <div className="row">
        {bikes.map(bike=><BikeItem key={bike.id} {...bike} />)}
    </div>
  </div>
  )
    
  
}

export default BikeList