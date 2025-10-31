// src/components/SubjectItem.jsx
import { Card, Col } from 'react-bootstrap';

export default function SubjectItem({ subject, description }) {
    // Lấy ảnh từ một dịch vụ placeholder
    const placeholderImage = `https://via.placeholder.com/300x150/28a745/FFFFFF?text=${subject}`;

    return (
        <Col md={4} className="mb-4">
            <Card className="h-100">
                <Card.Img variant="top" src={placeholderImage} />
                <Card.Body>
                    <Card.Title>{subject}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
