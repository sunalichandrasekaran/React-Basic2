import {useState} from 'react'

const Form = () => {

const [count,setCount] = useState(0);

function decrement() {
    if(count < 1){
        setCount(0)
    }
    else{
        setCount(count - 1)
    }
}
  return (
    <>
    <p>Count : {count}</p>
    <button onClick={()=>setCount(count + 1)}>increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={()=>setCount(0)}>reset</button>
    </> 
  )
}

export default Form;
