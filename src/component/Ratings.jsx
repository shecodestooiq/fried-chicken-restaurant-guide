import { useState } from "react"
const Ratings = () => {
    const[restuarants,setRestuarant]=useState([
        {name:'KFC' ,
        location: 'Jadria',
        rate:5},
        {name:'LEES' ,
        location: 'Jadria',
        rate:4}
    ])
    const[newRestuarants, setNewRestuarants]=useState({name:'' , location:'', rate:''})
    const addRestuarant=()=>{
        if(newRestuarants.name && newRestuarants.location && newRestuarants.rate){
          const newRes=[...restuarants,newRestuarants];
          setRestuarant(newRes)
          setNewRestuarants("")
        }
    }
    const handleDelete=(index)=>{
        const newRes=restuarants.filter((_,i)=>index !== i);
        setRestuarant(newRes);
      }
      <div>
      <h1>Add your Favorite Restuaran</h1>
  <label>Name:<input type="text"
  value={newRestuarants.name}
  onChange={(e)=>setNewRestuarants({...newRestuarants, name:e.target.value})}
   />
  </label>
  <label>Location:<input type="text"
  value={newRestuarants.location}
  onChange={(e)=>setNewRestuarants({...newRestuarants , location:e.target.value})} />
  Rate:
  </label>
  <input value={newRestuarants.rate}
  onChange={(e)=>setNewRestuarants({...newRestuarants, rate:e.target.value})}
   />

  <button onClick={addRestuarant}>Add New Restuarant</button>


  </div>

       {restuarants.map((item,index) => (
      <div key={index} className="res">
      <Link to="/ResPage">
      <h1>{item.name}</h1>
      </Link>
      <p>{item.location}</p>
      <p>{item.rate}</p>  
      <button onClick={()=>handleDelete(index)} >Delet Restuarant</button>

      </div>

    ))};
       }
    export default Ratings;
