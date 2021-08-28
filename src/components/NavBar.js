import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-scroll'

const NavBar = ({name}) => {
    return (
        <Navbar variant="light" fixed="top" bg="light" expand="lg" className="navbar">
            <Navbar.Brand href="#home" className="name">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav className ="me-auto"></Nav>
                <Nav className="me-auto n" navbarScroll>
                    <Nav.Link href="#about" className="navbar-element">About</Nav.Link>
                    <Nav.Link href="#experience" className="navbar-element">Experience</Nav.Link>
                    <Nav.Link href="#resume" className="navbar-element">Resume</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#contact" className="navbar-element">Contact</Nav.Link>
                </Nav>
             </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;