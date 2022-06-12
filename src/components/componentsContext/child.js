import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import ValueContext from "./context";


class Child extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = ValueContext

    componentDidMount() {

    }
    componentWillUnmount() {

    }
    
    send = () => {
        console.log("Kirim")
    }
    render() {
        const value = this.context
        console.log(value)
        return (
            <div>
                <li >
                    <Link to="/child">Child</Link>
                </li>
                <li >
                    <Link to="/child2">Child</Link>
                </li>
                <div>
                    <h1></h1>
                    <h1>Hay : {this.context.valuee} </h1>
                    <form>
                        <input type="email" id="form2Example1" className="form-control" onChange={this.context.updateID} />
                        <label >ID</label>
                        <input type="password" id="form2Example2" className="form-control" onChange={this.context.updatePassword} />
                        <label  >Kata Sandi</label>
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.send}>Sign in</button>

                    </form>
                    <button onClick={this.updateValueCOntext}>Update Value From Child Component</button>
                    <button onClick={this.context.updateValue}>Klik Me</button>

                    {/* <button onClick={this.context.updateSecond}>Klik Me</button>  */}
                </div>
                <Outlet />
            </div>
        )
    }
}


// function Child() {
//     // Use the Consumer to grab the value from context
//     // Notice this component didn't get any props!
//     return (
//       <ValueContext.Consumer>
//         {value => <div>The answer is {value}.</div>}
//       </ValueContext.Consumer>
//     );
//   }
export default Child