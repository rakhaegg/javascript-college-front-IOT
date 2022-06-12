

import React from "react";
import NilaiContext from "./Context";

class First extends React.Component {
    constructor(props) {
        super(props)

    }
    static contextType = NilaiContext;


    componentDidMount() {

    }

    componentWillUnmount() {

    }
    render() {
        console.log(this.context.codeResponse)
        return (
            <div>
                {this.context.isAuth ?

                    <h1>Anda Berhasil Masuk

                        <button type="button" onClick={this.context.logout}>
                            Keluar
                        </button>
                    </h1> : <form>
                        <input type="email" id="form2Example1" className="form-control" onChange={this.context.updateID} />
                        <label >ID</label>
                        <input type="password" id="form2Example2" className="form-control" onChange={this.context.updatePassword} />
                        <label  >Kata Sandi</label>
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={this.context.setIdPasswrod}>Sign in</button>
                    </form>
                }
                {this.context.codeResponse == 401 ? <h1>Anda Salah Password</h1> : <div></div>}
            </div>
        )
    }
}
export default First