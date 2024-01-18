import {useState} from 'react';


//state in function
function Use(){

    const [color,setColor] = useState('red');

    return (
        <>
        {/* changing the color by using useState and setState in function */}
        <h2>I like {color} color very much</h2>
        <button onClick={()=> setColor('black')}>change the color</button>
        </>

    )
}
export default Use;