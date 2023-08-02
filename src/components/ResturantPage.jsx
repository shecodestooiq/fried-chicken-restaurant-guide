import { Link ,useLocation} from "react-router-dom";


import "../App.css"

export default function ResturantPage(props){
    const location = useLocation();
const data = location.state;
console.log(data);
    return(
        <div className="infos">
            <p>
               Resturant: {data.namee}
                <br></br> 
               Location: {data.location}
                <br></br> 
              Rating:  {data.rating}
                </p>
                <div className="description">
                    <h3>Description About The Resturant</h3>
                    <div style={{fontStyle:"italic",fontSize:"1.8rem",marginBottom:"130px",marginTop:"50px"}} >{data.description}</div>
                    <button ><Link to="/" className="link">home</Link></button>
                </div>
                <br></br>
                <br></br>
                
            
            </div>
            
  
        
    )
}
