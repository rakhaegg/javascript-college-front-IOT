import React from "react";


class ShowPagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataResponse: [],
            codeResponse: 0,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItY29lcXpHNElZbHhxLVpONSIsImlhdCI6MTY1NTAwMTY5OH0.SypIkFi6VSz_d03_m1IMI3IgX5kmsgiE40eo3PpjxRk",
            page: [],
            choosenPage: 1
        }
        this.handleButton = this.handleButton.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.setNumberPage = this.setNumberPage.bind(this)
    }
    componentDidMount() {
        this.setNumberPage()
        this.getData(1)

    }
    setNumberPage(){
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`,
            }
        }
        fetch(`http://localhost:5000/users/summary`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("Panjang :" , data.data.summaryAll.length)
            var panjang = Math.round(data.data.summaryAll.length/2)
            var temp = []
            for (let index = 1; index <= panjang; index++) {
                temp.push(index)
                
            }
            this.setState({
                page : temp
            })
        })
    }
    componentWillUnmount() {

    }
    handleButton(e) {
        console.log(e.target.value)
        this.setState({
            choosenPage: e.target.value
        })
        this.setNumberPage()
        console.log("Update Number" , this.state.page.length)
        this.getData(e.target.value)
        e.preventDefault()
    }
    getData = (page) => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`,
            }
        }
        fetch(`http://localhost:5000/users/summary/page/${page}`, requestOptions)
            .then(response => {
                if (response.status == 201) {
                    this.setState({
                        codeResponse: 201
                    })
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                this.setState({
                    dataResponse: data.data.summaryPage
                })
            })
    }
    handleDelete(e){
        console.log("Delete")
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`,
            }
        }
        fetch(`http://localhost:5000/users/summary/${e.target.value}`, requestOptions)
        .then(response =>response.json())
        .then((data) => console.log(data))
        .then(()=> this.getData(this.state.choosenPage))

    
    }
    render() {
        return (
            <div>
                <h1>Tampil Summary</h1>
                <h2>Code Response : {this.state.codeResponse}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Summary</th>
                            <th scope="col">Humidity</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">LDR</th>
                            <th scope="col">Flame</th>
                            <th scope="col">MQ-2</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.codeResponse == 201 ?
                            this.state.dataResponse.map((value) => {
                                return (
                                    <tr key={value.id}>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.summary}</td>
                                        <td>{value.summary_humidity}</td>
                                        <td>{value.summary_temperature}</td>
                                        <td>{value.summary_ldr}</td>
                                        <td>{value.summary_flame}</td>
                                        <td>{value.summary_mq}</td>
                                        <td>
                                            
                                            <button type="button" class="btn btn-default btn-sm" onClick={this.handleDelete} value={value.id}>
                                                <span class="glyphicon glyphicon-remove"></span> Delete
                                            </button></td>
                                    </tr>
                                )
                            })
                            : <h1>kOSONG</h1>

                        }
                    </tbody>
                </table>
                {this.state.page.map(value => {
                    return (
                        <button type="button" value={value} onClick={this.handleButton}>{value}</button>
                    )
                })}
            </div>
        )
    }
}
export default ShowPagination