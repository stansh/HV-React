import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Directory from './components/Directory'
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
      <Directory  venues={this.state.venues}  />
      </>
    );
  }
}

export default App;
