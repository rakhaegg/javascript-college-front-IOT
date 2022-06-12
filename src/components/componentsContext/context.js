import React, { Component, createContext } from "react";

const ValueContext = createContext()

class ValueProvider extends Component {

    state = {
        valuee: 0,
        userId: '',
        token: ''
    }

    updateValue = () => {
        this.setState({
            valuee: this.state.valuee + 10
        })
    }
    updateID = (e) => {
        console.log("ID ", e.target.value)
    }
    updatePassword = (e) => {
        console.log("Password", e.target.value)
    }

    render() {
        const { children } = this.props
        console.log(children)
        const { valuee } = this.state

        const { updateValue , updateID , updatePassword} = this

        return (
            <ValueContext.Provider value={{ valuee, updateValue, updateID, updatePassword }}>
                {children}
            </ValueContext.Provider>
        )
    }
}
export default ValueContext
export { ValueProvider }