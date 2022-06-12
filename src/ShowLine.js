import React from "react";
import { Chart as ChartJS } from "chart.js/auto"

import { Line } from "react-chartjs-2"

class ShowLine extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date : [],
            temp : [],
            waktu : new Date()
       
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    tick(){
        this.setState({
            waktu : new Date(),
            date : this.state.date.concat(this.state.waktu.toISOString()),
            temp : this.state.temp.concat(1)
        })
    }
    componentWillUnmount(){

    }
    render(){
        const data = {
            labels: this.state.date,
            datasets: [
                {
                    label: 'Sensor LDR',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    data: this.state.temp
                }
            ]
        }
        return(
            <div>
            <div className="row" style={{ position: 'relative', top: '400px' }}>
                <h2>{this.props.sensor}</h2>
                <div className="col">
                    <div>
                        <div class="alert alert-info">
                            <strong>Waktu : </strong>{this.state.waktu.toUTCString()}
                        </div>
                        <div class="alert alert-info">
                            <strong>RealTime LDR : </strong> {this.state.realtime}
                        </div>
                    </div>
                    <div>
                        <div class="alert alert-info">
                            <strong>Last 2 Minutes : </strong> {this.state.twoMinutes}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h3>{this.state.temp}</h3>

                    <figure class="figure" >
                        <Line className="figure-img img-fluid rounded"
                            data={data}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                            style={{ height: '250px' }}
                        />
                        {/* <figcaption class="figure-caption text-end">A caption for asdasdasd.</figcaption> */}
                    </figure>
                </div>
            </div>
        </div>
        )
    }
}
export default ShowLine