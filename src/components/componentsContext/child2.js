
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ValueContext from "./context";
import { getInvoices } from "./data";

class Child2 extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextType = ValueContext
    componentDidMount() {
        console.log("Child 2 ", this.context)
    }
    componentWillUnmount() {

    }

    render() {
        let invoices = getInvoices();
        return (
            <div>
                <h1>Ini Child 2</h1>
                <h1>This is {this.context.valuee}</h1>
                <div style={{ display: "flex" }}>
                    <nav
                        style={{
                            borderRight: "solid 1px",
                            padding: "1rem",
                        }}
                    >
                        {invoices.map((invoice) => (
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            margin: "1rem 0",
                                            color: isActive ? "red" : "",
                                        };
                                    }}
                                    to={`/child/${invoice.number}`}
                                    key={invoice.number}
                                >
                                    {invoice.name}
                                </NavLink>
                        ))}
                    </nav>
                    <Outlet />
                </div>
            </div>
        )
    }
}
export default Child2