


const PasswordInput = props => {
    return (
        <div className="form-outline mb-4"  style={{width:'300px' , marginLeft : '40px'} }>
            <input type="password" id="form2Example2" className="form-control" onChange={props.changePassword}/>
            <label className="form-label" for="form2Example2" >Kata Sandi</label>
        </div>
    )
}
export default PasswordInput;