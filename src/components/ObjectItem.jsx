// src/components/ObjectItem.jsx
import { Card, Col } from 'react-bootstrap';

// Nhận props title và description từ file JSON
export default function ObjectItem({ title, description }) {
    // Lấy ảnh từ một dịch vụ placeholder, vì "image/..." là đường dẫn giả
    const placeholderImage = `https://via.placeholder.com/300x150/007bff/FFFFFF?text=${title.replace(' ', '+')}`;

    return (
        <Col md={4} className="mb-4">
            <Card className="h-100">
                <Card.Img variant="top" src={placeholderImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}