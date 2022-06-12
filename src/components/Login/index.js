import React from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/Auth";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";


class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = AuthContext

    componentDidMount() {
        this.login = setInterval(() => this.handleNavigate(), 1000)

    }
    handleNavigate() {
        console.log("LOGIN")
        if (this.context.isAuth) {
            this.props.navigate("/daftarTim")
            console.log("asd")
        }
    }
    componentWillUnmount() {
        clearInterval(this.login)
    }
    render() {

        return (
            <div>
                {this.context.isAuth ? <h1>Anda Berhasil Masuk

                    <button type="button" onClick={this.context.logout}>
                        Keluar
                    </button>
                </h1> : <div className="container" style={{ backgroundColor: 'Tomato', borderStyle: 'solid', marginTop: '100px', paddingTop: '20px', width: '25%' }}>
                    <form>
                        {/* <!-- Email input --> */}
                        <EmailInput changeEmail={this.context.updateID} />
                        {/* <!-- Password input --> */}
                        <PasswordInput changePassword={this.context.updatePassword} />
                        {/* <!-- Submit button --> */}
                        <SubmitButton handleSignIn={this.context.setIdPasswrod} />
                    </form>
                </div>}
                {this.context.codeResponse == 401 ? <h1>Anda Salah Password</h1> : <div></div>}
            </div>
        )
    }
}
export function WrapLogin(props) {
    const navigate = useNavigate()
    return (
        <Login navigate={navigate} />
    )
}