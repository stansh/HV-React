
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="container ">
      <Navbar sticky="top" expand="md" className="navbar-light">
        <NavbarBrand href="/" className="mr-auto"><img src="images/logo.png"  width="100" alt="Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}  className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/" className><strong>the health thing</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><strong>snacks</strong></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><strong>hummus lab</strong></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;