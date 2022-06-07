import React from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            result: {}
        }
        this.changeEmail = this.changeEmail.bind(this)
        this.handleSiginIn = this.handleSiginIn.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    handleSiginIn() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.email, password: this.state.password })
        };
        fetch('http://localhost:5000/image/authentications', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    result: data.data
                })

                console.log(data.data)
            });
        this.props.changeUserID(this.state.result.id)
        console.log("DONES")
    }
    render() {
        return (
            <div className="container">
                <form>
                    {/* <!-- Email input --> */}
                    <EmailInput changeEmail={this.changeEmail} />
                    {/* <!-- Password input --> */}
                    <PasswordInput changePassword={this.changePassword} />
                    {/* <!-- Submit button --> */}
                    <SubmitButton handleSignIn={this.handleSiginIn} />
                </form>
            </div>
        )
    }
}
export default Login