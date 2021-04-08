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

import React from 'react'
import { useState } from 'react'

function Header({ brandName, places }) {
    console.log('Header render ......')
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='header'>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{brandName}</NavbarBrand>
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
                            Login/Sign Up
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                         </DropdownItem>
                            <DropdownItem>
                                Option 2
                        </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </div>


    )
}

export default Header
