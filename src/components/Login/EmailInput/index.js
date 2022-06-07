


const EmailInput = props => {

    return (
        <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" onChange={props.changeEmail}/>
            <label className="form-label" for="form2Example1">Email address</label>
        </div>
    )
}
export default EmailInput