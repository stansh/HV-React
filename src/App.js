import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import RenderVenue from './components/Directory'
import { VENUES } from './venues';


class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      venues: VENUES
    }
  }

  render() {
    return (
      <>
      <Navigation  />
      <RenderVenue venue = {this.state.venues.map(venue=>venue.id)}/>
      </>
    );
  }
}

export default App;
