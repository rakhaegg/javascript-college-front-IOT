


const PasswordInput = props => {
    return (
        <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" onChange={props.changePassword}/>
            <label className="form-label" for="form2Example2">Password</label>
        </div>
    )
}
export default PasswordInput;