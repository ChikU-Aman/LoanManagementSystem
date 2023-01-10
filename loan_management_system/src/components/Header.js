import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="bgimage">Loan Managment System</Navbar.Brand>
                <Nav>
                    <Nav.Link href="login">Sign in</Nav.Link>
                </Nav>
            </Container>
        </Navbar>



    )
}

export default Header