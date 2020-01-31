import React, { Component, useState } from 'react';
import Header from './Header';
import HealthThing from './HealthThing';
import Snacks from './Snacks';
import Recipes from './Recipes';


import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
      return (
        <>
         
         <Header />
         <Switch>
          {/* <HealthThing /> 
          <Foods />  */}
            <Route path='/snacks' component={Snacks} />
            <Route path='/healththing' component={HealthThing} />
            <Redirect to='/healththing' />
            <Recipes />

         </Switch>
         
        
        </>
      );
    }
  }
  
  export default Main;
  