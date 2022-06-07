
const Backgrouund = props => {
    
    return (
        < div className="p-5 text-center bg-image" style={props.backgroundImage} >
            <div className="mask" style={props.backgroundColour}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Weather Station</h1>
                        <h4 className="mb-3">Politeknik Negeri Malang</h4>
                        {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button"
                        >Call to action</a> */}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Backgrouund