import React, { useState } from "react";

function Cars(){

    const carDetail = [
        
        {
            name:"Ferrari" , 
            color:"red"  
        },
             
        {
            name:"Frod" , 
            color:"White"  
        },
             
        {
            name:"BMW" , 
            color:"Green"  
        },
    ];
    return (
        <>
        <h1> This is car page</h1>
        <ul>
            {carDetail.map((e)=>{
                return <>
                <li>The car name is <b>{e.name}</b> , and it is <b>{e.color}</b>in color.</li>
                </>               
            })}
        </ul>
        </>
    )
}

export default Cars;