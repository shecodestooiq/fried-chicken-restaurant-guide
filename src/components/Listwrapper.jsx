import { useState } from "react";
import "../App.css";
import { Info } from "./info-of-restaurants..jsx";
import {Link} from "react-router-dom";


export function Listwrapper() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "saj alreef",
      location: "karada",
      rating: 4,
      description:"fried chicken Resturant"
    },
    {
      id: 2,
      name: "lee's",
      location: "jaderyia",
      rating: 5,
      description:"fried chicken Resturant2"

    },
  ]);
  const [neww, setNeww] = useState("");
  const [newwloc, setNewwloc] = useState("");
  const [newwrate, setNewwrate] = useState(0);
  const [newwdesc, setNewwdesc] = useState("");


  const Add = () => {
    let num = list.length + 1;
    let newentry = {
      id: num,
      name: neww,
      location: newwloc,
      rating: newwrate,
      description:newwdesc,
    };
    if (newentry.name === "") {
      alert("please enter the name of the resturant");
      return;
    }
    if (newentry.location === "") {
      alert("please enter the location of the resturant");
      return;
    }
    if (newentry.description === "") {
      alert("please enter some description");
      return;
    }
    if (newentry.rating === 0) {
      alert("please rate the resturant");
      return;
    }

    setList([...list, newentry]);
  };

  const Delete = (id) => {
    let rest_of_lists = list.filter((r) => r.id !== id);
    setList(rest_of_lists);
  };

  return (
    
      <div className="rest">
        <div className="inputs">
          <h1>
            Enter The Best Chicken Resturant<br></br> You Recommend To Mohammed
          </h1>
          <input
            type="text"
            value={neww}
            name={neww}
            onChange={(e) => {
              setNeww(e.target.value);
            }}
            placeholder="Resturant"
          />
          <input
            type="text"
            value={newwloc}
            name={newwloc}
            onChange={(e) => {
              setNewwloc(e.target.value);
            }}
            placeholder="location"
          />
          <input
            type="text"
            value={newwdesc}
            name={newwdesc}
            onChange={(e) => {
              setNewwdesc(e.target.value);
            }}
            placeholder="description"
          />
          <input
            type="number"
            value={newwrate}
            min={1}
            max={5}
            name={newwrate}
            onChange={(e) => {
              setNewwrate(e.target.value);
            }}
            placeholder="rate"
          />
          <button onClick={Add}>Add</button>
          
        </div>
        
          
                
                 

        {list.map((rest) => {
  let Data ={ 
    namee: rest.name,
    location:rest.location,
    rating:rest.rating,
    description:rest.description
  }
          return ( 
            <div className="resty">
              
              <Info
                name={rest.name}
                location={rest.location}
                rate={rest.rating}
                description={rest.description}
              />  
         
              
               
              <button>Edit the rating</button>
              <br></br>
              <button
                onClick={() => {
                  Delete(rest.id);
                }}
              >
                {" "}
                DELETE
              </button>
              <br></br>
             <button><Link to="/ResturantPage" state={Data} className="link">view description</Link></button>
                
              
             
              
              
              
            </div>
            
          );
        })}
      </div>

  );
}
