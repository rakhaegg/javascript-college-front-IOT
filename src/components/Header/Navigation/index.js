import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../Context/Auth"

const Navigation = props => {

    const test = useContext(AuthContext);
    console.log("Navigation ", test.id)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link"> {props.main}</Link>
                            {/* <a className="nav-link" aria-current="page" href="#"></a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/chart" className="nav-link"> {props.map}</Link>
                            {/* <a className="nav-link" href="#">{props.map}</a> */}
                        </li>
                        <li className="nav-item">

                            <Link to="/daftarTim" className="nav-link"> {props.crew}</Link>
                            {/* <a className="nav-link" href="#">{props.crew}</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/laporan" className="nav-link"> {props.summary}</Link>
                            {/* <a className="nav-link" href="#">{props.crew}</a> */}
                        </li>
                        <li className="nav-item">
                            {test.isAuth ? <div><a>{test.id}</a>
                                <button type="button" onClick={test.logout}>
                                    Keluar
                                </button></div> : <Link to="/login" className="nav-link"> {props.login}</Link>}

                            {/* <a className="nav-link" href="#">{props.crew}</a> */}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation