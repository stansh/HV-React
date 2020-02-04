import React, { Component, useState } from 'react';
import Header from './Header';
import HealthThing from './HealthThing';
import Snacks from './Snacks';
import Recipes from './Recipes';
import CateringForm from './CateringForm';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
      return (
        <>
         
         <Header />
         
         <Switch>    
            <Route path='/snacks' component={Snacks} />
            <Route path='/healththing' component={HealthThing} />
            <Route path='/recipes' component={Recipes} />
            <Route path='/catering' component={CateringForm} />
            <Redirect to='/healththing' />
            

         </Switch>
        
         
        
        </>
      );
    }
  }
  
  export default Main;
  