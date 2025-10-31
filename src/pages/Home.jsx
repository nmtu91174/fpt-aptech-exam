// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ObjectItem from '../components/ObjectItem';
import SubjectItem from '../components/SubjectItem';

// Component cho Hero Banner (lấy từ layout [cite: 10-18])
function HeroBanner() {
    return (
        <Row className="text-center bg-light p-5 mb-5 rounded align-items-center">
            <Col md={6}>
                {/* Bạn có thể thay bằng link ảnh logo thật [cite: 10] */}
                <Image src="public\images\Logo-fpt-aptech-1.png" fluid rounded />
            </Col>
            <Col md={6}>
                <h1>HỌC LẬP TRÌNH - HỌC APTECH [cite: 15, 16]</h1>
                <h2>HỌC TẠI FPT </h2>
                <p>SINCE 1999 [cite: 17]</p>
            </Col>
        </Row>
    );
}

export default function Home() {
    // 1. Dùng useState để lưu dữ liệu
    const [objects, setObjects] = useState([]);
    const [subjects, setSubjects] = useState([]);

    // 2. Dùng useEffect để tải (fetch) dữ liệu từ file trong public
    useEffect(() => {
        // Tải objects.json
        fetch('/objects.json')
            .then(res => res.json())
            .then(data => setObjects(data));

        // Tải subjects.json
        fetch('/subjects.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, []); // [] = Chạy 1 lần duy nhất khi component mount

    return (
        <Container>
            {/* Section 1: Hero Banner */}
            <HeroBanner />

            {/* Section 2: Objects Section  */}
            <section className="mb-5">
                <h2 className="text-center mb-4">WHO SHOULD LEARN PROGRAMING IN FPT APTECH?</h2>
                <Row>
                    {/* 3. Dùng map() để áp dụng objects.json  */}
                    {objects.map(obj => (
                        <ObjectItem
                            key={obj.id}
                            title={obj.title}
                            description={obj.description}
                        />
                    ))}
                </Row>
            </section>

            {/* Section 3: Subjects Section  */}
            <section>
                <h2 className="text-center mb-4">WHAT IS THE COURSE PROGRAM?</h2>
                <Row>
                    {/* 3. Dùng map() để áp dụng subjects.json  */}
                    {subjects.map(subj => (
                        <SubjectItem
                            key={subj.id}
                            subject={subj.subject}
                            description={subj.description}
                        />
                    ))}
                </Row>
            </section>
        </Container>
    );
}