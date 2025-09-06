import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Introduce() {
    return (
        <div className="py-5">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h1>Giới thiệu về Trà</h1>
                        <p className="lead">Hành trình khám phá hương vị tinh túy từ thiên nhiên</p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={6}>
                        <img src="/images/history.webp" alt="Lịch sử trà" className="img-fluid rounded-3 shadow" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <h3>Nguồn gốc và lịch sử</h3>
                        <p>
                            Trà là một trong những loại đồ uống lâu đời nhất thế giới, có nguồn gốc từ Trung Quốc và được phát hiện cách đây hơn 5000 năm. Truyền thuyết kể rằng, Hoàng đế Thần Nông đã vô tình khám phá ra trà khi một chiếc lá rơi vào cốc nước nóng của ông. Từ đó, trà trở thành một phần không thể thiếu của văn hóa Á Đông và lan tỏa ra toàn cầu.
                        </p>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={6} className="d-flex flex-column justify-content-center order-md-2">
                        <img src="/images/traxanh.jpg" alt="Lợi ích của trà" className="img-fluid rounded-3 shadow" />
                    </Col>
                    <Col md={6} className="order-md-1">
                        <h3>Lợi ích sức khỏe của trà</h3>
                        <p>
                            Uống trà không chỉ là một thói quen mà còn mang lại nhiều lợi ích cho sức khỏe. Trà xanh chứa chất chống oxy hóa mạnh mẽ, giúp giảm nguy cơ mắc các bệnh tim mạch và ung thư. Trà hoa cúc giúp cải thiện giấc ngủ, trong khi trà gừng hỗ trợ tiêu hóa.
                        </p>
                        <p>• Lợi Tiểu và Giảm Huyết Áp: Trà xanh giúp lợi tiểu, giảm sưng và ức chế sự hấp thu của tiểu quản thận. Các hợp chất trong trà còn giúp giảm huyết áp, rất phù hợp cho những người mắc cao huyết áp.
                        </p>
                        <p>
                            • Hỗ Trợ Giảm Cân và Tiêu Hóa: Chất caffeine trong trà xanh thúc đẩy tiết dịch dạ dày, giúp tiêu hóa nhanh chóng và phân giải mỡ thừa. Các vitamin trong trà cũng hỗ trợ giảm mỡ cơ thể, mặc dù hiệu quả có thể khác nhau tùy theo từng cá nhân.

                        </p>
                        <p> • Phòng Chống Bệnh Tim: Các hợp chất trong trà xanh giúp tăng cường độ đàn hồi của cơ tim, giảm cholesterol và mỡ trung tính trong máu. Vitamin C và P thúc đẩy bài tiết cholesterol, trong khi caffeine và các chất khác mở rộng huyết quản, cải thiện lưu thông máu.

                        </p>
                        <p>
                            • Chống Lão Hóa: Trà xanh chứa nhiều chất chống oxy hóa, vitamin và amino acids, giúp chống lão hóa và phòng ngừa tình trạng thiếu vitamin. Uống trà thường xuyên có thể giúp kéo dài tuổi thọ và duy trì sức khỏe tốt, như thấy rõ ở những người yêu thích trà đạo tại Nhật Bản.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Body className="text-center">
                                <Card.Title>Trà và cuộc sống hiện đại</Card.Title>
                                <Card.Text>
                                    Trong cuộc sống bận rộn ngày nay, một tách trà không chỉ giúp chúng ta thư giãn mà còn là cầu nối để chia sẻ những khoảnh khắc quý giá. Hãy cùng chúng tôi khám phá thế giới trà đa dạng, từ trà truyền thống đến các loại trà hiện đại, để tìm thấy hương vị yêu thích của riêng bạn.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Introduce;