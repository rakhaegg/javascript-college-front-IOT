import React from "react";

class Value extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            list: [42, 33, 68],
        };
    }

    componentDidMount() {
        console.log("Komponen telah terpasang di DOM")
    }
    componentWillUnmount() {
        console.log("Komponen telah terlepas dari DOM")
    }
    updateItem = i => {
        this.setState({
            list: this.state.list.map((item, j) => {
                if (j == i) {
                    return item + 1;
                } else {
                    return item;
                }
            })
        })
    }
    removeItem = i =>{
        this.setState(
            {
                list : this.state.list.filter((item , j) => i !== j)
            }
        )
    }
    render() {
        return (
            <div>

                <ul>
                    {this.state.list.map((item, index) => (
                        <li key={item}>
                            The person is {item} years old.
                            <button
                                type="button"
                                onClick={() => this.removeItem(index)}
                            >
                                Hapus
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

export default Value;