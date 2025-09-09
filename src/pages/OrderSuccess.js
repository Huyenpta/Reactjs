import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <Container className="py-5">
      <Card className="text-center p-5 shadow-sm">
        <h1 className="text-success mb-3">✅ Đặt hàng thành công!</h1>
        <p>Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ để xác nhận đơn hàng sớm nhất.</p>
        <p>Bạn có thể tiếp tục mua sắm hoặc xem giỏ hàng của mình.</p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button as={Link} to="/" variant="primary">
            Tiếp tục mua sắm
          </Button>
          <Button as={Link} to="/cart" variant="secondary">
            Xem giỏ hàng
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default OrderSuccess;