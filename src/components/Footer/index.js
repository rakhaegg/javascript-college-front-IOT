import TextLeft from "./TextLeft"
import TextRight from "./TextRight"

const backGroundStyleFooter = {
    backgroundColor : 'rgba(0, 0, 0, 0.2)'
}
const Footer = props => {
    return (
        <footer className="bg-light text-center text-lg-start" style={{position : 'relative' , top:'500px'}}> 
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <TextLeft/>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <TextRight/>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={backGroundStyleFooter}>
                © 2020 Copyright:
                <a className="text-dark">MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    )
}
export default Footer