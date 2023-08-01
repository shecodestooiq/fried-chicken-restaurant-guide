import React, { useState } from "react";



function DataList() {
    let restList = [
        {
            name: "KFC",
            rating: 4
        },
        {   
            name: "McDonalds",
            rating:3
        },
        {
            name: "Popeyes",
            rating: 4        
        }
    ];

    return (<div className="init-data">
        <label>Resturants</label>
        {restList.map(f => 
        <div>
            <h1> {f.name} </h1>
            <h1> {f.rating}/5 </h1>
        </div>

        )}
    </div>);

}

export default DataList;