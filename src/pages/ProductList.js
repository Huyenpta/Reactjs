import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingBag, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../context/context";   // ✅ import context
import products from "../data/products";
import BannerProduct from "../components/BannerProduct";

function ProductList() {
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

  return (
    <>
      <BannerProduct />
      <Container className="py-5">
        <h1 className="text-center mb-4">Sản Phẩm</h1>
        {["oolong", "den", "xanh"].map((category) => (
          <div key={category} className="mb-5">
            <h2 className="text-center mb-4 text-capitalize">
              Trà{" "}
              {category === "oolong"
                ? "Oolong"
                : category === "den"
                  ? "Đen"
                  : "Xanh"}
            </h2>
            <Row xs={1} md={2} lg={4} className="g-4">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <Col key={product.id}>
                    <Card className="h-100 shadow-sm border-0 rounded-3">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body className="d-flex flex-column text-center">
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text className="text-muted">
                          {product.price.toLocaleString()}đ
                        </Card.Text>
                        <div className="mt-auto d-flex justify-content-center gap-2">
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

                          {/* Nút Thêm giỏ hàng */}
                          <Button
                            variant="success"
                            className="rounded-pill px-3"
                            onClick={() => addToCart(product)}
                          >
                            <FaCartPlus className="me-2" />
                            Thêm
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
    </>
  );
}

export default ProductList;
