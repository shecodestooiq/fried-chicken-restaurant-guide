import { useState } from "react";
import "../App.css"



export function Listwrapper(){
    const [list,setList]=useState([
        {id:1,"name":"saj alreef",location:"karada",rating:4},
        {id:2,"name":"lee's",location:"jaderyia",rating:3}
    ]);
    const [neww,setNeww]=useState('');
    const [newwloc,setNewwloc]=useState('');
    const [newwrate,setNewwrate]=useState(0);

    
    
    const Add=()=>{
        let num=list.length+1;
        let newentry={id:num,"name":neww ,location:newwloc,rating:newwrate};
        if(newentry.name===""){
            alert("please enter the name of the resturant")
            return
        }
        if(newentry.location===""){
            alert("please enter the location of the resturant")
            return
        }
        if(newentry.rating===0){
            alert("please rate the resturant")
            return;
        }

        setList([...list,newentry])
        setNeww('');
        setNewwloc('');
        setNewwrate(0);
        

        }
    
    const Delete=(id)=>{
        let rest_of_lists=list.filter(r=>r.id !== id)
        setList(rest_of_lists);
    }
    
    
    
    
    return(
        <div className="rest">
            <div className="inputs">
                <h1>Enter The Best Chicken Resturant<br></br> You Recommend To Mohammed</h1>
                <input type="text" value={neww} name={neww} onChange={(e)=>{setNeww(e.target.value)}} placeholder="Resturant"/>
                <input type="text"value={newwloc} name={newwloc} onChange={(e)=>{setNewwloc(e.target.value)}} placeholder="location"/>
                <input type="number" value={newwrate} min={1} max={5} name={newwrate} onChange={(e)=>{setNewwrate(e.target.value)}} placeholder="rate"/>

                <button onClick={Add}>Add</button>
</div>
            
            {list.map((rest)=>{
                return(
                    <div className="resty">
                        <p>Names: {rest.name} <br></br>
                        location: {rest.location}  <br></br>
                        rating: {rest.rating}
                        </p>
                        <button >Edit the rating</button>
                        <br></br>
                        <button onClick={()=>{Delete(rest.id)}}> DELETE</button>
                        </div>
                    
                )
            })}
        
        </div>
    );
}