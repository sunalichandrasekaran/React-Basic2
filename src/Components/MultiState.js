import {useState,useEffect} from "react";
function States(){
  const [details,setDetails] = useState(
    {
    name:'Art shops', location:'salem'
  }
  )
  useEffect(()=>{
        // alert(details.name);
  },[details.name])
  return(
    <>
    <h1>Company</h1>
    <p>shop : {details.name}</p>
    <button onClick={()=>{setDetails((previousState)=>{
      return {...previousState,name: "Ps shop"}})}}>
        change name</button>
    <p>location  :{details.location}</p>
    </>
  )
}
export default States;

// mulit state in object
// export default function MultiState(){
   
//    const [value, setValue] = useState(
//     {
//         // mulitiple values in object
//       name : 'Ps Art Shop',
//       location : 'Salem',
//       contact : 234,
//       rating : 5
//     }
//    );

//  getting the previous value and only changing the what we want  
//     function updateChanges(previousState) {
//       setValue(previousState =>{
//         return {...previousState ,rating : 4} })
//    } 

   
    
//    return(
//     <>
//     <h2>My Company</h2>
//     <p>The Company name is {value.name}</p>
//     <p>The Company location  in {value.location}</p>
//     <p>The Company's contact number {value.contact}</p>
//     <p>The Company has rating of {value.rating}</p>
//     <button onClick={updateChanges}>change</button> 
//     </>
//    )
// };