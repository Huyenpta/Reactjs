import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaLeaf, FaNewspaper, FaEnvelope } from "react-icons/fa";

function NavBar() {
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
              <NavDropdown.Item as={Link} to="/category">Xem tất cả sản phẩm</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/oolong">Trà Oolong</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/traden">Trà đen</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/traxanh">Trà xanh</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/news"><FaNewspaper className="me-2" />Tin tức</Nav.Link>
            <Nav.Link as={Link} to="/contact"><FaEnvelope className="me-2" />Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
