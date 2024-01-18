import React from 'react'

const Func = (props) => {

    const {data} = props;
    
  return (
    <div>
        <table>
            <th>
                <td>Name</td>
                <td>Age</td>
            </th>
            <tr>
                {
                data.map((e)=> {
                 return <>
                 <td>{e.name}</td>  
                 <td>{e.age}</td>
                 </>
            })}
                
            </tr>
        </table>
    </div>
  )
}

export default Func;
