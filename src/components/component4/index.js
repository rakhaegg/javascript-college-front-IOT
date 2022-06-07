import React from "react";


class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter : 0
        }
    }
    componentDidMount(){
        console.log("Mount Success")
        this.counterID = setInterval(
            () => this.AddValueCounter(),
            100
        )
    }
    AddValueCounter(){
        this.setState({
            counter :  this.state.counter + this.props.increment
        })
    }
    componentWillUnmount(){
        console.log("DOM Dilepas")
        clearInterval(this.counterID)
    }
    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}
export default Counter