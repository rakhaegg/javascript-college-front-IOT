// const styleBackground = {

import Backgrouund from "./BackgroundImage"
import Navigation from "./Navigation"

    
//     height : "400px"
// }
// const BACKGROUND = "https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
const backgroundImage = {
    height : '400px',
    backgroundImage : "url(" + "https://mdbcdn.b-cdn.net/img/new/slides/041.webp" + ")"
}
const backgroundColour = {
    backgroundColor  :  'rgba(0, 0, 0, 0.6)'
}
const Header = props => {
    return (
        <header>
            <Navigation main="Kota Malang" map="Peta" crew="Daftar Tim" summary="Laporan" login="Login"/>
            <Backgrouund backgroundImage={backgroundImage} backgroundColour={backgroundColour} />      
        </header>
        
    )
}

export default Header