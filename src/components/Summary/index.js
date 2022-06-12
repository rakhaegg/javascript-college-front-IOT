
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../Context/Auth";
import Footer from "../Footer";
import Header from "../Header";


class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            choose: ''
        }
        this.handleSend = this.handleSend.bind(this)
        this.handleChoose = this.handleChoose.bind(this)
        this.sendSummary = this.sendSummary.bind(this)
    }
    static contextType = AuthContext
    componentDidMount() {

        this.dateTimeID = setInterval(
            () => this.updateDateTime(), 1000
        )
    }
    updateDateTime() {
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount() {
        clearInterval(this.dateTimeID)
    }
    handleSend(e) {
        console.log("Kirim")
        e.preventDefault();
    }
    handleChoose(e) {
        this.setState({
            choose: e
        })
        console.log(e)
    }
    sendSummary(e) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.context.token}`,
            },
            body: JSON.stringify({
                id_user: this.context.userId,
                summary: "summaryReactDariReact",
                summary_humidity: "summaryHumidityDariReact",
                summary_temperature: "summaryTemperatureDariReact",
                summary_ldr: "summaryLDRDariReact",
                summary_flame: "summaryFlameDariReact",
                summary_mq: "summaryMQDariReact"
            })
        }
        fetch("http://localhost:5000/users/summary", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

        e.preventDefault()
    }
    render() {
        return (
            <div>
                {this.context.isAuth ?
                    <div>
                        <li >
                            <Link to="/laporan/tampil">Tampil</Link>
                        </li>
                        <div className="container">

                            <span class="label label-info"></span>
                            <div class="alert alert-info">
                                <strong>Waktu : </strong>{this.state.date.toUTCString()}
                            </div>
                            <form>
                                <DropdownButton
                                    alignRight
                                    title="Sensor"
                                    id="dropdown-menu-align-right"
                                    onSelect={this.handleChoose}
                                >
                                    <Dropdown.Item eventKey="temperature">Temperature</Dropdown.Item>
                                    <Dropdown.Item eventKey="humidity">Humidity</Dropdown.Item>
                                    <Dropdown.Item eventKey="ldr">LDR</Dropdown.Item>
                                    <Dropdown.Item eventKey="flame">Flame</Dropdown.Item>
                                    <Dropdown.Item eventKey="smoke">Smoke</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                                </DropdownButton>
                                {this.state.choose == 'temperature' ? <h1>
                                    Temperature

                                </h1> : this.state.choose == 'humidity' ?
                                    <h1>Humidity</h1> : this.state.choose == 'ldr' ? <h1>LDR</h1> : this.state.choose == 'flame' ? <h1>Flame</h1>
                                        : this.state.choose == 'smoke' ? <h1>Smoke</h1> : <h1></h1>

                                }
                                {/* <!-- Message input --> */}
                                <div class="form-outline mb-4">
                                    <textarea class="form-control" id="form4Example3" rows="4" ></textarea>
                                    <label class="form-label" for="form4Example3">Laporan Kejadian </label>
                                </div>
                                {/* <!-- Submit button --> */}
                                <button type="submit" class="btn btn-primary btn-block mb-4" onClick={this.sendSummary}>Send</button>
                            </form>
                            <Outlet />
                        </div></div> : <div><h1>Anda Bukan Admin</h1></div>}

            </div>

        )
    }
}
export default Summary;