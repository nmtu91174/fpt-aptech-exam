// src/components/Footer.jsx
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 py-3 text-center">
            <Container>
                <p className="mb-0">&copy; FPT Aptech</p>
                <p className="mb-0">No 8 Ton That Thuy - My Dinh, Nam Tu Liem, Ha Noi</p>
            </Container>
        </footer>
    );
}