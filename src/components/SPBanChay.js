import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaShoppingBag, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../context/context";   // ✅ dùng context
import products from "../data/products";

function SPBanChay() {
  const { data, setData } = useContext(GlobalContext);

  // Hàm thêm vào giỏ
  const addToCart = (product) => {
    const cart = [...data.cart];
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      exist.buy_qty += 1;
    } else {
      cart.push({ ...product, buy_qty: 1 });
    }
    setData({ ...data, cart });
  };

  // Lấy 8 sản phẩm đầu tiên
  const bestSellingProducts = products.slice(0, 8);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">SẢN PHẨM BÁN CHẠY</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {bestSellingProducts.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="rounded-top-3"
                />
                <Button
                  variant="light"
                  className="position-absolute top-0 end-0 m-2 rounded-circle shadow-sm"
                >
                  <FaHeart className="text-danger" />
                </Button>
              </div>
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="fw-bold fs-5">{product.name}</Card.Title>
                <Card.Text className="text-muted mb-2">
                  {product.price.toLocaleString()}đ
                </Card.Text>
                <div className="mt-auto d-flex justify-content-center gap-2">
                  {/* Nút Thêm giỏ hàng */}
                  <Button
                    variant="success"
                    className="rounded-pill px-3"
                    onClick={() => addToCart(product)}
                  >
                    <FaCartPlus className="me-2" />
                    Thêm
                  </Button>

                  {/* Nút Chi tiết */}
                  <Button
                    as={Link}
                    to={`/product/${product.id}`}
                    variant="outline-dark"
                    className="rounded-pill px-3"
                  >
                    <FaShoppingBag className="me-2" />
                    Chi tiết
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SPBanChay;