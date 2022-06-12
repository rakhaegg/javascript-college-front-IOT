import React from "react"
import { BrowserRouter } from "react-router-dom"
import ShowChart from "../Chart"
import DaftarTim from "../DaftartTim"
import Footer from "../Footer"
import Header from "../Header"
import Login from "../Login"



class HalamanUtama extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: '',
            token: ''
        }
    }
    componentDidMount() {
        this.setState({
            userID: this.props.userID
        })
    }
    componentWillUnmount() {

    }

    render() {
        return (

            <div>
                {console.log("USER ID ", this.props.userID)}


                <div>

                    <p>Halaman Utama</p>

                </div>


            </div>
        )
    }
}


export default HalamanUtama