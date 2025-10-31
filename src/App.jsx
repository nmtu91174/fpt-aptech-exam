// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// Import các trang giả để link hoạt động
const About = () => <h2>Trang Giới Thiệu</h2>;
const Products = () => <h2>Trang Sản Phẩm</h2>;
const Booking = () => <h2>Trang Đặt Chỗ</h2>;

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. HEADER */}
      <Header />

      {/* 2. BODY (dùng Routes) */}
      <main style={{ flex: 1 }} className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/booking" element={<Booking />} />
          {/* Thêm các route khác cho Sign In/Sign Up... */}
        </Routes>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;