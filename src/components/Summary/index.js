
import React from "react";
import Footer from "../Footer";
import Header from "../Header";


class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
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
    render() {
        return (
            <div>
                <Header />
                <body className="container">

                    <span class="label label-info"></span>
                    <div class="alert alert-info">
                        <strong>Waktu : </strong>{this.state.date.toUTCString()}
                    </div>
                    <form>
                        {/* <!-- Name input --> */}
                        <div class="form-outline mb-4">
                            <input type="text" id="form4Example1" class="form-control" />
                            <label class="form-label" for="form4Example1">Name</label>
                        </div>
                        {/* 

                        {/* <!-- Message input --> */}
                        <div class="form-outline mb-4">
                            <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                            <label class="form-label" for="form4Example3">Message</label>
                        </div>
                        {/* <!-- Submit button --> */}
                        <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
                    </form>
                </body>
                <Footer />
            </div>
        )
    }
}
export default Summary;