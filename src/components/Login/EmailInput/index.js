


const EmailInput = props => {

    return (
        <div className="form-outline mb-4" style={{width:'300px' , marginLeft : '40px'} }>
            <input type="email" id="form2Example1" className="form-control" onChange={props.changeEmail}/>
            <label className="form-label" for="form2Example1">ID</label>
        </div>
    )
}
export default EmailInput