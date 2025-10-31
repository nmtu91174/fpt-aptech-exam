import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo-fpt-aptech.png';   // <-- đặt logo của bạn ở assets

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className="border-bottom shadow-sm">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src={logo} alt="FPT Aptech" height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                        <Nav.Link as={NavLink} to="/booking">Booking</Nav.Link>
                        <Nav.Link as={NavLink} to="/locations">Locations</Nav.Link>
                    </Nav>
                    <div className="d-flex gap-2">
                        <Button variant="outline-warning">Sign In</Button>
                        <Button variant="warning">Sign Up</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;