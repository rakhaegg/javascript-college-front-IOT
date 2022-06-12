import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NilaiContext from "./Context";
import First from "./First";
import Second from "./Second";

class Utama2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            password: '',
            userId: '',
            token: '',
            codeResponse: 0,
            isAuth: false
        }
    }
    updateID = (e) => {
        this.setState({
            id: e.target.value
        })
        console.log("ID ", e.target.value)
    }
    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log("Password", e.target.value)
    }
    logout = () => {
        this.setState({
            userId: '',
            token: '',
            isAuth: false
        })
    }
    setIdPasswrod = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.id, password: this.state.password })
        }
        fetch('http://localhost:5000/image/authentications', requestOptions)
            .then(response => {
                if (response.status == 401) {
                    this.setState({
                        codeResponse: 401
                    })
                    throw new Error("Wrong Password")

                } else if (response.status == 201) {
                    this.setState({
                        codeResponse: 201
                    })
                }

                return response.json()
            })
            .then(data => {
                this.setState({
                    userId: data.data.id,
                    token: data.data.accessToken,
                    isAuth: true
                })

            }).catch((err) => {
                // this.setState({
                //     errorMessage : err.message
                // })
                console.log(err.message)
            })
        e.preventDefault()
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        const { userId, token, isAuth, codeResponse } = this.state
        const { updateID, updatePassword, setIdPasswrod, logout } = this
        return (
            <div>
                <NilaiContext.Provider value={{ codeResponse, isAuth, userId, token, updateID, updatePassword, setIdPasswrod, logout }}>
                    <li >
                        <Link to="/">Child</Link>
                    </li>
                    <li >
                        <Link to="/second">Child</Link>
                    </li>


                    <Routes>
                        <Route path="/" element={<First />} />
                        <Route path="/second" element={<Second />} />
                    </Routes>
                </NilaiContext.Provider>
            </div>
        )
    }
}
export default Utama2