import React from "react";


//this.state in class
class Favclr extends React.Component {
    constructor() {
        super();
        this.state = {
          color:'Pink'
        }
    }
    
    render(){
        return(
        <>
        {/* changing the color by using this.state and setState in class */}
        <h2>I have many {this.state.color} color dress</h2>   
        <button onClick={()=>this.setState({color:'Blue'}) }>change color</button>
        </>
        )
    }

};

export default Favclr;