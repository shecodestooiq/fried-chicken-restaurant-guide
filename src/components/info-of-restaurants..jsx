
import { Link } from "react-router-dom";
import ResturantPage from "./ResturantPage";


export function Info(props){
    
    return(
        <div>
            
            <p>Name: {props.name}<br></br>
            Location: {props.location}
            <br></br>
            Rating: {props.rate}</p>
            
           
        </div> 
    )
    ;
}