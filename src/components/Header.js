
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container ">
      <Navbar sticky="top" expand="lg" className="navbar-light">
        <NavbarBrand href="/" className="mr-auto"><img src="images/logo.png"  width="100" alt="Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}   className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink className="nav-link" to="/healththing"><strong>the health thing</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/snacks"><strong>snacks</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/hummuslab"><strong>hummus lab</strong></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;