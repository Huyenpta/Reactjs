// src/pages/ProductDetail.js
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, InputGroup, FormControl, Carousel, Tab, Nav } from "react-bootstrap";
import { useContext, useState } from "react";
import GlobalContext from "../context/context";
import products from "../data/products";
import BannerProduct from "../components/BannerProduct";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { data, setData } = useContext(GlobalContext);
  const [qty, setQty] = useState(1);

  const addToCart = () => {
    const cart = [...data.cart];
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      exist.buy_qty += qty;
    } else {
      cart.push({ ...product, buy_qty: qty });
    }
    setData({ ...data, cart });
  };

  if (!product) return <p className="text-center py-5">⚠️ Sản phẩm không tồn tại</p>;

  return (
    <>
      <BannerProduct />

      {/* Phần chi tiết sản phẩm */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-bold mb-3">{product.name}</h2>
            <h4 className="text-success fw-bold mb-3">
              {product.price.toLocaleString()}đ
            </h4>
            <p className="mb-4">{product.desc}</p>

            {/* Chọn số lượng */}
            <div className="d-flex justify-content-center">
              <InputGroup className="mb-3" style={{ maxWidth: "180px" }}>
                <Button
                  variant="outline-secondary"
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                >
                  -
                </Button>
                <FormControl
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="text-center"
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setQty(qty + 1)}
                >
                  +
                </Button>
              </InputGroup>
            </div>

            <Button variant="success" size="lg" onClick={addToCart}>
              🛒 Thêm vào giỏ hàng
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Tabs mô tả */}
      <Container className="py-5 border-top">
        <Tab.Container defaultActiveKey="info">
          <Nav variant="tabs" className="mb-3">
            <Nav.Item>
              <Nav.Link eventKey="info">Thông tin sản phẩm</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="guide">Hướng dẫn sử dụng</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* Tab thông tin */}
            <Tab.Pane eventKey="info">
              <Row>
                <Col md={6} className="text-start">
                  <h4 className="fw-bold mb-3 ">Mô tả chi tiết</h4>
                  <p>
                    {product.longDesc ||
                      "Sản phẩm được chế biến từ nguyên liệu chọn lọc, hương vị đậm đà và lợi ích sức khỏe tuyệt vời."}
                  </p>
                  <p>
                    Với hương thơm tự nhiên và bao bì sang trọng, đây là lựa chọn
                    lý tưởng để thưởng thức hoặc làm quà tặng.
                  </p>
                </Col>
                <Col md={6} >
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded shadow"
                        src={product.image}
                        alt="First slide"
                        style={{ maxHeight: "350px", objectFit: "cover" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 rounded shadow"
                        src={product.image}
                        alt="Second slide"
                        style={{ maxHeight: "350px", objectFit: "cover" }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
            </Tab.Pane>

            {/* Tab hướng dẫn */}
            <Tab.Pane eventKey="guide">
              <h4 className="fw-bold mb-3 text-start">Cách sử dụng</h4>
              <ul className="text-start">
                <li>Sử dụng khoảng 3-5g trà cho mỗi tách.</li>
                <li>Pha với nước nóng 80-90°C, hãm 3-5 phút.</li>
                <li>Có thể pha nhiều lần cho đến khi nhạt vị.</li>
                <li>Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.</li>
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </>
  );
}

export default ProductDetail;
