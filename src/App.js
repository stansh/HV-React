import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';





function App () {
  const store = ConfigureStore();
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
                <Main />
            </div>
          </BrowserRouter>
        </Provider>
      </>
    );
  
}

export default App;
