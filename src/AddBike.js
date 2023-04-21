import React, {useState} from 'react'

// controlled input /uncontrolled input 
function AddBike({addBike}) {
    const [bike, setBike]=useState({})
const handleChange=(e)=>{
const key=e.target.id
setBike(prevelem=> {
    return {...prevelem, [key]:e.target.value}
})
// console.log(bike)
}
function handleSubmit(e){
e.preventDefault()
addBike(bike)

}
  return (<>
  <form  onSubmit={handleSubmit}>
<br></br> <br></br> <label htmlFor="">Time</label>
<input onChange={handleChange} value={bike.Time} type="Time" name="" id="Time" />
<br></br> <br></br> <label htmlFor="">Bike_type</label><input onChange={handleChange} value={bike.Bike_type} type="text" name="" id="Bike_type" />
<br></br> <br></br> <label htmlFor="">Hiring_Price</label><input onChange={handleChange} value={bike.Hiring_Price} type="number" name="" id="Hiring_Price" />
<br></br> <br></br> <label htmlFor="">Hired_Bikes</label><input onChange={handleChange} value={bike.Hired_Bikes} type="number" name="" id="Hired_Bikes" />
<br></br> <br></br> <label htmlFor="">capacity</label><input onChange={handleChange} value={bike.capacity} type="text" name="" id="capacity" />
<br></br> <br></br> <label htmlFor="">description</label><input onChange={handleChange} value={bike.description} type="text" name="" id="description" />
<br></br> <br></br> <label htmlFor="">image</label><input onChange={handleChange} value={bike.image} type="text" name="" id="image" />

<br></br> <br></br> 
<button type="submit">Add Bike</button>
  </form>
  </>
    
  )
}

export default AddBike