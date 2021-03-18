import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import Hamburger from "./HamburgerButton/Hamburger";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div>
      <React.Fragment>
        <Navbar light color="light" expand="md" id="navb" fade="false">
          <NavbarBrand>
            <span>{"<"}</span>
            <span className="logo-name">Abhijeet Pawar</span>
            <span>{"/>"}</span>
          </NavbarBrand>
          {/* <NavbarToggler onClick={toggleNav} className="navToggler" /> */}
          <Hamburger isNavOpen={isNavOpen} toggleNav={toggleNav} />
          {/* <Hamburger onClick={toggleNav} className="navToggler"/> */}

          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <a href="#skillsSection" className="nav-link">
                  Skills
                </a>
              </NavItem>

              <NavItem>
                <NavLink className="nav-link" to="/aboutme">
                  About Me
                </NavLink>
              </NavItem>

              <NavItem>
                <a href="#contactMeSection" className="nav-link">
                  Contact Me
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    </div>
  );
};
export default Header;
