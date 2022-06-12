import { Chart as ChartJS } from "chart.js/auto"
import React from "react"
import { Line } from "react-chartjs-2"


class DataLDR extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
            payload: [],
            date: new Date(),
            time: [],
            userID: this.props.userID,
            realtime: 0,
            temp: 0,
            twoMinutes: 0,
            second: 0,

        }
    }
    componentDidMount() {
        console.log("Komponen Chart Terpasang")
        // this.timerID = setInterval(
        //     () => this.tick(),
        //     1000
        // )
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )

    }

    componentWillUnmount() {

    }


    /*
        ! THIS FOR CONNECT TO IOT 
    */

    tick() {
        fetch('http://localhost:3001/api/ldr')
            .then(response => response.json())
            .then(data => {
                const last = data.length - 1;
            
                this.setState({
                    second: this.state.second + 1,
                    temp: this.state.temp + 1,
                    payload: this.state.payload.concat(parseInt(data[last].payload)),
                    date: new Date(),

                })
                this.setState({
                    realtime: data[last].payload,

                })

                this.props.handleLDR(this.state.realtime)
            })


        this.setState({
            time: this.state.time.concat(this.state.date.toLocaleTimeString())
        })
        if (this.state.second == 30) {
            var sum = 0
            var count = this.state.payload.length - 30


            for (; count < this.state.payload.length; count++) {
                sum = sum + parseInt(this.state.payload[count])
            }

            this.updateTwoMinutes(sum / 30)
            console.log(sum)
            sum = 0;
            this.setState({
                second: 0,

            })
        }

    }

    updateTwoMinutes(sum) {
        this.setState({
            twoMinutes: sum
        })
    }
    render() {

        const data = {
            labels: this.state.time,
            datasets: [
                {
                    label: 'Sensor LDR',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'rgba(75,192,192,1)',
                    data: this.state.payload
                }
            ]
        }

        return (
            <div>
                <div className="row" style={{ position: 'relative', top: '400px' }}>
                    <h2>{this.props.sensor}</h2>
                    <div className="col">
                        <div>
                            <div class="alert alert-info">
                                <strong>Waktu : </strong>{this.state.date.toUTCString()}
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
export default DataLDR