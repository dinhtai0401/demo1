import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import {StyledSearchBar} from './Sidebar/SearchBar.styled';
import axios from 'axios';
import constants from '../constants.json';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      location:[],
      search:"",
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount = () =>
   {
     axios.get(constants.baseAddress + '/pluggers').then(result => {
       this.setState({ location: result.data.pluggers });
     })
     .catch(error => {
       console.error(error);
     })
   }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  displayMarker = () => {
    return this.state.location.map( location=>{
      return <Marker key={location.id}  position={{
        lat:location.lat,
        lng:location.lng
      }} type={location.type} address={location.address} img={location.img}
      onClick={this.onMarkerClick}/>
    })
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  render() {
    const style = {
      width: '100%',
      height:'100%',
    }
    let filteredContacts = this.state.location.filter(
      (location) => {
        return location.address.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <>
      <Map
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 15.5527, lng: 48.5164 }}
        disableDefaultUI = {true}

      >

      {filteredContacts.map( location=>{
         return <Marker key={location.id}  position={{
           lat:location.lat,
           lng:location.lng
         }} type={location.type} address={location.address} img={location.img}
         onClick={this.onMarkerClick}/>
       })}

        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div>
            <img src={`/Picture/${this.state.selectedPlace.img}`} alt="" />
            <h2>{this.state.selectedPlace.address}</h2>
            <h3>{this.state.selectedPlace.type}</h3>
          </div>
        </InfoWindow>
        <StyledSearchBar>
          <input value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </StyledSearchBar>
      </Map>
      </>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDL4YopF5CO1tvYxPhImg3p2ktm5zqeq58'
})(GoogleMapsContainer)
