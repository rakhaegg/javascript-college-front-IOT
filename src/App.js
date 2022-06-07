import logo from './logo.svg';
import './App.css';

import Clock from './components/component3';
import Counter from './components/component4';
import Value from './components/component5';
import Interaction from './components/componentInreactionAPi';
import Handling from './components/componentsHandling';
import Form from './components/componentsForm';
import SelectHandle from './components/componentsSelect';
import MultipltHandle from './components/componentsMultiple';
import Lifting from './components/componentLifting';
import Calculator from './components/componentLift';
import Saya from './components/componentLiftss';
import WelcomeDialog from './components/componentsCompos';
import Show from './components/multipleChildren';
import SignUpDialog from './components/componentsLogin';
import Header from './components/Header';
import HalamanUtama from './components/HalamanUtama';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Topics from './topics';
import React from 'react';
import DaftarTim from './components/DaftartTim';
import Footer from './components/Footer';
import Summary from './components/Summary';
import ShowChart from './components/Chart';

class App extends React.Component {
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
  handleUserID(value) {
    this.setState({
      userID: value
    })

  }
  render() {
    return (
      <div className="App">
        
          <div>
            {this.state.userID === '' ?
              <Login changeUserID={this.handleUserID} /> :
              <Routes>
              <Route path="/" element={<HalamanUtama userID={this.state.userID}/>} />
              <Route path="/daftarTim" element={<DaftarTim userID={this.state.userID}/>}/>
              <Route path="/chart" element={<ShowChart userID={this.state.userID}/>} />
              <Route path="/laporan" element={<Summary userID={this.state.userID}/>}/>
              </Routes>
            }
           

          </div>
       
      </div>
    )
  }

}


export default App;
