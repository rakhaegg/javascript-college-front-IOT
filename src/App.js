import logo from './logo.svg';
import './App.css';


import HalamanUtama from './components/HalamanUtama';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import DaftarTim from './components/DaftartTim';
import Footer from './components/Footer';
import Summary from './components/Summary';
import ShowChart from './components/Chart';
import AuthContext, { AuthProvider } from './components/Context/Auth';
import Header from './components/Header';
import { WrapLogin } from './components/Login';
import ShowSummary from './components/Summary/Show';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      password: '',
      userId: '',
      token: '',
      codeResponse: 0,
      isAuth: false,
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
    const { userId, token, isAuth, codeResponse, id } = this.state
    const { updateID, updatePassword, setIdPasswrod, logout } = this
    return (

      <div className="App">
        <div>
          <AuthContext.Provider value={{ id, codeResponse, isAuth, userId, token, updateID, updatePassword, setIdPasswrod, logout }}>
            <Header />
            <Routes>
              <Route path="/" element={<HalamanUtama />} />
              <Route path="/daftarTim" element={<DaftarTim />} />
              <Route path="/chart" element={<ShowChart />} />
              <Route path="laporan" element={<Summary />} >
                <Route path='tampil' element={<ShowSummary />} />
              </Route>
              <Route path='/login' element={<WrapLogin />} />
            </Routes>
            <Footer />
          </AuthContext.Provider>

        </div>

      </div>
    )
  }

}


export default App;
