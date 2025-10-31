import { Col } from 'react-bootstrap';

const SubjectCard = ({ subject, description, image }) => (
    <Col xs={6} md={3} lg={2} className="text-center mb-4">
        <img
            src={`/assets/${image}`}
            alt={subject}
            className="rounded-circle mb-3"
            style={{ width: '80px', height: '80px', objectFit: 'contain' }}
        />
        <h6 className="fw-bold">{subject}</h6>
        <p className="small">{description}</p>
    </Col>
);
export default SubjectCard;