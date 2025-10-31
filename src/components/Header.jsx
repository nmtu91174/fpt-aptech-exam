// src/components/Header.jsx
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    {/* Lấy logo FPT Aptech từ link ảnh, bạn có thể thay bằng ảnh thật */}
                    <img
                        src="https://fpt.aptech.edu.vn/images/logo-fpt-aptech.png"
                        height="30"
                        className="d-inline-block align-top"
                        alt="FPT Aptech Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Links bên trái  */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/booking">Booking</Nav.Link>
                        <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
                    </Nav>
                    {/* Links bên phải [cite: 8, 9] */}
                    <Nav>
                        <Nav.Link as={Link} to="/signin">
                            <Button variant="outline-light" className="me-2">Sign In</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/signup">
                            <Button variant="success">Sign Up</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}