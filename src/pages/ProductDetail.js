// src/pages/ProductDetail.js
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import GlobalContext from "../context/context";
import products from "../data/products";
import BannerProduct from "../components/BannerProduct";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { data, setData } = useContext(GlobalContext);

  const addToCart = () => {
    const cart = [...data.cart];
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      exist.buy_qty += 1;
    } else {
      cart.push({ ...product, buy_qty: 1 });
    }
    setData({ ...data, cart });
  };

  if (!product) return <p>Sản phẩm không tồn tại</p>;

  return (
    <>
      <BannerProduct />
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <img src={product.image} alt={product.name} className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>{product.name}</h2>
            <p className="text-muted">
              Giá: {product.price.toLocaleString()}đ
            </p>
            <p>{product.desc}</p>
            <Button variant="success" onClick={addToCart}>
              Thêm vào giỏ hàng
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
