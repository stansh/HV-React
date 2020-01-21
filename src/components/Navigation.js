import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Nav,NavLink, NavbarToggler, Collapse, NavItem, } from 'reactstrap';


class Navigation extends Component{

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this); //binds THIS from the method      
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen // toggles the state property
        });
    }




    render() {
        return (
                <div className="container">
                <Navbar sticky="top" expand="md"  >
                   
                        {/* <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand> */}
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-music fa-lg" /> VENUES
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-bullhorn fa-lg" /> SHARE
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-envelope fa-lg" /> GET IN TOUCH
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                </div>
                );
            }
        }

export default Navigation;

        

 

        