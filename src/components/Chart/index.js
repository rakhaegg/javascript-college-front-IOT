import React from "react";
import Header from "../Header";
import ShowMap from '../Map/index'
import DataHumidity from "./Humidity";
import DataLDR from "./LDR";
import DataMQ from "./MQ135";
import DataTemperature from "./Temperature";


class ShowChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueLDR : 0,
            valueTemperature : 0,
            valueHumdity : 0
        }
        this.handleValue = this.handleValue.bind(this)
        this.handleTemperature  = this.handleTemperature.bind(this)
        this.handleHumidity = this.handleHumidity.bind(this)
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
    handleTemperature(value){
        this.setState({
            valueTemperature : value
        })
    }
    handleHumidity(value){
        this.setState({
            valueHumdity : value
        })
    }
    render() {
        return (
            <div>
                <body>
                    <div className="container">
                        <br></br>
                        <div className="row">
                            <div className="col">
                                
                                <ShowMap sensorLDR={this.state.valueLDR} sensorTemp={this.state.valueTemperature} sensorHum={this.state.valueHumdity} />
                            </div>
                            <div className="col">
                                <strong> lat: -1.2884,</strong>
                                <strong>lng: 36.8233</strong>
                            </div>
                        
                            <DataLDR sensor="Light Dependent Resistors" handleLDR={this.handleValue} />
                           <DataTemperature sensor="Temperature" handleTemperature={this.handleTemperature}/>
                           <DataHumidity sensor="Humidity" handleHumidity={this.handleHumidity}/>
                        </div>

                    </div>
                </body>
            </div>
        )
    }
}
export default ShowChart