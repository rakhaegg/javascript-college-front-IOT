import React from "react";


class SelectHandle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.changeValue = this.changeValue.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }   
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    changeValue(event) {
        this.setState({ 
            value : event.target.value
        })
    }
    handleSumbit(event) {
        console.log(this.state.value)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                {this.state.value}
                <form onSubmit={this.handleSumbit }>
                    <select  onChange={this.changeValue}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SelectHandle