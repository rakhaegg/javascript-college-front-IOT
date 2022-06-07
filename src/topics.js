import React from "react";
import ShowChart from "./components/Chart";
import Navigation from "./components/Header/Navigation";

class Topics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: this.props.userID
        }
    }
    render() {
        return (

            <div>
              
                    <div>
                        <header>
                            <Navigation main="Kota Malang" map="Peta" crew="Daftar Tim" />
                        </header>
                        <body>
                            <ShowChart/>
                        </body>
                    </div>
                

            </div>
        )
    }

}


export default Topics;