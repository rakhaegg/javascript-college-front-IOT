import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        }
        this.changeValue = this.changeValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    changeValue(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state.value)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                {this.state.value}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" onChange={this.changeValue} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Form;