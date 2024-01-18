import React,{useState} from "react";

function Color() {
    const [color,setColor] = React.useState("");
    return (
        <>
        <div align="center">
            <div style={{backgroundColor:color,height:"100vh"}} className="w-12" >
            <input type="text" value={color} onChange={(e)=>setColor(e.target.value)}/>
            </div>
        </div>
        </>
    )
};

export default Color;