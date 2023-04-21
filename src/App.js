import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Head from './Head';
import BikeList from './BikeList';
import AddBike from './AddBike'
import { useState,useEffect } from 'react';
function App() {
  const [bikes, setBikes]=useState([])
const  addBike=(bike)=>{
  fetch('http://localhost:4500/bikes',{method:"POST", headers:{"accept":"application/json","content-type":"application/json"}, body:JSON.stringify(bike)}).then(res=>res.json()).then(data=>console.log(data))
  setBikes(bikes=>[...bikes,bike])
}
// useEffect( func,[],cleanfunc)
useEffect(()=>{
  fetch('http://localhost:4500/bikes').then(res=>res.json()).then(data=>setBikes(data))
}, []
)
  return (
    <div className="App">
   <Nav />
<BikeList bikes={bikes}/>
<AddBike addBike={addBike}/>
    </div>
  );
}

export default App;
