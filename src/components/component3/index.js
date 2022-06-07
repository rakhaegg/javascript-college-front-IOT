import React from "react";



class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}
    }  
    componentDidMount(){
        console.log("Mounting")
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    } 
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        console.log("Update")
        this.setState({
            date : new Date()
        })
    }
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Clock;