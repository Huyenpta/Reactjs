import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingBag } from "react-icons/fa";

// Sample product data
const products = [
  { id: 8, name: 'Trà Xanh Thái Nguyên', price: '220.000đ', image: '/images/Tra-Xanh-Thai-Nguyen-1.png', category: 'xanh' },
  { id: 9, name: 'Trà Xanh Đông Phương', price: '150.000đ', image: '/images/xanh-DP-2.png', category: 'xanh' },
];

function ProductList() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Sản Phẩm</h1>
      {['xanh'].map(category => (
        <div key={category} className="mb-5">
          <h2 className="text-center mb-4 text-capitalize">{`Trà ${category.replace('-', ' ')}`}</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
            {products.filter(p => p.category === category).map(product => (
              <Col key={product.id}>
                <Card className="h-100 shadow-sm border-0 rounded-3">
                  <div className="position-relative">
                    <Card.Img variant="top" src={product.image} className="rounded-top-3" />
                    <Button variant="light" className="position-absolute top-0 end-0 m-2 rounded-circle shadow-sm">
                      <FaHeart className="text-danger" />
                    </Button>
                  </div>
                  <Card.Body className="d-flex flex-column text-center">
                    <Card.Title className="fw-bold fs-5">{product.name}</Card.Title>
                    <Card.Text className="text-muted mb-2">{product.price}</Card.Text>
                    <div className="mt-auto d-grid gap-2 d-sm-flex justify-content-center">
                      <Button variant="outline-dark" className="rounded-pill px-4">
                        <FaShoppingBag className="me-2" />
                        Chi tiết
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default ProductList;
