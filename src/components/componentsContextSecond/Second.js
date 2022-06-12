

import React from "react";
import NilaiContext from "./Context";

class Second extends React.Component{
    constructor(props){
        super(props)
    }
    static contextType = NilaiContext
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        return(
            <div>
                {this.context.userId == "" ? <h1>Anda Harus Login</h1> : 
                <div>
                <h2>userID : {this.context.userId}</h2>
                <h2>Passord : {this.context.token}  </h2></div>  }
                
            </div>
        )
    }
}
export default Second