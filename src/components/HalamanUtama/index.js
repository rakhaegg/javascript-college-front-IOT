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
        this.handleUserID = this.handleUserID.bind(this)
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    handleUserID(value){
        this.setState({
            userID : value
        })
        
    }
    render() {
        return (
            
            <div>
               
 

                    <div>
                  
                            <Header />  
                            <p>Halaman Utama</p>
                            <Footer />
                       
                    </div>
                

            </div>
        )
    }
}


export default HalamanUtama