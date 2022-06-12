import React from "react";
import Header from "../Header";
import ShowMap from '../Map/index'
import DataLDR from "./LDR";


class ShowChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueLDR : 0
        }
        this.handleValue = this.handleValue.bind(this)
    }
    componentDidMount() {   
        
    }   
    componentWillUnmount() {

    }
    handleValue(value){
        this.setState({
            valueLDR : value
        })
        console.log(this.state.valueLDR)
    }
    
    render() {
        return (
            <div>
                <body>
                    <div className="container">
                        <br></br>
                        <div className="row">
                            <div className="col">
                                
                                <ShowMap sensorLDR={this.state.valueLDR}/>
                            </div>
                            <div className="col">
                                <strong> lat: -1.2884,</strong>
                                <strong>lng: 36.8233</strong>
                            </div>
                        
                            <DataLDR sensor="Light Dependent Resistors" handleLDR={this.handleValue} />
                            
                        </div>

                    </div>
                </body>
            </div>
        )
    }
}
export default ShowChart