import { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaLeaf, FaNewspaper, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import GlobalContext from "../context/context";
import products from "../data/products"; // 👈 import products từ file local

function NavBar() {
  const { data } = useContext(GlobalContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // lấy ra danh sách category duy nhất từ products
    const uniqueCategories = [...new Set(products.map((p) => p.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="row">
      <Container>
        <Navbar.Brand as={Link} to="/">F2505T</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/"><FaHome className="me-2" />Trang chủ</Nav.Link>
            <Nav.Link as={Link} to="/introduce"><FaInfoCircle className="me-2" />Giới thiệu</Nav.Link>
            
            <NavDropdown title={<><FaLeaf className="me-2" />Sản phẩm</>} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">Xem tất cả sản phẩm</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* duyệt tự động categories */}
              {categories.map((cat) => (
                <NavDropdown.Item as={Link} to={`/${cat}`} key={cat}>
                  Trà {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/news"><FaNewspaper className="me-2" />Tin tức</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart className="me-2" />
              Giỏ hàng ({data.cart.length})
            </Nav.Link>
            <Nav.Link as={Link} to="/contact"><FaEnvelope className="me-2" />Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
