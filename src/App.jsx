import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ObjectCard from './components/ObjectCard';
import SubjectCard from './components/SubjectCard';
import objects from './data/objects.json';
import subjects from './data/subjects.json';
import bannerImg from './assets/banner.png'; // <-- ảnh banner ≤30M

function Home() {
  return (
    <>
      <Header />
      {/* ---------- BANNER ---------- */}
      <div className="bg-warning text-dark py-5">
        <Container className="text-center">
          <img src={bannerImg} alt="Banner" className="img-fluid rounded" />
          <h1 className="mt-3">HỌC LẬP TRÌNH HỌC APTECH HỌC TẠI FPT</h1>
        </Container>
      </div>

      {/* ---------- OBJECT SECTION ---------- */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5 text-uppercase">
            SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?
          </h2>
          <Row>
            {objects.map(o => (
              <ObjectCard
                key={o.id}
                title={o.title}
                description={o.description}
                image={o.image}
              />
            ))}
          </Row>
        </Container>
      </section>

      {/* ---------- SUBJECT SECTION ---------- */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 text-uppercase">
            WHAT IS THE COURSE PROGRAM?
          </h2>
          <Row className="justify-content-center">
            {subjects.map(s => (
              <SubjectCard
                key={s.id}
                subject={s.subject}
                description={s.description}
                image={s.image}
              />
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default function App() {
  return <Home />;
}