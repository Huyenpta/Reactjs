import { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import GlobalContext from "../context/context";

function Cart() {
  const { data, setData } = useContext(GlobalContext);
  const cart = data.cart;

  // Hàm tăng số lượng
  const increaseQty = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, buy_qty: item.buy_qty + 1 } : item
    );
    setData({ ...data, cart: newCart });
  };

  // Hàm giảm số lượng
  const decreaseQty = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id ? { ...item, buy_qty: item.buy_qty - 1 } : item
      )
      .filter((item) => item.buy_qty > 0);
    setData({ ...data, cart: newCart });
  };

  // Hàm xóa sản phẩm
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setData({ ...data, cart: newCart });
  };

  // Tính tổng tiền
  const total = cart.reduce((sum, item) => sum + item.price * item.buy_qty, 0);

  return (
    <Container>
      <h1>Giỏ hàng</h1>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào trong giỏ.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.image}   // ✅ đổi thumbnail → image
                      alt={item.name}    // ✅ đổi title → name
                      width={60}
                      className="me-2"
                    />
                    {item.name}
                  </td>
                  <td>{item.price.toLocaleString("vi-VN")}đ</td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </Button>{" "}
                    {item.buy_qty}{" "}
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </Button>
                  </td>
                  <td>{(item.price * item.buy_qty).toLocaleString("vi-VN")}đ</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="text-end">Tổng cộng: {total.toLocaleString("vi-VN")}đ</h3>
          {/* Tổng cộng + Nút thanh toán */}
          <div className="d-flex justify-content-between align-items-center">
            <h3>Tổng cộng: {total.toLocaleString("vi-VN")}đ</h3>
            <Button as={Link} to="/checkout" variant="success">
              Thanh toán
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
