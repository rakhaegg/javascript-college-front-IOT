import React from "react";
import Show from "./show";
import Ha from "./test";

class Lifting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
        this.updateState = this.updateState.bind(this)
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    updateState(event){
        this.setState({
            value : event.target.value
        })
    }
    render(){
        return(
            <div>
                {this.state.value}
                <input  onChange={this.updateState}></input>   
                <h1>{this.state.updateState}</h1>
                <Show name={this.state.value}/>
            </div>
        )
    }
}
export default Lifting