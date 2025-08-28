import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand>My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#">Trang chủ</Nav.Link>
            <Nav.Link href="#">Giới thiệu</Nav.Link>
            <NavDropdown title="Sản phẩm" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Trà ô long</NavDropdown.Item>
              <NavDropdown.Item href="#">Trà hoa quả</NavDropdown.Item>
              <NavDropdown.Item href="#">Trà sen</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Công bố sản phẩm</Nav.Link>
            <Nav.Link href="#">Công thức</Nav.Link>
            <Nav.Link href="#">Tin tức</Nav.Link>
            <Nav.Link href="#">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
