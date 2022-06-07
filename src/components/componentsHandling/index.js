
import React from "react";


class Handling extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value : 0
        }
        this.klikBackZero = this.klikBackZero.bind(this)
        this.klikCounter = this.klikCounter.bind(this)
        
    }
    componentDidMount() {
        console.log("Komponen telah terpasang")
    }
    componentWillUnmount() {
        console.log("Komponen belum terpasang")
    }

    klikCounter(){
        this.setState({
            value : 1 + this.state.value
        })
    }
    klikBackZero(){
        this.setState({
            value : 0
        })
    }
    
    render() {
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.klikCounter}>Counter</button>
               
                <button onClick={this.klikBackZero}>Zero</button>
            </div>
        )
        
        
    }
}
export default Handling