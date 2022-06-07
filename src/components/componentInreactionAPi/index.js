import React from "react";


class Interaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataAPI: {}
        }
    }

    componentDidMount() {
        console.log("Komponen telah terpasang di DOM FETCH API")
        fetch("http://localhost:5000/user/user-coeqzG4IYlxq-ZN5")
            .then(response => response.json())
            .then(result => {
            
                this.setState({
                    dataAPI: result.data.user
                })
            })
    }
    
    componentWillUnmount() {
        console.log("Element dilepas dari DOM FETCH API ")
    }

    render() {
        return (
            <div>

                {
                    this.state.dataAPI === {}?
                <h1>Wait</h1> : <h1>{
                    this.state.dataAPI.username
                }</h1>
                }
            </div>
        )
    }
}


export default Interaction;