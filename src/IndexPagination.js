import React from "react";
import { Pagination } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import IndexContext from "./IndexContext";
import ShowPagination from "./Pagination";
import UpdatePagination from "./UpdatePagination";

class IndexPagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            summaryID: ''
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/'>Index</Link>

                    </li>
                    <li>
                    <Link to='/update'>Update</Link>
                    </li>
                </ul>
                <IndexContext.Provider >
                <Routes>
                    <Route path="/" element={<ShowPagination/>}/>
                </Routes>
                </IndexContext.Provider>

            </div>
        )
    }
}
export default IndexPagination