import React from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";


const Child22 = (props) => {
    let params = useParams()

    return (
        <div>
            <Child22Detail nilai={params.childId} />
        </div>
    )
}
const dataAll = [
    {
        name: "Rakha",
        kelas: "TI3G"
    },
    {
        name: "Elang",
        kelas: "TI3G"
    },
    {
        name: "Gunawan",
        kelas: "TI3G"
    },

]
const Show = (props) => {

    const [searchParams, setsearchParams] = useSearchParams();
    const showActivateUsers = searchParams.get('filter') === 'activateHay'
    return (
        <div>

            <div>
                <button onClick={() => setsearchParams({ filter: 'activateHay' })}>Activate</button>
                <button onClick={() => setsearchParams({})}>Reset</button>

            </div>
            {showActivateUsers ? <h2>
                {dataAll.map((value) => {
                    return (
                        <div>
                            <h1 key={value.name}>{value.name}</h1>
                            <h2 key={value.kelas}>{value.kelas}</h2>
                        </div>
                    )
                })}
            </h2> :
                <h2>Showing All users</h2>}
        </div>
    )
}
class Child22Detail extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {

        return (
            <div>
                <h1>{this.props.nilai}</h1>
                <Show />
            </div>
        )
    }
}

export default Child22