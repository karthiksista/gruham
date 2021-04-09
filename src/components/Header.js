import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown
} from 'reactstrap';
import React, { useContext, useEffect, useState } from 'react'

import { Redirect } from 'react-router';
import { UserContext } from '../services/UserProvider'
import { logOut } from '../services/firebase';
import logo from './gruham.png'

function Header({ brandName, places }) {
    const [isOpen, setIsOpen] = useState(false);
    const [userDetails, setUserDetails] = useState();
    const loggedInUser = useContext(UserContext)


    useEffect(() => {
        if (loggedInUser) {
            setUserDetails(loggedInUser)
        }
    }, [loggedInUser])

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='header'>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"> <span>Gruham</span></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">{places}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown >
                        <DropdownToggle nav caret>
                            {userDetails?.displayName}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                {userDetails?.email}
                            </DropdownItem>

                            <DropdownItem divider />
                            <DropdownItem onClick={logOut}>
                                Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </div>


    )
}

export default Header
