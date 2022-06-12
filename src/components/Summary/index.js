
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
            choose: '',
            temperature :0,
            humidity : 0,
            ldr : 0,
            mq : 0,
            summary :'',
            flame : 0
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
                summary: this.state.summary,
                summary_humidity: this.state.humidity,
                summary_temperature: this.state.temperature,
                summary_ldr: this.state.ldr,
                summary_flame: this.state.flame,
                summary_mq: this.state.mq
            })
        }
        fetch("http://localhost:5000/users/summary", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

        e.preventDefault()
    }
    handleTemperatue = (e)=>{
        console.log(e.target.value)
        this.setState({
            temperature : e.target.value
        })
    }
    handleHumidity = (e)=>{
        console.log(e.target.value)
        this.setState({
            humidity : e.target.value
        })
    }
    handleLdr = (e)=>{
        console.log(e.target.value)
        this.setState({
            ldr : e.target.value
        })
    }
    handleMq = (e) =>{
        console.log(e.target.value)
        this.setState({
            mq : e.target.value
        })
    }
    handleFlame = (e)=>{
        console.log(e.target.value)
        this.setState({
            flame : e.target.value
        })
    }
    handleSummary = (e)=>{
        console.log(e.target.value)
        this.setState({
            summary : e.target.value
        })
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
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Temperature</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Temperature" onChange={this.handleTemperatue}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Humidity</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Humidity" onChange={this.handleHumidity}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Flame</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="flame"  onChange={this.handleFlame}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">LDR</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ldr"  onChange={this.handleLdr}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">MQ</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="mq" onChange={this.handleMq}/>
                                </div>
                                <br></br>
                                {/* <!-- Message input --> */}
                                <div class="form-outline mb-4">
                                    <textarea class="form-control" id="form4Example3" rows="4"onChange={this.handleSummary} ></textarea>
                                    <label class="form-label" for="form4Example3">Summary </label>
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