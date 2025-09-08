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
                <Row className="text-start mb-5">
                    <Col>
                        <h3>Lịch Sử Trà Ở Việt Nam</h3>

                        <p>Tại Việt Nam, trà xuất hiện từ rất sớm và nhanh chóng trở thành một phần trong đời sống tinh thần của người Việt. Từ thời phong kiến, trà không chỉ là thức uống thường ngày mà còn gắn liền với lễ nghi, văn hóa ứng xử và nghệ thuật thưởng trà.</p>

                        <p>Người xưa coi uống trà là một thú tao nhã, gắn với nếp sống thanh tịnh của nho sĩ, tao nhân mặc khách. Qua mỗi chén trà, người ta tìm thấy sự tĩnh tại, thảnh thơi và cơ hội sẻ chia trong những cuộc đàm đạo.</p>

                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col md={6}>
                        <img src="images/history.webp" alt="Lịch sử trà" className="img-fluid rounded-3 shadow" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center text-start">

                        <p><b>Trải qua nhiều thế kỷ, Việt Nam hình thành nên những vùng trà nổi tiếng như:</b></p>

                        <p>- Trà Thái Nguyên – được mệnh danh là “đệ nhất danh trà” bởi hương cốm đặc trưng, vị chát dịu và hậu ngọt.</p>

                        <p>- Trà sen Hồ Tây – tinh hoa của Hà Nội xưa, khi từng bông sen được ướp với trà, tạo nên hương vị thanh tao, quý phái.</p>

                        <p>- Trà Shan Tuyết – mọc trên những cây chè cổ thụ hàng trăm năm tuổi ở Hà Giang, Yên Bái, với vị đậm đà, hậu ngọt sâu lắng.</p>

                        <p>Ngày nay, uống trà vẫn là một thói quen văn hóa của người Việt, từ những buổi sáng ở vùng quê với ấm trà xanh giản dị, cho đến những nghi lễ, dịp tiếp khách trang trọng. Trà không chỉ để thưởng thức mà còn gói ghém trong đó hồn cốt văn hóa và tinh thần gắn kết cộng đồng của dân tộc Việt Nam.</p>
                    </Col>
                </Row>

                <Row className="text-start mb-5">
                    <Col md={6} className="d-flex flex-column justify-content-center order-md-2">
                        <img src="images/traxanh.jpg" alt="Lợi ích của trà" className="img-fluid rounded-3 shadow" />
                    </Col>
                    <Col md={6} className="order-md-1">
                        <h3>Lợi ích sức khỏe của trà</h3>
                        <p>
                            Uống trà không chỉ là một thói quen thanh nhã, mà còn mang lại nhiều lợi ích thiết thực cho sức khỏe. Mỗi loại trà đều có đặc tính riêng: trà xanh giàu chất chống oxy hóa giúp giảm nguy cơ tim mạch và ung thư, trà hoa cúc hỗ trợ cải thiện giấc ngủ, còn trà gừng lại giúp tiêu hóa tốt hơn.
                        </p>
                        <h4>Một Số Công Dụng Nổi Bật</h4>
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