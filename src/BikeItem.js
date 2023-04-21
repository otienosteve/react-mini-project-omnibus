import React,{useState} from 'react'

function BikeItem({image,Bike_type,Hiring_Price,capacity,Hired_Bikes,Time}) {
  const [cap,setCap]=useState(capacity)
  const handleClick=(e)=>{

    setCap(cap-2)
  }
  return (
    <div className="col-md-5 m-3">
    <img src={image} alt="Product Image"  />
    <h1><b>{Bike_type}</b></h1>
    <p>Hiring-price: {Hiring_Price}</p>
    <p>Time: {Time}</p>
    <p>Available Bikes: <span class="available-bikes">{cap - Hired_Bikes}</span></p>
    <button className="Hire-bike" onClick={handleClick}>Hire Bike</button>
  </div>
    )
}

export default BikeItem