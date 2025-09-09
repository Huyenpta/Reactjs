import { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import GlobalContext from "../context/context";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { data, setData } = useContext(GlobalContext);

  const [orderInfo, setOrderInfo] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo({ ...orderInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.cart.length === 0) {
      alert("🛒 Giỏ hàng trống, vui lòng thêm sản phẩm!");
      return;
    }

    // ✅ Giả sử gửi đơn hàng (ở đây chỉ log)
    console.log("Thông tin đơn hàng:", orderInfo);
    console.log("Sản phẩm:", data.cart);

    // Clear giỏ hàng
    setData({ ...data, cart: [] });

    // Chuyển hướng sang trang đặt hàng thành công
    navigate("/order-success");
  };

  // Tính tổng tiền
  const total = data.cart.reduce(
    (sum, item) => sum + item.price * item.buy_qty,
    0
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Thanh toán</h2>
      <Row>
        {/* Form nhập thông tin */}
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h4>Thông tin khách hàng</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="text-start mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={orderInfo.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="text-start mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={orderInfo.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="text-start mb-3">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="address"
                  value={orderInfo.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="text-start mb-3">
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="note"
                  value={orderInfo.note}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="submit" variant="success" className="w-100">
                Xác nhận đặt hàng
              </Button>
            </Form>
          </Card>
        </Col>

        {/* Tóm tắt đơn hàng */}
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h4>Đơn hàng của bạn</h4>
            {data.cart.length === 0 ? (
              <p>Chưa có sản phẩm trong giỏ</p>
            ) : (
              <>
                <ul className="list-unstyled">
                  {data.cart.map((item, i) => (
                    <li key={i} className="d-flex justify-content-between mb-2">
                      <span>
                        {item.name} x {item.buy_qty}
                      </span>
                      <span>
                        {(item.price * item.buy_qty).toLocaleString()}đ
                      </span>
                    </li>
                  ))}
                </ul>
                <hr />
                <h5 className="text-end">
                  Tổng: {total.toLocaleString()}đ
                </h5>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
