import { Card, Col } from 'react-bootstrap';

const ObjectCard = ({ title, description, image }) => (
    <Col md={4} className="mb-4">
        <Card className="h-100 shadow-sm text-center">
            <Card.Img
                variant="top"
                src={`/assets/${image}`}
                alt={title}
                style={{ height: '180px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title className="text-primary text-uppercase">{title}</Card.Title>
                <Card.Text className="small">{description}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);
export default ObjectCard;