import React, { useState } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <div>
            <React.Fragment>
                <Navbar light color="light" expand="md" id="navb">
                    <NavbarBrand>
                        <span>{'<'}</span>
                        <span className="logo-name">Abhijeet Pawar</span>
                        <span>{'/>'}</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNav} className="navToggler" />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                
                                    <a href="#skillsSection" className="nav-link">Skills</a>
                              
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutme">About Me</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactme">Contact Me</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </React.Fragment>
        </div>
    );
}
export default Header;