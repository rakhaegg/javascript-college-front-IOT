
import { Map, GoogleApiWrapper  , Marker , InfoWindow } from "google-maps-react";
import React from "react";
const mapStyles = {
    width: '50%',
    height: '50%'
};

class ShowMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},        // Shows the InfoWindow to the selected place upon a marker
            date : new Date()
        };
    }
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    componentDidMount() {

        this.timerID = setInterval(
            ()=> this.updateTime(),
            1000 
        )
    }
    updateTime(){
        this.setState({
            date : new Date()
        })
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            } >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Kenyatta International Convention Centre'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.date.toUTCString()}</h4>
                        <h1>LDR : {this.props.sensorLDR}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCuTZVvyOnm4dP2xrjzWT7RVgJQw_KSoA4'
})(ShowMap);