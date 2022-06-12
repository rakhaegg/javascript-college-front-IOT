
import React from "react";
import ValueContext from "./context";

class Child3 extends React.Component{
    constructor(props){
        super(props)
    }
    static contextType = ValueContext
    componentDidMount(){
        console.log("Child 3 " , this.context)
    }
    componentWillUnmount(){

    }

    render(){
        return(
          <div>
              <h1>Ini Child 3</h1>
              <h1>This is {this.context.valuee}</h1>
          </div>
        )
    }
}
export default Child3