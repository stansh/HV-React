import React, { Component, useState } from 'react';
import Header from './Header';
import HealthThing from './HealthThing';
import Snacks from './Snacks';
import Recipes from './Recipes';
import Catering from './Catering';
import { Provider } from 'react-redux';


import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
      return (
        <>
         <Provider>
         <Header />
         <Switch>
          {/* <HealthThing /> 
          <Foods />  */}
            <Route path='/snacks' component={Snacks} />
            <Route path='/healththing' component={HealthThing} />
            <Recipes path='/recipes' component={Recipes} />
            <Catering path='/catering' component={Catering} />
            <Redirect to='/healththing' />
            

         </Switch>
         </Provider>
         
        
        </>
      );
    }
  }
  
  export default Main;
  