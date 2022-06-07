import React from "react";


class Input extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.props.valueChange(event.target.value)
    }
    render(){
        return(
        <div>
             <input 
                 onChange={this.handleChange} />
        </div>
        )
    }
}
class Saya extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(nilai){
        this.setState({
            value : nilai
        })
    }
    render(){
        return(
            
            <div>
                <h1>{this.state.value}</h1>
                <Input valueChange={this.changeValue}/>
            </div>
        )
    }
}
export default Saya