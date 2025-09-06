import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingBag } from "react-icons/fa";

// Sample product data
const products = [
  { id: 1, name: 'Trà Oolong Tứ Quý', price: '100.000đ', image: '/images/olong-web-1.jpg', category: 'oolong' },
  { id: 2, name: 'Trà Oolong Dong Ding', price: '120.000đ', image: '/images/DONGDING1.png', category: 'oolong' },
  { id: 3, name: 'Trà Oolong Thiết Quan Âm', price: '180.000đ', image: '/images/TQA-3.png', category: 'oolong' },
  { id: 4, name: 'Trà Oolong Quý Phi', price: '150.000đ', image: '/images/QUYPHI.png', category: 'oolong' },
];

function Oolong() {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Sản Phẩm</h1>
      {['oolong'].map(category => (
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

export default Oolong;
